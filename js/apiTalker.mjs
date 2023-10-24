const baseURL = "https://www.thecolorapi.com/";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw { name: "servicesError", message: res.json() };
  }
}

export async function getData(color) {
    let response = await fetch(`${baseURL}id?hex=${color.replace(/[^0-9a-f]/gi, "")}`);
    const data = convertToJson(response);
    return await data;
  }

export async function getScheme(color,mode,count){
    let response = await fetch(`${baseURL}scheme?hex=${color.replace(/[^0-9a-f]/gi, "")}&mode=${mode}&count=${count}`);
    const data = convertToJson(response);
    return await data;
}