import React from 'react';

const QuestionManager = {
  questions: [
    "Kolik \"očí\" má Jax na helmě?",
    "Kdo vyhrál LEC 2021 summer playoffs?",
    "V jakém roce vyšlo Lolko?",
    "Který champion byl developnut jako první?",
    "V jakém roce vyšel přelomový grafický update mapy?",
    "Který champion měl největší zaznamenaný winrate v solo q v historii?",
    'Jaký champion má v češtině hlášku "pilot základně"?',
    "Kolik hráčů se vyskytuje na mapě módu Arena (2024)?",
    "Kolik je v lolku championů s tmavou kůží? (červen, 2024)",
    "Kolik typů draků je momentálně ve hře? (2024)",
    "Kolik stupňů ranků (bronze, silver,…) je momentálně ve hře? (2024)",
    "Který český LoL streamer má historicky nejvíce twitch followers?",
    "Na jakém levelu může Ornn upgradovat item (včetně svého)?",
    "Na jakém levelu má Gangplank nejrychlejší recharge na svém E?",
    "Kolik championů je celkově v League of Legends? (červen 2024)",
    "Kolik druhů arén existuje v modě 2v2...",
    "Komu Gankplank vyvrazdil rodinu",
    "Jak se jmenuje pták na kterém létá Quinn?",
    "Jaká role nejvíce brečí?",
    "Jaká role má největší impact?",
    "Jak se jmenuje bratr Dravena?",
    "Který šampion má pasivní schopnost 'League of Draven'?",
    "Kdo je jediný kamarád Kleda?",
    "Kdo má crush na Ezreala?",
    "Kdo má crush na Lux?",
    "Jak se jmenuje zbraň Kayna?",
    "Kolik goldů stojí item Infinity Edge? (2024)",
    "Který champion si nemůže koupit boty?",
    "Jak se jmenuje sestra Vi?",
    "Jak se jmenuje manžel Senny?",
    "Kdo používá schopnost 'miasma'?",
    "Kdo používá schopnost 'explosive cask'?",
    "Kdo používá schopnost 'whirling death'?",
    "Kdo používá schopnost 'consume'?",
    "Kdo používá schopnost 'purge'?",
    "Kdo používá schopnost 'super scorcher breath'?",
    "Kdo používá schopnost 'death mark'?",
    "Kdo používá schopnost 'steel tempest'?",
    "Kdo používá schopnost 'mortal steel'?",
    "Kdo používá schopnost 'void rush'?",
    "Kdo používá schopnost 'star call'?",
    "Kdo používá schopnost 'unbreakable'?",
    "Kdo používá schopnost 'whimsy'?",
    "Kdo používá schopnost 'missile barrage'?",
    "Kdo používá schopnost 'decimate'?",
    "Kdo používá schopnost 'singularity'?",
    "Kdo používá schopnost 'ambush'?",
    "Kdo používá schopnost 'zephyr'?",
    "Kdo používá schopnost 'final chapter'?",
    "Kdo používá schopnost 'three talon strike'?",
    "Kdo používá schopnost 'fling'?",
    "Kdo používá schopnost 'starfire spellblade'?",
    "Kdo používá schopnost 'assassin's path'?",
    "Kdo používá schopnost 'the culling'?",
    "Kdo používá schopnost 'sear'?",
    "Kdo používá schopnost 'command: shockwave'?",
    "Kdo používá schopnost 'bladecaller'?",
    "Kdo používá schopnost 'judgment'?",
    "Kolik věží se nacházíí na mapě Howling Abyss (ARAM)?",
    "Který champion má nejvíce promile alkoholu v krvi?",
    "Jaký je nejdražší item, který dává ability power? (2024)",
    "Který profesionální esport tým vyhrál nejvícekrát WORLDS?",
    "Kolik je v Lolku championů z Voidu?",
    "Kolik míst pro itemy se nachází v inventáři? (trinket se nepočítá)",
    "Který champion je princem Demacie?",
    "Kolik procent poškození navíc ke kritickým úderům poskytuje Infinity Edge? (červen 2024)",
    "Kolik útočného poškození poskytuje Black Cleaver? (červen 2024)",
    "Který český content creator má v lolku vlastní item?",
    "Kdo je otec Kai'sy ?",
    "Kdo je bratr Yoneho ?",
    "Jak se jmenuje prase Sejuani na kterém jezdí ?",
    "Kdo vyobrazuje smrt v lol universu ?",
    "Který champion má worlds skin, který výherní hráč worlds věnoval svojí ženě ?",
    "Kdo zabil krále Jarvana I.?",
    "Jak se jmenuje jediná hratelná postava ze 3 sester (freljord).",
    "Jakým předmětem byl původně braumův štít?",
    "Kdo má crush na Tristanu?",
    "Kdo je považován za nejlepšího hráče LoL v historii?",
    "Jaká známá hudební skupina nazpívala písničku k WORLDS 2014?",
    "Který český LoL streamer je známý svými kontroverzemi ohledně HITPOINT akce?",
    "Který champion má nejvíce skinů? (červen 2024)",
    "Který champion je podle lore největší?",
    "Který champion je označován jako Čepel Darkinů?",
    "Kdo postavil most na mapě Howling Abyss (ARAM)?",
    "Jak se jmenuje nejznámější člen LoL balančního týmu (moc mu to nejde)?",
    "Jak se jmenoval mód, který se hrál na mapě Crystal Scar?",
    "Jaká hláška zazněla v historickém 6V6 módu při zabití všech šesti hráčů jedním hráčem?",
    "Kolik goldů stojí předmět Berserker Greaves?",
    "Jak se jmenuje město, ze kterého pochází Yordlové?",
    "Kolik championů může aplikovat charm na ostatní championy? (2024)",
    "Který LoL champion se jmenuje Powder?",
    "Kolik championů může aplikovat fear na ostatní championy?",
    "Která sada skinů je považována za jednu z nejvzácnějších?",
    "Který champion má nejmenší počet hlášek?",
    "Kolik 'očí' má na své helmě Master Yi?",
    "Kolik chapadel má Velkoz?",
    "Který champion byl dříve účinný při hraní takzvané int taktiky?",
    "O kterém championovi se říká že má takzvaně 'chogath R na Qčku'",
    "Který champion vyžaduje nejméně skillu?",
    "Která postava nemá na svém E žádnou schopnost?",
    "Kolik championů může aplikovat sleep na ostatní championy? (2024)",
    "Který český pro hráč je již za zenitem ale stále si myslí že na to má?"
  ],

  getRandomQuestion: () => {
    const randomIndex = Math.floor(Math.random() * QuestionManager.questions.length);
    return QuestionManager.questions[randomIndex];
  },

  validateAnswer: (questionNum, answer) => {
    const correctAnswers = [
      answer => parseInt(answer) === 6,
      answer => answer.toLowerCase() === "mad lions" || answer.toLowerCase() === "madlions",
      answer => parseInt(answer) === 2009,
      answer => answer.toLowerCase() === "singed",
      answer => parseInt(answer) === 2014,
      answer => answer.toLowerCase() === "skarner",
      answer => answer.toLowerCase() === "corki",
      answer => parseInt(answer) === 16,
      answer => parseInt(answer) === 11,
      answer => parseInt(answer) === 7,
      answer => parseInt(answer) === 10,
      answer => answer.toLowerCase() === "herdyn",
      answer => parseInt(answer) === 13,
      answer => parseInt(answer) === 13,
      answer => parseInt(answer) === 168,
      answer => parseInt(answer) === 5,
      answer => answer.toLowerCase() === "miss fortune",
      answer => answer.toLowerCase() === "valor",
      answer => answer.toLowerCase() === "adc",
      answer => answer.toLowerCase() === "jungle",
      answer => answer.toLowerCase() === "darius",
      answer => answer.toLowerCase() === "draven",
      answer => answer.toLowerCase() === "skaarl",
      answer => answer.toLowerCase() === "zoe",
      answer => answer.toLowerCase() === "ezreal",
      answer => answer.toLowerCase() === "rhaast",
      answer => parseInt(answer) === 3400,
      answer => answer.toLowerCase() === "cassiopea",
      answer => answer.toLowerCase() === "jinx",
      answer => answer.toLowerCase() === "lucian",
      answer => answer.toLowerCase() === "cassiopea",
      answer => answer.toLowerCase() === "gragas",
      answer => answer.toLowerCase() === "draven",
      answer => answer.toLowerCase() === "nunu",
      answer => answer.toLowerCase() === "urgot",
      answer => answer.toLowerCase() === "smolder",
      answer => answer.toLowerCase() === "zed",
      answer => answer.toLowerCase() === "yasuo",
      answer => answer.toLowerCase() === "yone",
      answer => answer.toLowerCase() === "reksai",
      answer => answer.toLowerCase() === "soraka",
      answer => answer.toLowerCase() === "braum",
      answer => answer.toLowerCase() === "lulu",
      answer => answer.toLowerCase() === "corki",
      answer => answer.toLowerCase() === "darius",
      answer => answer.toLowerCase() === "aurelion sol",
      answer => answer.toLowerCase() === "twitch",
      answer => answer.toLowerCase() === "janna",
      answer => answer.toLowerCase() === "yuumi",
      answer => answer.toLowerCase() === "xin zhao",
      answer => answer.toLowerCase() === "singed",
      answer => answer.toLowerCase() === "kayle",
      answer => answer.toLowerCase() === "talon",
      answer => answer.toLowerCase() === "lucian",
      answer => answer.toLowerCase() === "brand",
      answer => answer.toLowerCase() === "orianna",
      answer => answer.toLowerCase() === "xayah",
      answer => answer.toLowerCase() === "garen",
      answer => parseInt(answer) === 8,
      answer => answer.toLowerCase() === "gragas",
      answer => answer.toLowerCase() === "rabadon",
      answer => answer.toLowerCase() === "skt t1",
      answer => parseInt(answer) === 9,
      answer => parseInt(answer) === 6,
      answer => answer.toLowerCase() === "jarvan",
      answer => parseInt(answer) === 40,
      answer => parseInt(answer) === 55,
      answer => answer.toLowerCase() === "sterakdary",
      answer => answer.toLowerCase() === "kassadin",
      answer => answer.toLowerCase() === "yasuo",
      answer => answer.toLowerCase() === "bristle",
      answer => answer.toLowerCase() === "kindred",
      answer => answer.toLowerCase() === "malphite",
      answer => answer.toLowerCase() === "sion",
      answer => answer.toLowerCase() === "lissandra",
      answer => answer.toLowerCase() === "dveře" || answer.toLowerCase() === "dvere",
      answer => answer.toLowerCase() === "rumble",
      answer => answer.toLowerCase() === "faker" || answer.toLowerCase() === "ja",
      answer => answer.toLowerCase() === "imagine dragons",
      answer => answer.toLowerCase() === "opat",
      answer => answer.toLowerCase() === "lux" || answer.toLowerCase() === "miss fortune",
      answer => answer.toLowerCase() === "aurelion sol",
      answer => answer.toLowerCase() === "aatrox",
      answer => answer.toLowerCase() === "ornn",
      answer => answer.toLowerCase() === "phreak",
      answer => answer.toLowerCase() === "dominion",
      answer => answer.toLowerCase() === "hexakill",
      answer => parseInt(answer) === 1100,
      answer => answer.toLowerCase() === "bandle city",
      answer => parseInt(answer) === 4,
      answer => answer.toLowerCase() === "jinx",
      answer => parseInt(answer) === 8,
      answer => answer.toLowerCase() === "pax",
      answer => answer.toLowerCase() === "rammus",
      answer => parseInt(answer) === 7,
      answer => parseInt(answer) === 3,
      answer => answer.toLowerCase() === "sion",
      answer => answer.toLowerCase() === "camille",
      answer => answer.toLowerCase() === "yuumi",
      answer => answer.toLowerCase() === "aphelios",
      answer => parseInt(answer) === 2,
      answer => answer.toLowerCase() === "freeze"
    ];

    return correctAnswers[questionNum] ? correctAnswers[questionNum](answer) : false;
  },

  getQuestion: (questionNum) => {
    return QuestionManager.questions[questionNum] || "Default question";
  },

  checkAnswer: (questionNum, answer) => {
    return QuestionManager.validateAnswer(questionNum, answer);
  }
};

export default QuestionManager;
