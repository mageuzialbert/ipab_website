"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor smoke-trail effect (ported from the 21st.dev canvas snippet,
 * rewritten as clean scoped TypeScript; same physics, same look):
 * 80 spring-chained trails follow the cursor, drawn as additive
 * hue-cycling strokes.
 *
 * Deliberate guards: only runs for mouse users (pointer: fine) so phones
 * never pay the ~4k spring updates/frame, skips entirely under
 * prefers-reduced-motion, pauses while the hero is offscreen, and cleans
 * up fully on unmount.
 */

const CONFIG = {
  trails: 80,
  size: 50,
  friction: 0.5,
  dampening: 0.025,
  tension: 0.99,
} as const;

// Faithful to the original: hue oscillates 285 ± 85 (blue → violet → red)
const HUE = { offset: 285, amplitude: 85, frequency: 0.0015 } as const;

type Point = { x: number; y: number };

class TrailNode {
  x = 0;
  y = 0;
  vx = 0;
  vy = 0;
}

class Trail {
  private spring: number;
  private friction: number;
  private nodes: TrailNode[];

  constructor(spring: number, origin: Point) {
    this.spring = spring + 0.1 * Math.random() - 0.05;
    this.friction = CONFIG.friction + 0.01 * Math.random() - 0.005;
    this.nodes = Array.from({ length: CONFIG.size }, () => {
      const node = new TrailNode();
      node.x = origin.x;
      node.y = origin.y;
      return node;
    });
  }

  update(target: Point) {
    let spring = this.spring;
    const head = this.nodes[0];
    head.vx += (target.x - head.x) * spring;
    head.vy += (target.y - head.y) * spring;

    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (i > 0) {
        const prev = this.nodes[i - 1];
        node.vx += (prev.x - node.x) * spring;
        node.vy += (prev.y - node.y) * spring;
        node.vx += prev.vx * CONFIG.dampening;
        node.vy += prev.vy * CONFIG.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= CONFIG.tension;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    let x = this.nodes[0].x;
    let y = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(x, y);
    let i = 1;
    for (; i < this.nodes.length - 2; i++) {
      const node = this.nodes[i];
      const next = this.nodes[i + 1];
      x = 0.5 * (node.x + next.x);
      y = 0.5 * (node.y + next.y);
      ctx.quadraticCurveTo(node.x, node.y, x, y);
    }
    const node = this.nodes[i];
    const next = this.nodes[i + 1];
    ctx.quadraticCurveTo(node.x, node.y, next.x, next.y);
    ctx.stroke();
    ctx.closePath();
  }
}

export default function SmokeTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let started = false;
    let huePhase = Math.random() * 2 * Math.PI;
    const pos: Point = { x: 0, y: 0 };
    let trails: Trail[] = [];

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pos.x = e.clientX - rect.left;
      pos.y = e.clientY - rect.top;
      if (!started) {
        started = true;
        trails = Array.from(
          { length: CONFIG.trails },
          (_, i) => new Trail(0.45 + (i / CONFIG.trails) * 0.025, pos),
        );
      }
    };

    const render = () => {
      if (running && started) {
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "lighter";
        huePhase += HUE.frequency;
        const hue = HUE.offset + Math.sin(huePhase) * HUE.amplitude;
        ctx.strokeStyle = `hsla(${Math.round(hue)},100%,50%,0.025)`;
        ctx.lineWidth = 10;
        for (const trail of trails) {
          trail.update(pos);
          trail.draw(ctx);
        }
      }
      raf = requestAnimationFrame(render);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    // Don't burn frames while the hero is scrolled away
    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting;
    });
    io.observe(canvas);

    resize();
    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      resizeObserver.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full"
    />
  );
}
