import axios from "axios";

let baseUrl = "http://challenge.vole.io/";
export async function getCallApi(url) {
    let response = await axios.get(baseUrl + url);
    return response.data;
}