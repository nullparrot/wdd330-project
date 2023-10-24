// fetch("https://www.thecolorapi.com/id?hex=0047AB0")
//   .then((tmp) => {
//     return tmp.json();
//   })
//   .then((mrtmp) => {
//     colorDeets = mrtmp.results;
//   });

import getData from "./apiTalker.mjs";

function loadColors(colorPack) {
  document.getElementById("colorHex").innerHTML = colorPack.hex.value;
  document.getElementById("colorName").innerHTML = colorPack.name.value;
  document.getElementById("colorRGB").innerHTML = colorPack.rgb.value;
  document.getElementById("colorHSV").innerHTML = colorPack.hsv.value;
  document.getElementById("colorCMYK").innerHTML = colorPack.cmyk.value;
  document.getElementById('colorDisplay').style.backgroundColor = colorPack.hex.value;
  return colorPack;
}

async function colors(e) {
  e.preventDefault();
  let mycolor = document.getElementById("color").value;
  let facts = await getData(mycolor);
  console.log(loadColors(facts));
  return false;
}

document.getElementById("searchBox").addEventListener("submit", colors);
