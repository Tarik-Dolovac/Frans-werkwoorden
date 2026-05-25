// script.js – dynamische Franse werkwoordensite
// Data voor 24 werkwoorden (present, passé composé, imparfait, impératif, futur proche, futur simple, conditionnel)
const allerPresent = ["vais","vas","va","allons","allez","vont"]; // present of aller
const verbs = {
  "Aller": {
    translation: "gaan",
    present: ["vais", "vas", "va", "allons", "allez", "vont"],
    passeCompose: ["suis allé(e)", "es allé(e)", "est allé(e)", "sommes allés(es)", "êtes allés(es)", "sont allés(es)"],
    imparfait: ["allais", "allais", "allait", "allions", "alliez", "allaient"],
    imperatif: ["va", "allons", "allez"],
    futurProche: ["vais aller","vas aller","va aller","allons aller","allez aller","vont aller"],
    futurSimple: ["irai", "iras", "ira", "irons", "irez", "iront"],
    conditionnel: ["irais", "irais", "irait", "irions", "iriez", "iraient"],
    examples: [
      {fr: "Je vais au marché.", nl: "Ik ga naar de markt."},
      {fr: "Tu vas bien?", nl: "Gaat het goed met je?"},
      {fr: "Nous allons voyager demain.", nl: "We gaan morgen reizen."}
    ]
  },
  "Avoir": {
    translation: "hebben",
    present: ["ai", "as", "a", "avons", "avez", "ont"],
    passeCompose: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
    imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    imperatif: ["aie", "ayons", "ayez"],
    futurProche: ["ai avoir","as avoir","a avoir","avons avoir","avez avoir","ont avoir"],
    futurSimple: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
    conditionnel: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"],
    examples: [
      {fr: "J'ai un chat.", nl: "Ik heb een kat."},
      {fr: "Tu as raison.", nl: "Je hebt gelijk."},
      {fr: "Nous avons faim.", nl: "We hebben honger."}
    ]
  },
  "Être": {
    translation: "zijn",
    present: ["suis", "es", "est", "sommes", "êtes", "sont"],
    passeCompose: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
    imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
    imperatif: ["sois", "soyons", "soyez"],
    futurProche: ["vais être","vas être","va être","allons être","allez être","vont être"],
    futurSimple: ["serai", "seras", "sera", "serons", "serez", "seront"],
    conditionnel: ["serais", "serais", "serait", "serions", "seriez", "seraient"],
    examples: [
      {fr: "Je suis fatigué.", nl: "Ik ben moe."},
      {fr: "Tu es étudiant?", nl: "Ben jij student?"},
      {fr: "Nous sommes heureux.", nl: "We zijn gelukkig."}
    ]
  },
  "Faire": {
    translation: "doen / maken",
    present: ["fais", "fais", "fait", "faisons", "faites", "font"],
    passeCompose: ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],
    imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
    imperatif: ["fais", "faisons", "faites"],
    futurSimple: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
    conditionnel: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"],
    examples: [
      {fr: "Je fais mes devoirs.", nl: "Ik maak mijn huiswerk."},
      {fr: "Tu fais du sport?", nl: "Doe je aan sport?"},
      {fr: "Nous faisons la fête.", nl: "We vieren een feestje."}
    ]
  },
  "Pouvoir": {
    translation: "kunnen",
    present: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    passeCompose: ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
    imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
    imperatif: ["peux", "pouvons", "pouvez"],
    futurSimple: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
    conditionnel: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"],
    examples: [
      {fr: "Je peux nager.", nl: "Ik kan zwemmen."},
      {fr: "Tu peux venir?", nl: "Kun je komen?"},
      {fr: "Nous pouvons aider.", nl: "We kunnen helpen."}
    ]
  },
  "Savoir": {
    translation: "weten / kennen",
    present: ["sais", "sais", "sait", "savons", "savez", "savent"],
    passeCompose: ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
    imparfait: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
    imperatif: ["sache", "savons", "savez"],
    futurSimple: ["saurai", "sauras", "saura", "saurons", "saurez", "sauront"],
    conditionnel: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"],
    examples: [
      {fr: "Je sais la réponse.", nl: "Ik weet het antwoord."},
      {fr: "Tu sais nager?", nl: "Weet je hoe je moet zwemmen?"},
      {fr: "Nous sommes heureux.", nl: "We weten de waarheid."}
    ]
  },
  "Voir": {
    translation: "zien",
    present: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    passeCompose: ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
    imparfait: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
    imperatif: ["vois", "voyons", "voyez"],
    futurSimple: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
    conditionnel: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"],
    examples: [
      {fr: "Je vois un oiseau.", nl: "Ik zie een vogel."},
      {fr: "Tu vois la tour Eiffel?", nl: "Zie je de Eiffeltoren?"},
      {fr: "Nous pouvons aider.", nl: "We zien de kinderen spelen."}
    ]
  },
  "Vouloir": {
    translation: "willen",
    present: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    passeCompose: ["ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],
    imparfait: ["voulais", "voulais", "voulait", "voulions", "vouliez", "voulaient"],
    imperatif: ["veuille", "voulons", "veuillez"],
    futurSimple: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
    conditionnel: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"],
    examples: [
      {fr: "Je veux un café.", nl: "Ik wil een koffie."},
      {fr: "Tu veux venir?", nl: "Wil je komen?"},
      {fr: "Nous voulons partir.", nl: "We willen vertrekken."}
    ]
  },
  "Boire": {
    translation: "drinken",
    present: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
    passeCompose: ["ai bu", "as bu", "a bu", "avons bu", "avez bu", "ont bu"],
    imparfait: ["buvais", "buvais", "buvait", "buvions", "buviez", "buvaient"],
    imperatif: ["bois", "buvons", "buvez"],
    futurSimple: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
    conditionnel: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"],
    examples: [
      {fr: "Je bois de l'eau.", nl: "Ik drink water."},
      {fr: "Tu veux boire quelque chose?", nl: "Wil je iets drinken?"},
      {fr: "Nous buvons du vin.", nl: "We drinken wijn."}
    ]
  },
  "Connaître": {
    translation: "kennen",
    present: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
    passeCompose: ["ai connu", "as connu", "a connu", "avons connu", "avez connu", "ont connu"],
    imparfait: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
    imperatif: ["connais", "connaissons", "connaissez"],
    futurSimple: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
    conditionnel: ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"],
    examples: [
      {fr: "Je connais Marie depuis longtemps.", nl: "Ik ken Marie al lang."},
      {fr: "Tu connais ce restaurant?", nl: "Ken je dit restaurant?"},
      {fr: "Nous connaissons bien Paris.", nl: "We kennen Parijs goed."}
    ]
  },
  "Devoir": {
    translation: "moeten / moeten doen",
    present: ["dois", "dois", "doit", "devons", "devez", "doivent"],
    passeCompose: ["ai dû", "as dû", "a dû", "avons dû", "avez dû", "ont dû"],
    imparfait: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
    imperatif: ["dois", "devons", "devez"],
    futurSimple: ["devrai", "devras", "devra", "devrons", "devrez", "devront"],
    conditionnel: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"],
    examples: [
      {fr: "Je dois finir mes devoirs.", nl: "Ik moet mijn huiswerk maken."},
      {fr: "Tu dois être prudent.", nl: "Je moet voorzichtig zijn."},
      {fr: "Nous devons partir maintenant.", nl: "We moeten nu vertrekken."}
    ]
  },
  "Recevoir": {
    translation: "ontvangen",
    present: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
    passeCompose: ["ai reçu", "as reçu", "a reçu", "avons reçu", "avez reçu", "ont reçu"],
    imparfait: ["recevais", "recevais", "recevait", "recevions", "receviez", "recevaient"],
    imperatif: ["reçois", "recevons", "recevez"],
    futurSimple: ["recevrai", "recevras", "recevra", "recevrons", "recevrez", "recevront"],
    conditionnel: ["recevrais", "recevrais", "recevrait", "recevrions", "recevriez", "recevraient"],
    examples: [
      {fr: "Je reçois un cadeau pour mon anniversaire.", nl: "Ik krijg een cadeau voor mijn verjaardag."},
      {fr: "Tu as reçu ma lettre?", nl: "Heb je mijn brief ontvangen?"},
      {fr: "Nous avons reçu de bons résultats.", nl: "We hebben goede resultaten ontvangen."}
    ]
  },
  "Conduire": {
    translation: "rijden / besturen",
    present: ["conduis", "conduis", "conduit", "conduisons", "conduisez", "conduisent"],
    passeCompose: ["ai conduit", "as conduit", "a conduit", "avons conduit", "avez conduit", "ont conduit"],
    imparfait: ["conduisais", "conduisais", "conduisait", "conduisions", "conduisiez", "conduisaient"],
    imperatif: ["conduis", "conduisons", "conduisez"],
    futurSimple: ["conduirai", "conduiras", "conduira", "conduirons", "conduirez", "conduiront"],
    conditionnel: ["conduirais", "conduirais", "conduirait", "conduirions", "conduiriez", "conduiraient"],
    examples: [
      {fr: "Je conduis prudemment sous la pluie.", nl: "Ik rijd voorzichtig in de regen."},
      {fr: "Tu conduis trop vite!", nl: "Je rijdt te hard!"},
      {fr: "Nous conduisons les enfants à l'école.", nl: "We brengen de kinderen naar school."}
    ]
  },
  "Dire": {
    translation: "zeggen",
    present: ["dis", "dis", "dit", "disons", "dites", "disent"],
    passeCompose: ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
    imparfait: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
    imperatif: ["dis", "disons", "dites"],
    futurSimple: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
    conditionnel: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"],
    examples: [
      {fr: "Je dis la vérité.", nl: "Ik zeg de waarheid."},
      {fr: "Tu sais ce qu'il faut faire?", nl: "Weet je wat je moet doen?"},
      {fr: "Nous dire bonjour quand nous arrivons.", nl: "We zeggen hallo als we arriveren."}
    ]
  },
  "Mettre": {
    translation: "zetten / leggen / dragen",
    present: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    passeCompose: ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
    imparfait: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
    imperatif: ["mets", "mettons", "mettez"],
    futurSimple: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
    conditionnel: ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"],
    examples: [
      {fr: "Je mets la table pour le dîner.", nl: "Ik dek de tafel voor het avondeten."},
      {fr: "Tu mets tes chaussures?", nl: "Doe je je schoenen aan?"},
      {fr: "Nous mettons les livres sur l'étagère.", nl: "We zetten de boeken op de plank."}
    ]
  },
  "Prendre": {
    translation: "nemen",
    present: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    passeCompose: ["ai pris", "as pris", "a pris", "avons pris", "avez pris", "ont pris"],
    imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
    imperatif: ["prends", "prenons", "prenez"],
    futurSimple: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
    conditionnel: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"],
    examples: [
      {fr: "Je prends le bus pour aller à l'école.", nl: "Ik neem de bus naar school."},
      {fr: "Tu prends du sucre dans ton café?", nl: "Doe je suiker in je koffie?"},
      {fr: "Nous prenons un verre après le travail.", nl: "We nemen een drankje na het werk."}
    ]
  },
  "Partir": {
    translation: "vertrekken / weggaan",
    present: ["pars", "pars", "part", "partons", "partez", "partent"],
    passeCompose: ["suis parti(e)", "es parti(e)", "est parti(e)", "sommes partis(es)", "êtes partis(es)", "sont partis(es)"],
    imparfait: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
    imperatif: ["pars", "partons", "partez"],
    futurSimple: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
    conditionnel: ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"],
    examples: [
      {fr: "Je pars en vacances demain.", nl: "Ik vertrek morgen op vakantie."},
      {fr: "Tu pars déjà?", nl: "Vertrek je al?"},
      {fr: "Nous partons à huit heures précise.", nl: "We vertrekken om acht uur precies."}
    ]
  },
  "Tenir": {
    translation: "vasthouden / houden",
    present: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
    passeCompose: ["ai tenu", "as tenu", "a tenu", "avons tenu", "avez tenu", "ont tenu"],
    imparfait: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
    imperatif: ["tiens", "tenons", "tenez"],
    futurSimple: ["tiendrai", "tiendras", "tiendra", "tiendrons", "tiendrez", "tiendront"],
    conditionnel: ["tiendrais", "tiendrais", "tiendrait", "tiendrions", "tiendriez", "tiendraient"],
    examples: [
      {fr: "Je tiens la porte ouverte pour toi.", nl: "Ik hou de deur open voor je."},
      {fr: "Tu tiens bon malgré les difficultés?", nl: "Hou je vol ondanks de moeilijkheden?"},
      {fr: "Nous tenons compte de votre avis.", nl: "We houden rekening met uw mening."}
    ]
  },
  "Vivre": {
    translation: "leven / wonen",
    present: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
    passeCompose: ["ai vécu", "as vécu", "a vécu", "avons vécu", "avez vécu", "ont vécu"],
    imparfait: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
    imperatif: ["vis", "vivons", "vivez"],
    futurSimple: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
    conditionnel: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"],
    examples: [
      {fr: "Je vis à Paris depuis dix ans.", nl: "Ik woon al tien jaar in Parijs."},
      {fr: "Tu vis bien avec ton salaire?", nl: "Leef je goed van je salaris?"},
      {fr: "Nous vivons dans une maison grande.", nl: "We wonen in een groot huis."}
    ]
  },
  "Croire": {
    translation: "geloven",
    present: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
    passeCompose: ["ai cru", "as cru", "a cru", "avons cru", "avez cru", "ont cru"],
    imparfait: ["croyais", "croyais", "croyait", "croyions", "croyiez", "croyaient"],
    imperatif: ["crois", "croyons", "croyez"],
    futurSimple: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
    conditionnel: ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"],
    examples: [
      {fr: "Je crois en toi.", nl: "Ik geloof in jou."},
      {fr: "Tu crois au père Noël?", nl: "Geloof je in de kerstman?"},
      {fr: "Nous croyons en l'égalité.", nl: "We geloven in gelijkheid."}
    ]
  },
  "Falloir": {
    translation: "moeten (onpersoonlijk)",
    present: ["faut"],
    passeCompose: ["a fallu"],
    imparfait: ["fallait"],
    futurSimple: ["faudra"],
    conditionnel: ["faudrait"],
    examples: [
      {fr: "Il faut étudier pour réussir.", nl: "Men moet studeren om te slagen."},
      {fr: "Il faut partir maintenant.", nl: "Men moet nu vertrekken."},
      {fr: "Il faut boire de l'eau chaque jour.", nl: "Men moet elke dag water drinken."}
    ]
  },
  "Pleuvoir": {
    translation: "regenen (onpersoonlijk)",
    present: ["pleut"],
    passeCompose: ["a plu"],
    imparfait: ["pleuvait"],
    futurSimple: ["pleuvra"],
    conditionnel: ["pleuvrait"],
    examples: [
      {fr: "Il pleut beaucoup aujourd'hui.", nl: "Het regent veel vandaag."},
      {fr: "Il va pleuvoir demain.", nl: "Het zal morgen regenen."},
      {fr: "Il a plu toute la nuit.", nl: "Het heeft de hele nacht geregend."}
    ]
  },
  "Suffire": {
    translation: "volstaan, genoeg zijn (onpersoonlijk)",
    present: ["suffit"],
    passeCompose: ["a suffi"],
    imparfait: ["suffisait"],
    futurSimple: ["suffira"],
    conditionnel: ["suffirait"],
    examples: [
      {fr: "Ça suffit comme ça.", nl: "Het is genoeg zo."},
      {fr: "Un verre d'eau suffit à étancher sa soif.", nl: "Een glas water is voldoende om zijn dorst te lessen."},
      {fr: "Il suffit d'un effort pour réussir.", nl: "Het volstaat met één inspanning om te slagen."}
    ]
  },
  "Venir": {
    translation: "komen / voortkomen uit",
    present: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    passeCompose: ["suis venu(e)", "es venu(e)", "est venu(e)", "sommes venus(es)", "êtes venus(es)", "sont venus(es)"],
    imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
    imperatif: ["viens", "venons", "venez"],
    futurSimple: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
    conditionnel: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"],
    examples: [
      {fr: "Je viens de Paris.", nl: "Ik kom uit Parijs."},
      {fr: "Tu viens demain?", nl: "Kom je morgen?"},
      {fr: "Nous venons aider.", nl: "We komen helpen."}
    ]
  }
};

