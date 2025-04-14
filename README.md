Finding Jesus in the Temple

An interactive, bilingual hidden-object game in which users progress through four stages, seeking out various items and ultimately finding Young Jesus in the Temple. This project is built with HTML, CSS, and JavaScript and can be deployed on services like Netlify or served locally.

TABLE OF CONTENTS
1. Features
2. Project Structure
3. Setup & Installation
4. Usage
5. Customization & Adding Stages
6. Deployment
7. License
8. Contributing

1. FEATURES
- Bilingual Support: Users can switch between English and Spanish at any time via the language selector.
- Four Stages: Each stage features unique objects to find, with background images and biblical quotes.
- Mini-Lesson: An optional pop-up that provides educational or spiritual context.
- Final Dialogue: Once all objects are found in the final stage, a dialogue sequence plays, leading to a conclusion screen and prayer section.
- Responsive Design: The game adapts to various screen sizes, ensuring it is mobile-friendly.

2. PROJECT STRUCTURE
your-project/
│
├─ index.html
│
├─ css/
│   └─ style.css
│
├─ js/
│   └─ game.js
│
└─ images/
    ├─ stage1-background.jpg
    ├─ stage2-background.jpg
    ├─ stage3-background.jpg
    ├─ stage4-background.jpg
    └─ prayer-card.png

- index.html: The main HTML for the game.
- css/style.css: Styles for layout, overlays, responsive design, etc.
- js/game.js: All game logic (stages, objects, translations, dialogues).
- images/: Contains background images for each stage and the prayer-card image.

3. SETUP & INSTALLATION
1. Download or clone this repository.
2. Ensure the folder structure matches what’s shown above so file paths work correctly.
3. Open index.html in your web browser to run the game locally.
   (You can also serve it via a local server such as python -m http.server or
   the Live Server extension in VS Code.)

4. USAGE
- Select Language: Switch between English and Spanish. All interface text, stage data, and final dialogue update accordingly.
- Select Stage: Choose any stage (1–4) from the dropdown to jump directly to that level.
- Start Stage: Loads the selected stage. A list of items to find appears, along with a background image.
- Find Objects: Click on each hidden object. Found objects are marked "found."
- Mini-Lesson: If available, click “Read Mini-Lesson” to open extra context or educational information.
- Completing the Final Stage: In Stage 4, finding the special target (Young Jesus) triggers the final dialogue. After the dialogue, you see the Conclusion Screen with reflection and prayer prompts.

5. CUSTOMIZATION & ADDING STAGES
- stagesData in js/game.js:
  [
    {
      id: 'stage1',
      title: { en: "Stage 1: ...", es: "Etapa 1: ..." },
      backgroundImage: 'url("images/stage1-background.jpg")',
      objective: { en: "...", es: "..." },
      dialogueIntro: { en: "...", es: "..." },
      biblicalQuote: { en: "...", es: "..." },
      miniLesson: { en: "...", es: "..." },
      objects: [
        {
          id: 'object1',
          name: { en: "Some Object", es: "Algún objeto" },
          x: 20, y: 30, width: 10, height: 5,
          isTarget: false
        }
      ]
    },
    ...
  ]

Add or modify stages, ensuring your background images are placed in images/. 
Coordinates (x, y) and size (width, height) are percentages relative to #game-screen.

6. DEPLOYMENT
Option A: Netlify (Drag & Drop)
1. Zip your entire project folder (ensure index.html is at the root).
2. Log into Netlify and open your site’s Deploys page.
3. Drag your folder onto the deployment area. Netlify will host it in seconds.

Option B: Netlify (Git Integration)
1. Commit and push changes to your GitHub repository connected to Netlify.
2. Netlify automatically builds and deploys every new push to the main branch.

Option C: Other Hosts
Upload these static files to any service that serves HTML/CSS/JS (e.g., GitHub Pages, Surge, etc.).


7. LICENSE
This project is available under the MIT License, allowing free modification and distribution.

8. CONTRIBUTING
We welcome pull requests and suggestions. To contribute:
1. Fork this repository, make your changes, and submit a pull request.
2. For translations, add the relevant fields to the translations object in js/game.js.
3. For new stages or images, ensure you own or have permission to use the images you add.

Thank you for playing and contributing!
