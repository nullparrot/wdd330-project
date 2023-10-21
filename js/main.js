// fetch("https://www.thecolorapi.com/id?hex=0047AB0")
//   .then((tmp) => {
//     return tmp.json();
//   })
//   .then((mrtmp) => {
//     colorDeets = mrtmp.results;
//   });

import colorCall from "./apiTalker.mjs";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const color = urlParams.get("color");
const colorFacts = colorCall.getData(color)
console.log(colorFacts)