// Helper to contract "je" when the following verb form starts with a vowel or mute h
function formatPronoun(pronoun, verbForm) {
  if (pronoun !== "je") return pronoun;
  if (!verbForm) return pronoun;
  const firstChar = verbForm[0];
  const vowels = "aeiouhAEIOUHáàâäãåéèêëíìîïóòôöõúùûüýÿÁÀÂÄÃÅÉÈÊËÍÌÎÏÓÒÔÖÕÚÙÛÜÝŸ";
  return vowels.includes(firstChar) ? "j'" : "je";
}

// ---------- DOM elements ----------
const verbSelect = document.getElementById('verbSelect');
const tenseSelect = document.getElementById('tenseSelect');
const showBtn = document.getElementById('showBtn');
const quizBtn = document.getElementById('quizBtn');
const conjSection = document.getElementById('conjugation');
const conjBody = document.getElementById('conjBody');
const verbTitle = document.getElementById('verbTitle');
const translationP = document.getElementById('translation');

const quizSection = document.getElementById('quiz');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswer = document.getElementById('quizAnswer');
const checkBtn = document.getElementById('checkBtn');
const quizResult = document.getElementById('quizResult');
const nextBtn = document.getElementById('nextBtn');

let quizData = null;

// Populate verb dropdown
function populateVerbs() {
  Object.keys(verbs).forEach(v => {
    const opt = document.createElement('option');
    opt.value = v;
    opt.textContent = v;
    verbSelect.appendChild(opt);
  });
}
populateVerbs();

