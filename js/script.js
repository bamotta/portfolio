document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn-home").addEventListener("click", reload);
    document.getElementById("btn-memorion").addEventListener("click", memorion);
    document.getElementById("btn-calc").addEventListener("click", calc);
    document.getElementById("btn-map").addEventListener("click", map);
});

function hideAllSections() {
    document.getElementById("home").style.display = "none";
    document.getElementById("memorion").style.display = "none";
    document.getElementById("calc").style.display = "none";
    document.getElementById("map").style.display = "none";
}

function reload(){
    location.reload();
}

function memorion(){
    hideAllSections();

    const memorionDiv = document.getElementById("memorion");
    memorionDiv.className = "content-section";
    memorionDiv.style.display = "block";
    memorionDiv.innerHTML = "";

    document.getElementById("title").textContent = "MEMORION";

    memorionText(memorionDiv);
    memorionImages(memorionDiv);
    memorionButton(memorionDiv);
}
function memorionText(memorionDiv) {
    const memorionText = document.createElement("p");
    memorionText.textContent = "Memorion is a game where you can test your memory by trying to search for the pairs of cards. " +
        "You need to find pairs of matching cards by flipping them over one at a time. " +
        "The game ends when all pairs are found.";
    memorionDiv.appendChild(memorionText);
}

function memorionImages(memorionDiv) {
    const img1Title = document.createElement("h2");
    img1Title.textContent = "Memorion Initial Screen";
    img1Title.classList.add("img-title");
    memorionDiv.appendChild(img1Title);


    const img1 = document.createElement("img");
    img1.src = "../img/memorion-inicio.png";
    img1.alt = "Memorion Initial Screen";
    img1.title = "Memorion Initial Screen";
    memorionDiv.appendChild(img1);

    const img2Title = document.createElement("h2");
    img2Title.textContent = "Memorion Board";
    img2Title.classList.add("img-title");
    memorionDiv.appendChild(img2Title);


    const img2 = document.createElement("img");
    img2.src = "../img/memorion-tablero.png";
    img2.alt = "Memorion Board";
    img2.title = "Memorion Board";
    memorionDiv.appendChild(img2);

    const img3Title = document.createElement("h2");
    img3Title.textContent = "Memorion Final Screen";
    img3Title.classList.add("img-title");
    memorionDiv.appendChild(img3Title);


    const img3 = document.createElement("img");
    img3.src = "../img/memorion-final.png";
    img3.alt = "Memorion Final Screen";
    img3.title = "Memorion Final Screen";
    memorionDiv.appendChild(img3);

    const img4Title = document.createElement("h2");
    img4Title.textContent = "Memorion Rankings";
    img4Title.classList.add("img-title");
    memorionDiv.appendChild(img4Title);


    const img4 = document.createElement("img");
    img4.src = "../img/memorion-ranking.png";
    img4.alt = "Memorion Rankings";
    img4.title = "Memorion Rankings";
    memorionDiv.appendChild(img4);
}

function memorionButton(memorionDiv) {
    const memorionButton = document.createElement("button");
    memorionButton.textContent = "Play Memorion";
    memorionButton.classList.add("btn");
    memorionButton.addEventListener("click", () => {
        window.open("https://bamotta.github.io/memorion/");
    });

    memorionButton.style.display = "block";
    memorionButton.style.margin = "0 auto";

    memorionDiv.appendChild(memorionButton);
}

function calc() {
    hideAllSections();

    const calcDiv = document.getElementById("calc");
    calcDiv.className = "content-section";
    calcDiv.style.display = "block";
    calcDiv.innerHTML = "";

    document.getElementById("title").innerHTML = "CALC <i class='fa-solid fa-globe'></i> NET";

    calcText(calcDiv);
    calcImages(calcDiv);
    calcButton(calcDiv);
}

function calcText(calcDiv) {
    const calcText = document.createElement("p");
    calcText.innerHTML = "Calc <i class='fa-solid fa-globe'></i> Net is a simple net caculator that allows you to know diferent values of your net or subnets. ";
    calcDiv.appendChild(calcText);
}

