// -----------------------Language Configuration-----------------------
let currentLang = 'en'; // Default language

document.addEventListener('DOMContentLoaded', () => {
  // Initial language load
  loadLanguage(currentLang);

  // Navigation event listeners
  document.getElementById("btn-home").addEventListener("click", reload);
  document.getElementById("btn-memorion").addEventListener("click", memorion);
  document.getElementById("btn-calc").addEventListener("click", calc);
  document.getElementById("btn-map").addEventListener("click", map);

  // Language toggle button
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    loadLanguage(currentLang);
    document.getElementById('lang-toggle').textContent = currentLang === 'en' ? 'Español' : 'English';
  });
});

// Load language file and apply translations
function loadLanguage(lang) {
  fetch('js/lang.json')
    .then(res => res.json())
    .then(data => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[lang][key]) {
          el.textContent = data[lang][key];
        }
      });
    });
}

// -----------------------Utility Functions-----------------------
function reload() {
  location.reload();
}

function hideAllSections() {
  ["home", "memorion", "calc", "map"].forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function toggleLangButton(show) {
  const langButton = document.getElementById("lang-toggle");
  langButton.style.display = show ? "inline-block" : "none";
}

// -----------------------Memorion Section-----------------------
function memorion() {
  hideAllSections();
  toggleLangButton(false);

  const div = document.getElementById("memorion");
  div.className = "content-section";
  div.style.display = "block";
  div.innerHTML = "";

  document.getElementById("title").textContent = "MEMORION";

  memorionText(div);
  memorionImages(div);
  memorionButton(div);
}

function memorionText(div) {
  const p = document.createElement("p");
  p.textContent = "Memorion is a game where you test your memory by finding matching pairs of cards. " +
                  "Flip two cards at a time and try to match all pairs. " +
                  "The game ends when all pairs are successfully found.";
  div.appendChild(p);
}

function memorionImages(div) {
  const images = [
    ["Memorion Initial Screen", "memorion-inicio.png"],
    ["Memorion Board", "memorion-tablero.png"],
    ["Memorion Final Screen", "memorion-final.png"],
    ["Memorion Rankings", "memorion-ranking.png"]
  ];

  images.forEach(([title, src]) => {
    const h2 = document.createElement("h2");
    h2.textContent = title;
    h2.classList.add("img-title");
    div.appendChild(h2);

    const img = document.createElement("img");
    img.src = `../img/${src}`;
    img.alt = title;
    img.title = title;
    div.appendChild(img);
  });
}

function memorionButton(div) {
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-container";

  const btn1 = document.createElement("button");
  btn1.textContent = "Play Memorion";
  btn1.className = "btn";
  btn1.style.display = "block";
  btn1.style.margin = "0 auto";
  btn1.addEventListener("click", () => {
    window.open("https://bamotta.github.io/memorion/");
  });

  const btn2 = document.createElement("button");
  btn2.textContent = "Go to Repository";
  btn2.className = "btn";
  btn2.style.display = "block";
  btn2.style.margin = "0 auto";
  btn2.addEventListener("click", () => {
    window.open("https://github.com/bamotta/memorion");
  });

  buttonDiv.append(btn1, btn2);
  div.appendChild(buttonDiv);}

// -----------------------Calc O Net Section-----------------------
function calc() {
  hideAllSections();
  toggleLangButton(false);

  const div = document.getElementById("calc");
  div.className = "content-section";
  div.style.display = "block";
  div.innerHTML = "";

  document.getElementById("title").innerHTML = "CALC <i class='fa-solid fa-globe'></i> NET";

  calcText(div);
  calcImages(div);
  calcButton(div);
}

function calcText(div) {
  const p = document.createElement("p");
  p.innerHTML = "Calc <i class='fa-solid fa-globe'></i> Net is a simple network calculator that helps you determine different values for your network or subnets.";
  div.appendChild(p);
}

function calcImages(div) {
  const images = [
    ["Calc <i class='fa-solid fa-globe'></i> Net Initial Screen", "calc-inicio.png"],
    ["Calc <i class='fa-solid fa-globe'></i> Net Result Screen", "calc-result1.png"],
    ["Calc <i class='fa-solid fa-globe'></i> Net Result Screen", "calc-result2.png"]
  ];

  images.forEach(([title, src], index) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = title;
    h2.classList.add("img-title");
    div.appendChild(h2);

    const img = document.createElement("img");
    img.src = `../img/${src}`;
    img.alt = title.replace(/<[^>]+>/g, ""); // strip HTML for alt
    img.title = img.alt;
    if (index === 2) img.style.maxWidth = "100%";
    div.appendChild(img);
  });
}

function calcButton(div) {
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-container";

  const btn = document.createElement("button");
  btn.textContent = "Use Calc O Net";
  btn.className = "btn";
  btn.style.display = "block";
  btn.style.margin = "0 auto";
  btn.addEventListener("click", () => {
    window.open("https://bamotta.github.io/calcuRedes/");
  });

  const btn2 = document.createElement("button");
  btn2.textContent = "Go to Repository";
  btn2.className = "btn";
  btn2.style.display = "block";
  btn2.style.margin = "0 auto";
  btn2.addEventListener("click", () => {
    window.open("https://github.com/bamotta/calcuRedes");
  });

  buttonDiv.append(btn, btn2);
  div.appendChild(buttonDiv);
}

// -----------------------Maps API Section-----------------------
function map() {
  hideAllSections();
  toggleLangButton(false);

  const div = document.getElementById("map");
  div.className = "content-section";
  div.style.display = "block";
  div.innerHTML = "";

  document.getElementById("title").textContent = "MAPS API";

  mapText(div);
  mapImages(div);
  mapButton(div);
}

function mapText(div) {
  const p = document.createElement("p");
  p.textContent = "This app lets you view a world map. You can search cities and landmarks, add markers, " +
                  "filter them by category, and activate an earthquake layer showing recent seismic events in Spain.";
  div.appendChild(p);
}

function mapImages(div) {
  const images = [
    ["Map Initial Screen", "map-inicio.png"],
    ["Map with Markers", "map-marker.png"],
    ["Map Showing a City", "map-city.png"],
    ["Map with Filtered Markers", "map-filter.png"],
    ["Map with Earthquake Layer", "map-terremoto.png"]
  ];

  images.forEach(([title, src]) => {
    const h2 = document.createElement("h2");
    h2.textContent = title;
    h2.classList.add("img-title");
    div.appendChild(h2);

    const img = document.createElement("img");
    img.src = `../img/${src}`;
    img.alt = title;
    img.title = title;
    div.appendChild(img);
  });
}

function mapButton(div) {
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-container";

  const btn = document.createElement("button");
  btn.textContent = "Use Map";
  btn.className = "btn";
  btn.style.display = "block";
  btn.style.margin = "0 auto";
  btn.addEventListener("click", () => {
    window.open("https://bamotta.github.io/mapsAPI/");
  });

  const btn2 = document.createElement("button");
  btn2.textContent = "Go to Repository";
  btn2.className = "btn";
  btn2.style.display = "block";
  btn2.style.margin = "0 auto";
  btn2.addEventListener("click", () => {
    window.open("https://github.com/bamotta/mapsAPI");
  });

  buttonDiv.append(btn, btn2);
  div.appendChild(buttonDiv);
}