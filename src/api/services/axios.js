import axios from "axios";

// Establecer configuraciones por defecto al crear la instancia
const apiChuckNorris = axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random"
});

export default apiChuckNorris;
