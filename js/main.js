// fetch("https://www.thecolorapi.com/id?hex=0047AB0")
//   .then((tmp) => {
//     return tmp.json();
//   })
//   .then((mrtmp) => {
//     colorDeets = mrtmp.results;
//   });

import { getData, getScheme } from "./apiTalker.mjs";

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
  document.getElementById('rainbow').innerHTML = ''
  schemes.forEach(async (scheme) => {
    let rainbow = await getScheme(color, scheme, 6);
    let pillar = document.createElement("div");
    pillar.classList.add("colorColumn");
    let cap = document.createElement('h3')
    cap.innerHTML = rainbow.mode
    pillar.appendChild(cap)
    rainbow.colors.forEach((splotch) => {
      let dot = document.createElement("p");
      dot.classList.add("colorSquare");
      dot.style.backgroundColor = splotch.hex.value;
      dot.innerHTML = splotch.hex.value;
      pillar.appendChild(dot);
    });
    document.getElementById('rainbow').appendChild(pillar)
  });
}

async function colors(e) {
  e.preventDefault();
  let mycolor = document.getElementById("color").value;
  let facts = await getData(mycolor);
  loadColors(facts);
  loadRainbow(mycolor);
  return false;
}

document.getElementById("searchBox").addEventListener("submit", colors);
