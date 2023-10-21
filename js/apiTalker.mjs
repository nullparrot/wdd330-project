const baseURL = "https://www.thecolorapi.com/id?hex=";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: "servicesError", message: res.json() };
  }
}

export default class colorCall {
  constructor(color) {}
  async getData(color) {
    const response = await fetch(baseURL + color.replace(/[^0-9a-f]/gi, ""));
    const data = await convertToJson(response);
    console.log(await data);
    return data.Result;
  }
}
