import type { Lang } from "@/lib/i18n";

/**
 * Privacy Policy copy. Required by Meta/WhatsApp Business for the number
 * 255759561311 used across the website and all iPAB products.
 * English is the source of truth; Swahili drafted in translation;
 * TODO (Albert): review the Swahili before launch.
 */

export type PrivacySection = {
  heading: string;
  body?: string[];
  list?: string[];
};

export type PrivacyContent = {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string[];
  sections: PrivacySection[];
};

export const PRIVACY: Record<Lang, PrivacyContent> = {
  en: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: 17 June 2026",
    intro: [
      "iPAB International Limited (“iPAB”, “we”, “us”) builds business management systems — SmartPoint, SmartPharmacy, SmartHotels and SmartColleges — and provides related cloud services to businesses in Tanzania. This policy explains what information we collect, how we use it, and the choices you have.",
      "It applies to our website, our products, and to the WhatsApp Business number +255 759 561 311 that we use to talk with customers and prospects across all iPAB products.",
    ],
    sections: [
      {
        heading: "Who we are",
        body: [
          "iPAB International Limited is a Tanzanian company based at Magomeni Usalama, Dar es Salaam, Tanzania. We are the data controller responsible for the information described in this policy. You can reach us using the details in the “Contact us” section below.",
        ],
      },
      {
        heading: "Information we collect",
        body: ["We collect only what we need to run our service and support you:"],
        list: [
          "Contact details you give us — your name, business name, phone number, email address and WhatsApp number when you message us, request a demo, or sign up.",
          "Business operations data — sales, stock, invoices, expenses, customer records, bookings, student or staff records that you enter into the iPAB system you use. This data belongs to your business; we process it on your behalf to provide the service.",
          "Messages you send us — the content of your WhatsApp, phone, email and chat conversations with us, so we can answer and keep a record of support.",
          "Technical and usage data — basic device, browser and log information (such as IP address and pages visited) collected automatically when you use our website or apps, to keep them secure and working.",
        ],
      },
      {
        heading: "How we use your information",
        body: ["We use your information to:"],
        list: [
          "Provide, set up, customise and support the iPAB systems you use.",
          "Respond to your enquiries and provide customer support over WhatsApp, phone and email.",
          "Send you service messages — for example setup confirmations, daily summaries, payment reminders and important updates about your account.",
          "Operate, secure, troubleshoot and improve our products and website.",
          "Meet our legal, tax and regulatory obligations in Tanzania.",
        ],
      },
      {
        heading: "WhatsApp and messaging",
        body: [
          "WhatsApp is our main way of talking with customers. When you message our WhatsApp Business number, we receive your phone number, WhatsApp profile name and the messages you send, and we use them only to reply, support you and provide our service.",
          "Your use of WhatsApp itself is also governed by WhatsApp’s and Meta’s own terms and privacy policies. We do not sell your number, and we do not send unsolicited marketing to people who have not contacted us or signed up.",
        ],
      },
      {
        heading: "How we share information",
        body: [
          "We do not sell your personal information. We share it only when necessary:",
        ],
        list: [
          "With trusted service providers — such as hosting, messaging (including WhatsApp/Meta), SMS and email providers — who process data on our behalf to run the service.",
          "Within your own business — staff accounts you create can see the data their permissions allow.",
          "When required by law — to comply with a valid legal request, court order, or regulatory obligation, or to protect our rights, users and the public.",
        ],
      },
      {
        heading: "Data storage and security",
        body: [
          "We protect your information with reasonable technical and organisational measures, including access controls and staff accounts with permissions. No system is perfectly secure, but we work to keep your data safe and to limit who can see it. Some of our service providers may store data on servers outside Tanzania.",
        ],
      },
      {
        heading: "How long we keep your information",
        body: [
          "We keep your information for as long as you use our service and for as long afterwards as needed to support you, resolve disputes, and meet legal and tax obligations. Business operations data is kept while your account is active; you can ask us to delete data that we are not legally required to keep.",
        ],
      },
      {
        heading: "Your rights and choices",
        body: ["You can:"],
        list: [
          "Ask for a copy of the personal information we hold about you.",
          "Ask us to correct information that is wrong or out of date.",
          "Ask us to delete information we are not required to keep.",
          "Stop receiving non-essential messages — reply STOP on WhatsApp or SMS, or tell us, and we will stop.",
        ],
      },
      {
        heading: "Children’s privacy",
        body: [
          "Our products are made for businesses and are not directed at children. Where a SmartColleges institution records student information, it does so as the controller of that data under its own responsibility; iPAB processes it only on the institution’s instructions.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "We may update this policy from time to time. When we do, we will change the “Last updated” date above and, where appropriate, let you know. Please check back occasionally.",
        ],
      },
      {
        heading: "Contact us",
        body: [
          "If you have questions about this policy or your information, contact us:",
        ],
        list: [
          "WhatsApp / phone: +255 759 561 311 · +255 743 525 913",
          "Email: info@ipab.co.tz",
          "Address: Magomeni Usalama, Dar es Salaam, Tanzania",
        ],
      },
    ],
  },
  sw: {
    eyebrow: "Kisheria",
    title: "Sera ya Faragha",
    updated: "Imesasishwa mara ya mwisho: 17 Juni 2026",
    intro: [
      "iPAB International Limited (“iPAB”, “sisi”) hutengeneza mifumo ya kusimamia biashara — SmartPoint, SmartPharmacy, SmartHotels na SmartColleges — na hutoa huduma za mtandao kwa biashara nchini Tanzania. Sera hii inaeleza taarifa tunazokusanya, jinsi tunavyozitumia, na chaguo ulizonazo.",
      "Inahusu tovuti yetu, bidhaa zetu, na namba ya WhatsApp Business +255 759 561 311 tunayoitumia kuongea na wateja na watarajiwa katika bidhaa zote za iPAB.",
    ],
    sections: [
      {
        heading: "Sisi ni nani",
        body: [
          "iPAB International Limited ni kampuni ya Kitanzania iliyopo Magomeni Usalama, Dar es Salaam, Tanzania. Sisi ndio wasimamizi wa taarifa zinazoelezwa katika sera hii. Unaweza kutufikia kupitia anwani zilizo katika sehemu ya “Wasiliana nasi” hapa chini.",
        ],
      },
      {
        heading: "Taarifa tunazokusanya",
        body: ["Tunakusanya tu kile tunachohitaji kuendesha huduma na kukuhudumia:"],
        list: [
          "Anwani zako za mawasiliano — jina lako, jina la biashara, namba ya simu, barua pepe na namba ya WhatsApp pale unapotutumia ujumbe, kuomba demo, au kujisajili.",
          "Taarifa za uendeshaji wa biashara — mauzo, bidhaa, ankara, matumizi, kumbukumbu za wateja, bukingi, na kumbukumbu za wanafunzi au wafanyakazi unazoingiza kwenye mfumo wa iPAB unaoutumia. Taarifa hizi ni mali ya biashara yako; tunazichakata kwa niaba yako ili kutoa huduma.",
          "Ujumbe unaotutumia — maudhui ya mazungumzo yako ya WhatsApp, simu, barua pepe na gumzo nasi, ili tuweze kujibu na kuweka kumbukumbu za usaidizi.",
          "Taarifa za kiufundi na matumizi — taarifa za msingi za kifaa, kivinjari na kumbukumbu (kama anwani ya IP na kurasa zilizotembelewa) zinazokusanywa kiotomatiki unapotumia tovuti au programu zetu, ili ziwe salama na zifanye kazi.",
        ],
      },
      {
        heading: "Jinsi tunavyotumia taarifa zako",
        body: ["Tunatumia taarifa zako ili:"],
        list: [
          "Kutoa, kusanidi, kubinafsisha na kuhudumia mifumo ya iPAB unayoitumia.",
          "Kujibu maswali yako na kutoa usaidizi kwa wateja kupitia WhatsApp, simu na barua pepe.",
          "Kukutumia ujumbe wa huduma — kwa mfano uthibitisho wa usanidi, muhtasari wa kila siku, vikumbusho vya malipo na taarifa muhimu kuhusu akaunti yako.",
          "Kuendesha, kulinda, kutatua matatizo na kuboresha bidhaa na tovuti yetu.",
          "Kutimiza wajibu wetu wa kisheria, kodi na kanuni nchini Tanzania.",
        ],
      },
      {
        heading: "WhatsApp na ujumbe",
        body: [
          "WhatsApp ndiyo njia yetu kuu ya kuongea na wateja. Unapotutumia ujumbe kwenye namba yetu ya WhatsApp Business, tunapokea namba yako ya simu, jina lako la WhatsApp na ujumbe unaotuma, na tunavitumia tu kujibu, kukuhudumia na kutoa huduma yetu.",
          "Matumizi yako ya WhatsApp pia yanasimamiwa na masharti na sera za faragha za WhatsApp na Meta. Hatuuzi namba yako, na hatutumi matangazo yasiyoombwa kwa watu ambao hawajawasiliana nasi au kujisajili.",
        ],
      },
      {
        heading: "Jinsi tunavyoshiriki taarifa",
        body: [
          "Hatuuzi taarifa zako binafsi. Tunazishiriki tu pale inapobidi:",
        ],
        list: [
          "Na watoa huduma wa kuaminika — kama wahifadhi wa tovuti, watoa ujumbe (ikiwemo WhatsApp/Meta), watoa SMS na barua pepe — wanaochakata taarifa kwa niaba yetu kuendesha huduma.",
          "Ndani ya biashara yako mwenyewe — akaunti za wafanyakazi unazounda zinaweza kuona taarifa ambazo ruhusa zao zinaruhusu.",
          "Inapohitajika kisheria — kutimiza ombi halali la kisheria, amri ya mahakama, au wajibu wa kikanuni, au kulinda haki zetu, watumiaji na umma.",
        ],
      },
      {
        heading: "Uhifadhi na usalama wa taarifa",
        body: [
          "Tunalinda taarifa zako kwa hatua zinazofaa za kiufundi na kiutawala, ikiwemo udhibiti wa upatikanaji na akaunti za wafanyakazi zenye ruhusa. Hakuna mfumo ulio salama kabisa, lakini tunafanya kazi kuhakikisha taarifa zako ni salama na kupunguza nani anaweza kuziona. Baadhi ya watoa huduma wetu wanaweza kuhifadhi taarifa kwenye seva zilizo nje ya Tanzania.",
        ],
      },
      {
        heading: "Tunazihifadhi taarifa zako kwa muda gani",
        body: [
          "Tunahifadhi taarifa zako kwa muda wote unaotumia huduma yetu na baada ya hapo kwa kadri inavyohitajika kukuhudumia, kutatua migogoro, na kutimiza wajibu wa kisheria na kodi. Taarifa za uendeshaji wa biashara huhifadhiwa wakati akaunti yako ikiwa hai; unaweza kutuomba tufute taarifa ambazo hatulazimiki kisheria kuzihifadhi.",
        ],
      },
      {
        heading: "Haki na chaguo zako",
        body: ["Unaweza:"],
        list: [
          "Kuomba nakala ya taarifa binafsi tulizonazo kuhusu wewe.",
          "Kutuomba turekebishe taarifa zilizo na makosa au za zamani.",
          "Kutuomba tufute taarifa ambazo hatulazimiki kuzihifadhi.",
          "Kusitisha kupokea ujumbe usio wa lazima — jibu STOP kwenye WhatsApp au SMS, au tuambie, nasi tutasitisha.",
        ],
      },
      {
        heading: "Faragha ya watoto",
        body: [
          "Bidhaa zetu zimetengenezwa kwa ajili ya biashara na hazilengwi kwa watoto. Pale taasisi inayotumia SmartColleges inaporekodi taarifa za wanafunzi, hufanya hivyo kama msimamizi wa taarifa hizo chini ya wajibu wake mwenyewe; iPAB huzichakata tu kwa maelekezo ya taasisi husika.",
        ],
      },
      {
        heading: "Mabadiliko ya sera hii",
        body: [
          "Tunaweza kusasisha sera hii mara kwa mara. Tunapofanya hivyo, tutabadilisha tarehe ya “Imesasishwa mara ya mwisho” hapo juu na, inapofaa, tutakujulisha. Tafadhali angalia tena mara kwa mara.",
        ],
      },
      {
        heading: "Wasiliana nasi",
        body: [
          "Kama una maswali kuhusu sera hii au taarifa zako, wasiliana nasi:",
        ],
        list: [
          "WhatsApp / simu: +255 759 561 311 · +255 743 525 913",
          "Barua pepe: info@ipab.co.tz",
          "Anwani: Magomeni Usalama, Dar es Salaam, Tanzania",
        ],
      },
    ],
  },
};