function calcImages(calcDiv) {
    const img1Title = document.createElement("h2");
    img1Title.innerHTML = "Calc <i class='fa-solid fa-globe'></i> Net Initial Screen";
    img1Title.classList.add("img-title");
    calcDiv.appendChild(img1Title);

    const img1 = document.createElement("img");
    img1.src = "../img/calc-inicio.png";
    img1.alt = "Calc O Net Initial Screen";
    img1.title = "Calc O Net Initial Screen";
    calcDiv.appendChild(img1);

    const img2Title = document.createElement("h2");
    img2Title.innerHTML = "Calc <i class='fa-solid fa-globe'></i> Net Result Screen";
    img2Title.classList.add("img-title");
    calcDiv.appendChild(img2Title);

    const img2 = document.createElement("img");
    img2.src = "../img/calc-result1.png";
    img2.alt = "Calc O Net Result Screen";
    img2.title = "Calc O Net Result Screen";
    calcDiv.appendChild(img2);

    const img3 = document.createElement("img");
    img3.src = "../img/calc-result2.png";
    img3.alt = "Calc O Net Result Screen";
    img3.title = "Calc O Net Result Screen";
    img3.style.maxWidth = "100%";
    calcDiv.appendChild(img3);
}

function calcButton(calcDiv) {
    const calcButton = document.createElement("button");
    calcButton.textContent = "Use Calc O Net";
    calcButton.classList.add("btn");
    calcButton.addEventListener("click", () => {
        window.open("https://bamotta.github.io/calcuRedes/");
    });

    calcButton.style.display = "block";
    calcButton.style.margin = "0 auto";

    calcDiv.appendChild(calcButton);
}

function map() {
    hideAllSections();

    const mapDiv = document.getElementById("map");
    mapDiv.className = "content-section";
    mapDiv.style.display = "block";
    mapDiv.innerHTML = "";

    document.getElementById("title").textContent = "MAPS API";


    mapText(mapDiv);
    mapImages(mapDiv);
    mapButton(mapDiv);
}

function mapText(mapDiv) {
    const mapText = document.createElement("p");
    mapText.textContent = "This app allows you to visualize a map of the world. " +
        "You can search for different cities and their famous places. " +
        "You can also add markers to the map to highlight specific locations and even filter the markers by their type."
        + "The map allows you to activate the earthquake layer, which shows the locations of recent earthquakes in Spain. ";
    mapDiv.appendChild(mapText);
}

function mapImages(mapDiv) {
    const img1Title = document.createElement("h2");
    img1Title.textContent = "Map Initial Screen";
    img1Title.classList.add("img-title");
    mapDiv.appendChild(img1Title);

    const img1 = document.createElement("img");
    img1.src = "../img/map-inicio.png";
    img1.alt = "Map Initial Screen";
    img1.title = "Map Initial Screen";
    mapDiv.appendChild(img1);

    const img2Title = document.createElement("h2");
    img2Title.textContent = "Map with Markers";
    img2Title.classList.add("img-title");
    mapDiv.appendChild(img2Title);

    const img2 = document.createElement("img");
    img2.src = "../img/map-marker.png";
    img2.alt = "Map with Markers";
    img2.title = "Map with Markers";
    mapDiv.appendChild(img2);

    const img3Title = document.createElement("h2");
    img3Title.textContent = "Map showing a city";
    img3Title.classList.add("img-title");
    mapDiv.appendChild(img3Title);

    const img3 = document.createElement("img");
    img3.src = "../img/map-city.png";
    img3.alt = "Map showing a city";
    img3.title = "Map showing a city";
    mapDiv.appendChild(img3);

    const img4Title = document.createElement("h2");
    img4Title.textContent = "Map with Filtered Markers";
    img4Title.classList.add("img-title");
    mapDiv.appendChild(img4Title);

    const img4 = document.createElement("img");
    img4.src = "../img/map-filter.png";
    img4.alt = "Map with Filtered Markers";
    img4.title = "Map with Filtered Markers";
    mapDiv.appendChild(img4);

    const img5Title = document.createElement("h2");
    img5Title.textContent = "Map with Earthquake Layer";
    img5Title.classList.add("img-title");
    mapDiv.appendChild(img5Title);

    const img5 = document.createElement("img");
    img5.src = "../img/map-terremoto.png";
    img5.alt = "Map with Earthquake Layer";
    img5.title = "Map with Earthquake Layer";
    mapDiv.appendChild(img5);
}

function mapButton(mapDiv) {
    const mapButton = document.createElement("button");
    mapButton.textContent = "Use Map";
    mapButton.classList.add("btn");
    mapButton.addEventListener("click", () => {
        window.open("https://bamotta.github.io/mapsAPI/");
    });

    mapButton.style.display = "block";
    mapButton.style.margin = "0 auto";

    mapDiv.appendChild(mapButton);
}