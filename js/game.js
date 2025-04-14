// game.js

document.addEventListener('DOMContentLoaded', () => {
    // ======= DOM ELEMENT REFERENCES =======
    const langSelector       = document.getElementById('language-selector');
    const stageSelector      = document.getElementById('stage-selector');
    const loadingScreen      = document.getElementById('loading-screen');
    const loadingStageTitle  = document.getElementById('loading-stage-title');
    const loadingQuote       = document.getElementById('loading-quote');
    const startStageButton   = document.getElementById('start-stage-button');
    const miniLessonButton   = document.getElementById('mini-lesson-button');
    const miniLessonBox      = document.getElementById('mini-lesson-box');
    const miniLessonText     = document.getElementById('mini-lesson-text');
    const closeLessonButton  = document.getElementById('close-lesson-button');
    const gameScreen         = document.getElementById('game-screen');
    const stageTitle         = document.getElementById('stage-title');
    const objectiveText      = document.getElementById('objective');
    const stageDialogue      = document.getElementById('stage-dialogue');
    const objectList         = document.getElementById('object-list');
    const dialogueBox        = document.getElementById('dialogue-box');
    const dialogueText       = document.getElementById('dialogue-text');
    const continueButton     = document.getElementById('continue-button');
    const conclusionScreen   = document.getElementById('conclusion-screen');
    const conclusionTitle    = document.getElementById('conclusion-title');
    const conclusionSubtitle = document.getElementById('conclusion-subtitle');
    const playAgainButton    = document.getElementById('play-again-button');
    const objectsTitle       = document.getElementById('objects-title');
    const stageSelectorLabel = document.getElementById('stage-selector-label');
    const reflectTitle       = document.getElementById('reflect-title');
    const prayerHint         = document.getElementById('prayer-hint');
    const showPrayers        = document.getElementById('show-prayers');
    const rememberText       = document.getElementById('remember-text');
    const miniLessonTitle    = document.getElementById('mini-lesson-title');
  
    // ======= GAME STATE VARIABLES =======
    let currentLang          = 'en';
    let currentStageIndex    = 0;
    let objectsToFindData    = [];
    let objectsFoundCount    = 0;
    let currentMiniLesson    = "";
    let finalDialogueSequence= [];
    let currentDialogueStep  = 0;
  
    // ======= TRANSLATIONS =======
    const translations = {
      en: {
        loadingText: (title) => `Loading: ${title}`,
        quotePlaceholder: "Biblical quote appears here.",
        startStage: "Start Stage",
        miniLesson: "Read Mini-Lesson",
        selectStage: "Select Stage:",
        objectiveLabel: "Objective:",
        objectsLabel: "Objects to Find:",
        continueBtn: "Continue",
        closeBtn: "Close",
        conclusionFound: "Jesus Found!",
        conclusionSubtitle: "Jesus returns obediently with His parents to Nazareth.",
        playAgain: "Play Again",
        miniLessonTitle: "Mini Lesson",
        reflectTitle: "Reflect on the Fifth Joyful Mystery",
        prayerHint: "Pray one Our Father, ten Hail Marys, and one Glory Be.",
        showPrayers: "Show Prayers",
        remember: "Remember the importance of following God's will in your life.",
        finalDialogue: [
          {
            speaker: "Mary",
            line: "Son, why have You done this to us? Your father and I have been looking for You with great anxiety."
          },
          {
            speaker: "Jesus",
            line: "Why were you searching for Me? Did you not know that I must be in My Father's house?"
          },
          {
            speaker: "Narrator",
            line: "Jesus reveals His divine mission, though Mary and Joseph did not understand at that time what He meant."
          }
        ]
      },
      es: {
        loadingText: (title) => `Cargando: ${title}`,
        quotePlaceholder: "Aquí aparece una cita bíblica.",
        startStage: "Comenzar Etapa",
        miniLesson: "Leer Mini-Lección",
        selectStage: "Seleccionar Etapa:",
        objectiveLabel: "Objetivo:",
        objectsLabel: "Objetos por Encontrar:",
        continueBtn: "Continuar",
        closeBtn: "Cerrar",
        conclusionFound: "¡Jesús Encontrado!",
        conclusionSubtitle: "Jesús regresa obedientemente con Sus padres a Nazaret.",
        playAgain: "Jugar de Nuevo",
        miniLessonTitle: "Mini Lección",
        reflectTitle: "Reflexiona sobre el Quinto Misterio Gozoso",
        prayerHint: "Reza un Padre Nuestro, diez Ave Marías y un Gloria.",
        showPrayers: "Mostrar Oraciones",
        remember: "Recuerda la importancia de seguir la voluntad de Dios en tu vida.",
        finalDialogue: [
          {
            speaker: "María",
            line: "Hijo, ¿por qué nos has hecho esto? Tu padre y yo te hemos buscado con gran angustia."
          },
          {
            speaker: "Jesús",
            line: "¿Por qué me buscaban? ¿No sabían que debo estar en la casa de mi Padre?"
          },
          {
            speaker: "Narrador",
            line: "Jesús revela su misión divina, aunque María y José no comprendieron lo que decía en ese momento."
          }
        ]
      }
    };
  
    // ======= STAGE DEFINITIONS (4 Stages) =======
    const stagesData = [
      // ---------- Stage 1: The Caravan Departure
      {
        id: 'stage1',
        title: {
          en: "Stage 1: The Caravan Departure",
          es: "Etapa 1: La Salida de la Caravana"
        },
        backgroundImage: 'url("images/stage1-background.jpg")',
        objective: {
          en: "Search among relatives and acquaintances for Jesus.",
          es: "Busca entre familiares y conocidos a Jesús."
        },
        dialogueIntro: {
          en: "\"We thought Jesus was with our relatives in the caravan!\" - Mary & Joseph",
          es: "\"¡Pensamos que Jesús estaba con nuestros parientes en la caravana!\" - María y José"
        },
        biblicalQuote: {
          en: "\"Now his parents went to Jerusalem every year...\" - Luke 2:41",
          es: "\"Sus padres iban todos los años a Jerusalén...\" - Lucas 2:41"
        },
        miniLesson: {
          en: "Passover is a major Jewish festival celebrating the liberation of the Israelites from Egyptian slavery...",
          es: "La Pascua es una gran fiesta judía que celebra la liberación de los israelitas de la esclavitud en Egipto..."
        },
        objects: [
          {
            id: 'bags1',
            name: { en: "Traveling bags", es: "Bolsas de viaje" },
            x: 3,    y: 73.6,
            width: 16, height: 22
          },
          {
            id: 'jugs1',
            name: { en: "Water jugs", es: "Cántaros de agua" },
            x: 74,   y: 48,
            width: 7.94, height: 17.4
          },
          {
            id: 'sticks1',
            name: { en: "Walking sticks", es: "Bastones de caminar" },
            x: 32,   y: 72,
            width: 4.44, height: 21.5
          },
          {
            id: 'mats1',
            name: { en: "Sleeping mats", es: "Esteras para dormir" },
            x: 41.31, y: 85.6,
            width: 22.88, height: 11.5
          },
          {
            id: 'family1',
            name: { en: "Other families", es: "Otras familias" },
            x: 82,   y: 42,
            width: 15.81, height: 37.6
          }
        ]
      },
  
      // ---------- Stage 2: The Streets of Jerusalem
      {
        id: 'stage2',
        title: {
          en: "Stage 2: The Streets of Jerusalem",
          es: "Etapa 2: Las Calles de Jerusalén"
        },
        backgroundImage: 'url("images/stage2-background.jpg")',
        objective: {
          en: "Retrace steps through Jerusalem's crowded areas.",
          es: "Recorre de nuevo las áreas concurridas de Jerusalén."
        },
        dialogueIntro: {
          en: "\"We've been looking for Him anxiously for three days!\" - Mary",
          es: "\"¡Lo hemos buscado ansiosamente por tres días!\" - María"
        },
        biblicalQuote: {
          en: "\"And when they did not find him, they returned to Jerusalem...\" - Luke 2:45",
          es: "\"Y como no lo encontraron, volvieron a Jerusalén...\" - Lucas 2:45"
        },
        miniLesson: {
          en: "Jerusalem during Passover was incredibly crowded with pilgrims from all over Judea...",
          es: "Durante la Pascua, Jerusalén estaba abarrotada de peregrinos de toda Judea..."
        },
        objects: [
          {
            id: 'vendor1',
            name: { en: "Street vendors", es: "Vendedores callejeros" },
            x: 4.31,  y: 30.70,
            width: 12.31, height: 51.40
          },
          {
            id: 'children1',
            name: { en: "Groups of children", es: "Grupos de niños" },
            x: 16.88, y: 51.20,
            width: 12.94, height: 28.60
          },
          {
            id: 'pilgrims1',
            name: { en: "Pilgrims", es: "Peregrinos" },
            x: 39.88, y: 36.40,
            width: 24.94, height: 46.00
          },
          {
            id: 'soldiers1',
            name: { en: "Roman soldiers", es: "Soldados romanos" },
            x: 65.06, y: 36.60,
            width: 11.31, height: 48.90
          }
        ]
      },
  
      // ---------- Stage 3: The Temple Courtyard
      {
        id: 'stage3',
        title: {
          en: "Stage 3: The Temple Courtyard",
          es: "Etapa 3: El Patio del Templo"
        },
        backgroundImage: 'url("images/stage3-background.jpg")',
        objective: {
          en: "Search among worshippers entering and leaving the Temple.",
          es: "Busca entre los fieles que entran y salen del Templo."
        },
        dialogueIntro: {
          en: "\"Could He be inside the Temple?\" - Joseph",
          es: "\"¿Podría estar Él dentro del Templo?\" - José"
        },
        biblicalQuote: {
          en: "\"After three days they found him in the temple...\" - Luke 2:46a",
          es: "\"Al cabo de tres días lo encontraron en el templo...\" - Lucas 2:46a"
        },
        miniLesson: {
          en: "The Temple in Jerusalem had large outer courtyards accessible to many worshippers...",
          es: "El Templo en Jerusalén tenía grandes patios exteriores accesibles a muchos fieles..."
        },
        objects: [
          {
            id: 'scrolls1',
            name: { en: "Scrolls", es: "Pergaminos" },
            x: 5, y: 80, width: 12, height: 12
          },
          {
            id: 'shawls1',
            name: { en: "Prayer shawls", es: "Mantones de oración" },
            x: 20.75, y: 35.80,
            width: 11.63, height: 20.80
          },
          {
            id: 'boxes1',
            name: { en: "Offering boxes", es: "Cajas de ofrendas" },
            x: 50.81, y: 46.70,
            width: 9.69, height: 8.10
          },
          {
            id: 'doves1',
            name: { en: "Doves for sacrifice", es: "Palomas para sacrificio" },
            x: 58.13, y: 62.60,
            width: 14.19, height: 18.10
          },
          {
            id: 'guards1',
            name: { en: "Temple guards", es: "Guardias del templo" },
            x: 76.56, y: 27.30,
            width: 14.00, height: 56.40
          }
        ]
      },
  
      // ---------- Stage 4: The Temple Interior
      {
        id: 'stage4',
        title: {
          en: "Stage 4: The Temple Interior",
          es: "Etapa 4: El Interior del Templo"
        },
        backgroundImage: 'url("images/stage4-background.jpg")',
        objective: {
          en: "Find Jesus among the teachers and students.",
          es: "Encuentra a Jesús entre los maestros y estudiantes."
        },
        dialogueIntro: {
          en: "The teachers were amazed at His understanding!",
          es: "¡Los maestros estaban asombrados por Su comprensión!"
        },
        biblicalQuote: {
          en: "\"...sitting among the teachers, listening to them...\" - Luke 2:46b",
          es: "\"...sentado en medio de los maestros, escuchándolos...\" - Lucas 2:46b"
        },
        miniLesson: {
          en: "Religious education was highly valued. Boys often studied the Torah...",
          es: "La educación religiosa era muy valorada. Los niños a menudo estudiaban la Torá..."
        },
        objects: [
          {
            id: 'jesus',
            name: { en: "Young Jesus", es: "Joven Jesús" },
            x: 43.56, y: 34.80,
            width: 12.31, height: 50.10,
            isTarget: true
          },
          {
            id: 'teachers1',
            name: { en: "Elder teachers", es: "Maestros ancianos" },
            x: 58.19, y: 12.00,
            width: 23.88, height: 73.10
          },
          {
            id: 'torah1',
            name: { en: "Torah scroll", es: "Pergamino de la Torá" },
            x: 4.69,  y: 41.20,
            width: 17.31, height: 13.40
          },
          {
            id: 'lamps1',
            name: { en: "Oil lamp", es: "Lámpara de aceite" },
            x: 88.88, y: 32.90,
            width: 4.38, height: 15.30
          },
          {
            id: 'benches1',
            name: { en: "Prayer bench", es: "Banco de oración" },
            x: 4.75,  y: 78.00,
            width: 22.44, height: 21.90
          },
          {
            id: 'menorah1',
            name: { en: "Menorah", es: "Menorá" },
            x: 11.44, y: 19.60,
            width: 14.00, height: 20.80
          },
          {
            id: 'vessels1',
            name: { en: "Ceremonial vessels", es: "Vasijas ceremoniales" },
            x: 83.00, y: 54.30,
            width: 10.25, height: 11.30
          },
          {
            id: 'students1',
            name: { en: "Seated student", es: "Estudiante sentado" },
            x: 24.69, y: 25.60,
            width: 14.38, height: 55.20
          }
        ]
      }
    ];
  
    // ========== INITIALIZE GAME ==========
    function initializeGame() {
      currentStageIndex = 0;
      applyTranslations();
      populateStageSelector();
      showLoadingScreen(stagesData[currentStageIndex]);
    }
  
    // ========== STAGE SELECTOR ==========
    function populateStageSelector() {
      stageSelector.innerHTML = "";
      stagesData.forEach((stage, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        // Use the correct language for the stage title
        opt.textContent = stage.title[currentLang];
        stageSelector.appendChild(opt);
      });
      stageSelector.value = currentStageIndex;
    }
  
    // ========== TRANSLATION HANDLER ==========
    function applyTranslations() {
      const t = translations[currentLang];
      startStageButton.textContent    = t.startStage;
      miniLessonButton.textContent    = t.miniLesson;
      stageSelectorLabel.textContent  = t.selectStage;
      objectsTitle.textContent        = t.objectsLabel;
      continueButton.textContent      = t.continueBtn;
      closeLessonButton.textContent   = t.closeBtn;
      conclusionTitle.textContent     = t.conclusionFound;
      conclusionSubtitle.textContent  = t.conclusionSubtitle;
      playAgainButton.textContent     = t.playAgain;
      miniLessonTitle.textContent     = t.miniLessonTitle;
  
      reflectTitle.textContent        = t.reflectTitle;
      prayerHint.textContent          = t.prayerHint;
      showPrayers.textContent         = t.showPrayers;
      rememberText.textContent        = t.remember;
    }
  
    // ========== SHOW LOADING SCREEN ==========
    function showLoadingScreen(stage) {
      const t = translations[currentLang];
      loadingStageTitle.textContent = t.loadingText(stage.title[currentLang]);
      loadingQuote.textContent      = stage.biblicalQuote
        ? stage.biblicalQuote[currentLang]
        : t.quotePlaceholder;
  
      currentMiniLesson             = stage.miniLesson[currentLang] || "";
      miniLessonButton.style.display= currentMiniLesson ? 'inline-block' : 'none';
      miniLessonText.textContent    = currentMiniLesson;
  
      loadingScreen.classList.add('active');  // .active means display: flex in CSS
      conclusionScreen.classList.remove('active');
      dialogueBox.classList.remove('active');
      miniLessonBox.classList.remove('active');
    }
  
    // ========== LOAD STAGE ==========
    function loadStage(idx) {
      loadingScreen.classList.remove('active');
      const stage = stagesData[idx];
      stageTitle.textContent    = stage.title[currentLang];
      objectiveText.textContent = translations[currentLang].objectiveLabel + " " + stage.objective[currentLang];
      stageDialogue.textContent = stage.dialogueIntro[currentLang] || "";
      gameScreen.style.backgroundImage = stage.backgroundImage;
      gameScreen.innerHTML = '';
      objectList.innerHTML = '';
      objectsFoundCount = 0;
  
      currentMiniLesson = stage.miniLesson[currentLang] || "";
      miniLessonButton.style.display = currentMiniLesson ? 'inline-block' : 'none';
      miniLessonText.textContent     = currentMiniLesson;
  
      // Prepare objects
      objectsToFindData = stage.objects.slice();
      objectsToFindData.forEach(obj => {
        const li = document.createElement('li');
        li.textContent = obj.name[currentLang];
        li.dataset.id  = obj.id;
        objectList.appendChild(li);
  
        // Create clickable area if not isScenery
        if (!obj.isScenery) {
          const objDiv = document.createElement('div');
          objDiv.classList.add('hidden-object');
          objDiv.dataset.id = obj.id;
          objDiv.style.left   = obj.x + '%';
          objDiv.style.top    = obj.y + '%';
          objDiv.style.width  = obj.width + '%';
          objDiv.style.height = obj.height + '%';
          // Short text on hidden object
          objDiv.textContent  = obj.name[currentLang].substring(0, 6) + '...';
          objDiv.title        = obj.name[currentLang];
          objDiv.addEventListener('click', handleObjectClick);
          gameScreen.appendChild(objDiv);
        }
      });
    }
  
    // ========== HANDLE OBJECT CLICK ==========
    function handleObjectClick(e) {
      const clickedId = e.target.dataset.id;
      const clickedObj = objectsToFindData.find(o => o.id === clickedId);
      if (!clickedObj || e.target.classList.contains('found')) return;
  
      e.target.classList.add('found');
      objectsFoundCount++;
      const listItem = objectList.querySelector(`li[data-id="${clickedId}"]`);
      if (listItem) listItem.classList.add('found');
  
      // If final stage & special target
      if (clickedObj.isTarget && currentStageIndex === stagesData.length - 1) {
        triggerFinalDialogue();
      } else {
        const totalClickableObjects = objectsToFindData.filter(o => !o.isScenery).length;
        if (objectsFoundCount >= totalClickableObjects) {
          if (currentStageIndex < stagesData.length - 1) {
            setTimeout(() => {
              currentStageIndex++;
              populateStageSelector();
              showLoadingScreen(stagesData[currentStageIndex]);
            }, 1200);
          }
        }
      }
    }
  
    // ========== FINAL DIALOGUE SEQUENCE ==========
    function triggerFinalDialogue() {
      finalDialogueSequence = translations[currentLang].finalDialogue;
      currentDialogueStep = 0;
      showNextDialogue();
    }
  
    function showNextDialogue() {
      if (currentDialogueStep < finalDialogueSequence.length) {
        const { speaker, line } = finalDialogueSequence[currentDialogueStep];
        dialogueText.innerHTML = `<strong>${speaker}:</strong> ${line}`;
        dialogueBox.classList.add('active');
        currentDialogueStep++;
      } else {
        dialogueBox.classList.remove('active');
        conclusionScreen.classList.add('active');
      }
    }
  
    // ========== EVENT LISTENERS ==========
    langSelector.addEventListener('change', () => {
      currentLang = langSelector.value;
      applyTranslations();
      populateStageSelector();
      showLoadingScreen(stagesData[currentStageIndex]);
    });
  
    stageSelector.addEventListener('change', () => {
      currentStageIndex = +stageSelector.value;
      showLoadingScreen(stagesData[currentStageIndex]);
    });
  
    startStageButton.addEventListener('click', () => loadStage(currentStageIndex));
    miniLessonButton.addEventListener('click', () => miniLessonBox.classList.add('active'));
    closeLessonButton.addEventListener('click', () => miniLessonBox.classList.remove('active'));
    continueButton.addEventListener('click', showNextDialogue);
    playAgainButton.addEventListener('click', () => {
      conclusionScreen.classList.remove('active');
      initializeGame();
    });
  
    // ========== LAUNCH GAME ON PAGE LOAD ==========
    initializeGame();
  });
  