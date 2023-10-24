const baseURL = "https://www.thecolorapi.com/id?hex=";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: "servicesError", message: res.json() };
  }
}

export default async function getData(color) {
    let response = await fetch(baseURL + color.replace(/[^0-9a-f]/gi, ""));
    const data = convertToJson(response);
    return await data;
  }