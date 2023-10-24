import { getData, getScheme } from "./apiTalker.mjs";
import { getParam, getLocalStorage, setLocalStorage } from "./utils.mjs";

function loadColors(colorPack) {
  document.getElementById("colorHex").innerHTML = colorPack.hex.value;
  document.getElementById("colorName").innerHTML = colorPack.name.value;
  document.getElementById("colorRGB").innerHTML = colorPack.rgb.value;
  document.getElementById("colorHSV").innerHTML = colorPack.hsv.value;
  document.getElementById("colorCMYK").innerHTML = colorPack.cmyk.value;
  document.getElementById("colorDisplay").style.backgroundColor =
    colorPack.hex.value;
}

async function loadRainbow(color) {
  const schemes = [
    "monochrome",
    "monochrome-dark",
    "monochrome-light",
    "analogic",
    "complement",
    "analogic-complement",
    "triad",
    "quad",
  ];
  document.getElementById("rainbow").innerHTML = "";
  schemes.forEach(async (scheme) => {
    let rainbow = await getScheme(color, scheme, 6);
    let pillar = document.createElement("div");
    pillar.classList.add("colorColumn");
    let cap = document.createElement("h3");
    cap.innerHTML = rainbow.mode;
    pillar.appendChild(cap);
    rainbow.colors.forEach((splotch) => {
      let dot = document.createElement("a");
      dot.classList.add("colorSquare");
      dot.href = `./?color=${splotch.hex.clean}`;
      dot.style.backgroundColor = splotch.hex.value;
      dot.innerHTML = splotch.hex.value;
      pillar.appendChild(dot);
    });
    document.getElementById("rainbow").appendChild(pillar);
  });
}

async function getColor(color) {
  let facts = await getData(color);
  loadColors(facts);
  loadRainbow(color);
}

function colors(e) {
  e.preventDefault();
  let mycolor = document.getElementById("color").value;
  getColor(mycolor);
  return false;
}

let mainColor = await getParam("color");
console.log(mainColor);
if (mainColor) {
  getColor(mainColor);
} else {
  getColor("#6495ED");
}

document.getElementById("searchBox").addEventListener("submit", colors);
