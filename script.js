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
    conditionnel: ["irais", "irais", "irait", "irions", "iriez", "iraient"]
  },
  "Avoir": {
    translation: "hebben",
    present: ["ai", "as", "a", "avons", "avez", "ont"],
    passeCompose: ["ai eu", "as eu", "a eu", "avons eu", "avez eu", "ont eu"],
    imparfait: ["avais", "avais", "avait", "avions", "aviez", "avaient"],
    imperatif: ["aie", "ayons", "ayez"],
    futurProche: ["ai avoir","as avoir","a avoir","avons avoir","avez avoir","ont avoir"],
    futurSimple: ["aurai", "auras", "aura", "aurons", "aurez", "auront"],
    conditionnel: ["aurais", "aurais", "aurait", "aurions", "auriez", "auraient"]
  },
  "Être": {
    translation: "zijn",
    present: ["suis", "es", "est", "sommes", "êtes", "sont"],
    passeCompose: ["ai été", "as été", "a été", "avons été", "avez été", "ont été"],
    imparfait: ["étais", "étais", "était", "étions", "étiez", "étaient"],
    imperatif: ["sois", "soyons", "soyez"],
    futurProche: ["vais être","vas être","va être","allons être","allez être","vont être"],
    futurSimple: ["serai", "seras", "sera", "serons", "serez", "seront"],
    conditionnel: ["serais", "serais", "serait", "serions", "seriez", "seraient"]
  },
  "Faire": {
    translation: "doen / maken",
    present: ["fais", "fais", "fait", "faisons", "faites", "font"],
    passeCompose: ["ai fait", "as fait", "a fait", "avons fait", "avez fait", "ont fait"],
    imparfait: ["faisais", "faisais", "faisait", "faisions", "faisiez", "faisaient"],
    imperatif: ["fais", "faisons", "faites"],
    futurProche: "faire",
    futurSimple: ["ferai", "feras", "fera", "ferons", "ferez", "feront"],
    conditionnel: ["ferais", "ferais", "ferait", "ferions", "feriez", "feraient"]
  },
  "Pouvoir": {
    translation: "kunnen",
    present: ["peux", "peux", "peut", "pouvons", "pouvez", "peuvent"],
    passeCompose: ["ai pu", "as pu", "a pu", "avons pu", "avez pu", "ont pu"],
    imparfait: ["pouvais", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient"],
    imperatif: ["peux", "pouvons", "pouvez"],
    futurProche: "pouvoir",
    futurSimple: ["pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront"],
    conditionnel: ["pourrais", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient"]
  },
  "Savoir": {
    translation: "weten / kennen",
    present: ["sais", "sais", "sait", "savons", "savez", "savent"],
    passeCompose: ["ai su", "as su", "a su", "avons su", "avez su", "ont su"],
    imparfait: ["savais", "savais", "savait", "savions", "saviez", "savaient"],
    imperatif: ["sache", "savons", "savez"],
    futurProche: "savoir",
    futurSimple: ["saurai", "sauras", "saurra", "saurons", "serez", "sauront"],
    conditionnel: ["saurais", "saurais", "saurait", "saurions", "sauriez", "sauraient"]
  },
  "Voir": {
    translation: "zien",
    present: ["vois", "vois", "voit", "voyons", "voyez", "voient"],
    passeCompose: ["ai vu", "as vu", "a vu", "avons vu", "avez vu", "ont vu"],
    imparfait: ["voyais", "voyais", "voyait", "voyions", "voyiez", "voyaient"],
    imperatif: ["vois", "voyons", "voyez"],
    futurProche: "voir",
    futurSimple: ["verrai", "verras", "verra", "verrons", "verrez", "verront"],
    conditionnel: ["verrais", "verrais", "verrait", "verrions", "verriez", "verraient"]
  },
  "Vouloir": {
    translation: "willen",
    present: ["veux", "veux", "veut", "voulons", "voulez", "veulent"],
    passeCompose: ["ai voulu", "as voulu", "a voulu", "avons voulu", "avez voulu", "ont voulu"],
    imparfait: ["voulais", "voulais", "voulais", "voulions", "vouliez", "voulaient"],
    imperatif: ["veuille", "voulons", "voulez"],
    futurProche: "vouloir",
    futurSimple: ["voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront"],
    conditionnel: ["voudrais", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient"]
  },
  "Boire": {
    translation: "drinken",
    present: ["bois", "bois", "boit", "buvons", "buvez", "boivent"],
    passeCompose: ["ai bu", "as bu", "a bu", "avons bu", "avez bu", "ont bu"],
    imparfait: ["bus", "bus", "buvait", "buvions", "buviez", "buvaient"],
    imperatif: ["bois", "buvons", "buvez"],
    futurProche: "boire",
    futurSimple: ["boirai", "boiras", "boira", "boirons", "boirez", "boiront"],
    conditionnel: ["boirais", "boirais", "boirait", "boirions", "boiriez", "boiraient"]
  },
  "Connaître": {
    translation: "kennen",
    present: ["connais", "connais", "connaît", "connaissons", "connaissez", "connaissent"],
    passeCompose: ["ai connu", "as connu", "a connu", "avons connu", "avez connu", "ont connu"],
    imparfait: ["connaissais", "connaissais", "connaissait", "connaissions", "connaissiez", "connaissaient"],
    imperatif: ["connais", "connaissons", "connaissez"],
    futurProche: "connaître",
    futurSimple: ["connaîtrai", "connaîtras", "connaîtra", "connaîtrons", "connaîtrez", "connaîtront"],
    conditionnel: ["connaîtrais", "connaîtrais", "connaîtrait", "connaîtrions", "connaîtriez", "connaîtraient"]
  },
  "Devoir": {
    translation: "moeten / moeten doen",
    present: ["dois", "dois", "doit", "devons", "devez", "doivent"],
    passeCompose: ["ai dû", "as dû", "a dû", "avons dû", "avez dû", "ont dû"],
    imparfait: ["devais", "devais", "devait", "devions", "deviez", "devaient"],
    imperatif: ["dois", "devons", "devez"],
    futurProche: "devoir",
    futurSimple: ["devrai", "devras", "devra", "devrons", "devoirez", "devront"],
    conditionnel: ["devrais", "devrais", "devrait", "devrions", "devriez", "devraient"]
  },
  "Recevoir": {
    translation: "ontvangen",
    present: ["reçois", "reçois", "reçoit", "recevons", "recevez", "reçoivent"],
    passeCompose: ["ai reçu", "as reçu", "a reçu", "avons reçu", "avez reçu", "ont reçu"],
    imparfait: ["recevais", "recevais", "recevait", "recevions", "receviez", "recevaient"],
    imperatif: ["reçois", "recevons", "recevez"],
    futurProche: "recevoir",
    futurSimple: ["recevrai", "recevras", "recevra", "recevrons", "recevrez", "recevront"],
    conditionnel: ["recevrais", "recevrais", "recevrait", "recevrions", "recevriez", "recevraient"]
  },
  "Conduire": {
    translation: "rijden / besturen",
    present: ["conduis", "conduis", "conduit", "conduisons", "conduisez", "conduisent"],
    passeCompose: ["ai conduit", "as conduit", "a conduit", "avons conduit", "avez conduit", "ont conduit"],
    imparfait: ["conduisais", "conduisais", "conduisait", "conduisions", "conduisiez", "conduisaient"],
    imperatif: ["conduis", "conduisons", "conduisez"],
    futurProche: "conduire",
    futurSimple: ["conduirai", "conduiras", "conduira", "conduirons", "conduirez", "conduiront"],
    conditionnel: ["conduirais", "conduirais", "conduirait", "conduirions", "conduiriez", "conduiraient"]
  },
  "Dire": {
    translation: "zeggen",
    present: ["dis", "dis", "dit", "disons", "dites", "disent"],
    passeCompose: ["ai dit", "as dit", "a dit", "avons dit", "avez dit", "ont dit"],
    imparfait: ["disais", "disais", "disait", "disions", "disiez", "disaient"],
    imperatif: ["dis", "disons", "dites"],
    futurProche: "dire",
    futurSimple: ["dirai", "diras", "dira", "dirons", "direz", "diront"],
    conditionnel: ["dirais", "dirais", "dirait", "dirions", "diriez", "diraient"]
  },
  "Mettre": {
    translation: "zetten / leggen / dragen",
    present: ["mets", "mets", "met", "mettons", "mettez", "mettent"],
    passeCompose: ["ai mis", "as mis", "a mis", "avons mis", "avez mis", "ont mis"],
    imparfait: ["mettais", "mettais", "mettait", "mettions", "mettiez", "mettaient"],
    imperatif: ["mets", "mettons", "mettez"],
    futurProche: "mettre",
    futurSimple: ["mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront"],
    conditionnel: ["mettrais", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient"]
  },
  "Prendre": {
    translation: "nemen",
    present: ["prends", "prends", "prend", "prenons", "prenez", "prennent"],
    passeCompose: ["ai pris", "as pris", "a pris", "avons pris", "avez pris", "ont pris"],
    imparfait: ["prenais", "prenais", "prenait", "prenions", "preniez", "prenaient"],
    imperatif: ["prends", "prenons", "prenez"],
    futurProche: "prendre",
    futurSimple: ["prendrai", "prendras", "prendra", "prendrons", "prendrez", "prendront"],
    conditionnel: ["prendrais", "prendrais", "prendrait", "prendrions", "prendriez", "prendraient"]
  },
  "Partir": {
    translation: "vertrekken / weggaan",
    present: ["pars", "pars", "part", "partons", "partez", "partent"],
    passeCompose: ["suis parti(e)", "es parti(e)", "est parti(e)", "sommes partis(es)", "êtes partis(es)", "sont partis(es)"],
    imparfait: ["partais", "partais", "partait", "partions", "partiez", "partaient"],
    imperatif: ["pars", "partons", "partez"],
    futurProche: "partir",
    futurSimple: ["partirai", "partiras", "partira", "partirons", "partirez", "partiront"],
    conditionnel: ["partirais", "partirais", "partirait", "partirions", "partiriez", "partiraient"]
  },
  "Tenir": {
    translation: "vasthouden / houden",
    present: ["tiens", "tiens", "tient", "tenons", "tenez", "tiennent"],
    passeCompose: ["ai tenu", "as tenu", "a tenu", "avons tenu", "avez tenu", "ont tenu"],
    imparfait: ["tenais", "tenais", "tenait", "tenions", "teniez", "tenaient"],
    imperatif: ["tiens", "tenons", "tenez"],
    futurProche: "tenir",
    futurSimple: ["tiendrai", "tiendras", "tiendra", "tiendrons", "tiendrez", "tiendront"],
    conditionnel: ["tiendrais", "tiendrais", "tiendrait", "tiendrions", "tiendriez", "tiendraient"]
  },
  "Vivre": {
    translation: "leven / wonen",
    present: ["vis", "vis", "vit", "vivons", "vivez", "vivent"],
    passeCompose: ["ai vécu", "as vécu", "a vécu", "avons vécu", "avez vécu", "ont vécu"],
    imparfait: ["vivais", "vivais", "vivait", "vivions", "viviez", "vivaient"],
    imperatif: ["vis", "vivons", "vivez"],
    futurProche: "vivre",
    futurSimple: ["vivrai", "vivras", "vivra", "vivrons", "vivrez", "vivront"],
    conditionnel: ["vivrais", "vivrais", "vivrait", "vivrions", "vivriez", "vivraient"]
  },
  "Croire": {
    translation: "geloven",
    present: ["crois", "crois", "croit", "croyons", "croyez", "croient"],
    passeCompose: ["ai cru", "as cru", "a cru", "avons cru", "avez cru", "ont cru"],
    imparfait: ["croisais", "croisais", "croisait", "croisions", "croisiez", "croisaient"],
    imperatif: ["crois", "croyons", "croyez"],
    futurProche: "croire",
    futurSimple: ["croirai", "croiras", "croira", "croirons", "croirez", "croiront"],
    conditionnel: ["croirais", "croirais", "croirait", "croirions", "croiriez", "croiraient"]
  },
  "Falloir": {
    translation: "moeten (onpersoonlijk)",
    present: ["faut"],
    passeCompose: ["a fallu"],
    imparfait: ["fallait"],
    futurProche: "va falloir",
    futurSimple: ["faudra"],
    conditionnel: ["faudrait"]
  },
  "Pleuvoir": {
    translation: "regenen (onpersoonlijk)",
    present: ["pleut"],
    passeCompose: ["a plu"],
    imparfait: ["pleuvait"],
    futurProche: "va pleuvoir",
    futurSimple: ["pleuvra"],
    conditionnel: ["pleuvrait"]
  },
  "Suffire": {
    translation: "volstaan, genoeg zijn (onpersoonlijk)",
    present: ["suffit"],
    passeCompose: ["a suffi"],
    imparfait: ["suffisait"],
    futurProche: "va suffire",
    futurSimple: ["suffira"],
    conditionnel: ["suffirait"]
  },
  "En venir": {
    translation: "komen / voortkomen uit",
    present: ["viens", "viens", "vient", "venons", "venez", "viennent"],
    passeCompose: ["suis venu(e)", "es venu(e)", "est venu(e)", "sommes venus(es)", "êtes venus(es)", "sont venus(es)"],
    imparfait: ["venais", "venais", "venait", "venions", "veniez", "venaient"],
    imperatif: ["viens", "venons", "venez"],
    futurProche: "aller venir",
    futurSimple: ["viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront"],
    conditionnel: ["viendrais", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient"]
  }
};

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
    return;
  }

  if (tense === 'futurProche') {
    // use correct present of "aller" + infinitive for each pronoun
    const infinitive = verbName === "Aller" ? "aller" : verbName.toLowerCase();
    // allerPresent array defined at top aligns with pronouns order
    pronouns.forEach((p, idx) => {
      const tr = document.createElement('tr');
      const aux = allerPresent[idx];
      tr.innerHTML = `<td>${p}</td><td>${aux} ${infinitive}</td>`;
      conjBody.appendChild(tr);
    });
    return;
  }

  // regular tenses
  let forms = verb[tense];
  // fallback for missing arrays (e.g., passé for imparfait only)
  if (!Array.isArray(forms)) forms = [];
  forms.forEach((f,i)=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${pronouns[i]}</td><td>${f}</td>`;
    conjBody.appendChild(tr);
  });
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
  // Reset UI state
  quizResult.textContent = '';
  checkBtn.disabled = false;
  nextBtn.disabled = true;
  nextBtn.classList.add('hidden');

  // Choose random verb and tense
  const verbNames = Object.keys(verbs).filter(v => !["Falloir","Pleuvoir","Suffire","En venir"].includes(v));
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
  quizQuestion.textContent = `Vul in: ${quizData.pronoun} (${quizData.verbName}) – ${tenseLabels[quizData.tense] || quizData.tense}`;
  quizAnswer.value = '';
  nextBtn.classList.add('hidden');
}

function checkAnswer(){
  // Disable further checks for this question
  checkBtn.disabled = true;
  const user = quizAnswer.value.trim();
  const correct = quizData.answer;
  const ok = user.toLowerCase()===correct.toLowerCase();
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
nextBtn.addEventListener('click', startQuiz);
updateScoreDisplay();