// Show conjugation logic
function showConjugation() {
  const verbName = verbSelect.value;
  const tense = tenseSelect.value;
  const verb = verbs[verbName];

  conjSection.classList.remove('hidden');
  quizSection.classList.add('hidden');
  verbTitle.textContent = `${verbName} – ${tenseLabels[tense] || tense}`;
  translationP.textContent = `Vertaling: ${verb.translation}`;
  conjBody.innerHTML = '';

  const pronouns = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

  // Impersonals
  if (["Falloir","Pleuvoir","Suffire"].includes(verbName)) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>il/elle</td><td>${verb[tense][0]}</td>`;
    conjBody.appendChild(tr);
    // Clear examples for impersonals (they might not have examples)
    document.getElementById('examples').innerHTML = '';
    return;
  }

  if (tense === 'imperatif') {
    const imper = verb.imperatif;
    const labels = ["-", "-", "-", "nous", "vous", "-"];
    imper.forEach((form, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${labels[i]||'-'}</td><td>${form}</td>`;
      conjBody.appendChild(tr);
    });
    // Show examples for imperative
    showExamples(verb.examples);
    return;
  }

  if (tense === 'futurProche') {
    // use correct present of "aller" + infinitive for each pronoun
    const infinitive = verbName === "Aller" ? "aller" : verbName.toLowerCase();
    // allerPresent array defined at top aligns with pronouns order
    pronouns.forEach((p, idx) => {
      const tr = document.createElement('tr');
      const aux = allerPresent[idx];
      tr.innerHTML = `<td>${formatPronoun(p, `${aux} ${infinitive}`)}</td><td>${aux} ${infinitive}</td>`;
      conjBody.appendChild(tr);
    });
    // Show examples for futur proche
    showExamples(verb.examples);
    return;
  }

  // regular tenses
  let forms = verb[tense];
  // fallback for missing arrays (e.g., passé for imparfait only)
  if (!Array.isArray(forms)) forms = [];
  forms.forEach((f,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${formatPronoun(pronouns[i], f)}</td><td>${f}</td>`;
    conjBody.appendChild(tr);
  });
  // Show examples for regular tenses
  showExamples(verb.examples);
}

// Function to display example sentences
function showExamples(examples) {
  const examplesContainer = document.getElementById('examples');
  if (!examples || examples.length === 0) {
    examplesContainer.innerHTML = '<p>Geen voorbeeldzinnen beschikbaar.</p>';
    return;
  }
  examplesContainer.innerHTML = examples.map(example => `
    <div class="example-item">
      <div class="example-fr">${example.fr}</div>
      <div class="example-nl">${example.nl}</div>
    </div>
  `).join('');
}

// Quiz functions
// Mapping of tense keys to user-friendly labels
let quizScore = 0;
let totalAnswered = 0;
function updateScoreDisplay() {
  const scoreEl = document.getElementById('scoreDisplay');
  if (scoreEl) {
    scoreEl.textContent = `Score: ${quizScore}/${totalAnswered}`;
  }
}
// Helper to get answer variants (handling optional letters in parentheses)
function getAnswerVariants(answer) {
  const match = answer.match(/(.*)\((.*)\)(.*)/);
  if (!match) return [answer];
  const [, before, inside, after] = match;
  const base = before + after;
  const withOption = before + inside + after;
  // Use Set to avoid duplicates if inside is empty
  return [...new Set([base, withOption])];
}
const tenseLabels = {
  futurProche: "Futur proche",
  imperatif: "Impératif",

  present: "Présent",
  passeCompose: "Passé composé",
  imparfait: "Imparfait",
  futurSimple: "Futur simple",
  conditionnel: "Conditionnel (futur du passé)"
};
function startQuiz() {
  // Reset score for new quiz session
  quizScore = 0;
  totalAnswered = 0;
  updateScoreDisplay();
  // Reset UI state
  quizResult.textContent = '';
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  nextBtn.classList.add('hidden');

  // Load first question
  loadNextQuestion();
}

function loadNextQuestion() {
  // Reset UI state for new question
  quizResult.textContent = '';
  checkBtn.disabled = false;
  nextBtn.classList.add('hidden');

  // Choose random verb and tense
  const verbNames = Object.keys(verbs).filter(v => !["Falloir","Pleuvoir","Suffire","Venir"].includes(v));
  const verbName = verbNames[Math.floor(Math.random()*verbNames.length)];
  const verb = verbs[verbName];
  const tenses = ["present","passeCompose","imparfait","futurProche","imperatif","futurSimple","conditionnel"];
  const tense = tenses[Math.floor(Math.random()*tenses.length)];
  const pronouns = ["je","tu","il/elle","nous","vous","ils/elles"];
  let answer, pronounIdx;

  if (tense === "futurProche") {
    const infinitive = verbName === "Aller" ? "aller" : verbName.toLowerCase();
    pronounIdx = Math.floor(Math.random()*pronouns.length);
    const aux = allerPresent[pronounIdx];
    answer = `${aux} ${infinitive}`;
  } else if (tense === "imperatif") {
    const imper = verb.imperatif;
    const imperMap = {3:0,4:1,5:2}; // pronoun indices for nous, vous
    pronounIdx = [3,4,5][Math.floor(Math.random()*3)];
    answer = imper[imperMap[pronounIdx]];
  } else {
    const forms = verb[tense];
    pronounIdx = Math.floor(Math.random()*6);
    answer = forms[pronounIdx];
  }

  quizData = {verbName, tense, pronoun: pronouns[pronounIdx], answer};
  quizSection.classList.remove('hidden');
  conjSection.classList.add('hidden');
  quizQuestion.textContent = `Vul in: ${formatPronoun(quizData.pronoun, quizData.answer)} (${quizData.verbName}) – ${tenseLabels[quizData.tense] || quizData.tense}`;
  quizAnswer.value = '';
}

function checkAnswer(){
  // Disable further checks for this question
  checkBtn.disabled = true;
  const user = quizAnswer.value.trim();
  const correct = quizData.answer;
  const correctVariants = getAnswerVariants(correct);
  // Check if user answer matches any variant (case insensitive)
  const ok = correctVariants.some(variant => user.toLowerCase() === variant.toLowerCase());
  // If the input is empty, treat it as wrong
  const isCorrect = user && ok;
  quizResult.textContent = isCorrect ? "✅ Correct!" : `❌ Niet correct. Juiste vorm: ${correct}`;
  // Increment total answered count
  totalAnswered++;
  if (isCorrect) {
    quizScore++;
  }
  updateScoreDisplay();
  // Show next button only after answering
  nextBtn.disabled = false;
  nextBtn.classList.remove('hidden');
}

showBtn.addEventListener('click', showConjugation);
quizBtn.addEventListener('click', startQuiz);
checkBtn.addEventListener('click', checkAnswer);
nextBtn.addEventListener('click', loadNextQuestion);

// Enter key support for quiz
quizAnswer.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    if (!checkBtn.disabled) {
      checkAnswer();
    } else if (!nextBtn.disabled) {
      loadNextQuestion();
    }
  }
});

// Hint functionality
const hintBtn = document.getElementById('hintBtn');
const hintDisplay = document.getElementById('hintDisplay');

// Generate hint: first letter and length (e.g., "J _ _ _ _ _" for 6 letters)
function generateHint(answer) {
  // Remove any optional parts in parentheses for hint? We'll use the raw answer.
  // But we want to count letters and show first letter.
  // Let's just take the first character and then the length.
  if (!answer) return '';
  const firstChar = answer[0];
  const length = answer.length;
  // Create a string of underscores for the remaining letters
  const underscores = '_'.repeat(length - 1);
  return `${firstChar} ${underscores} (${length} letters)`;
}

// Update hint display
function showHint() {
  if (quizData && quizData.answer) {
    hintDisplay.textContent = 'Hint: ' + generateHint(quizData.answer);
  }
}

// Open modal
updateLogBtn.addEventListener('click', async () => {
  await loadUpdateLog();
  updateLogModal.style.display = 'block';
});

// Close modal
closeBtn.addEventListener('click', () => {
  updateLogModal.style.display = 'none';
});

// Close when clicking outside of modal content
window.addEventListener('click', (e) => {
  if (e.target === updateLogModal) {
    updateLogModal.style.display = 'none';
  }
});

// Hint button click
hintBtn.addEventListener('click', showHint);

// Also support Enter key in hint? Not needed.

updateScoreDisplay();