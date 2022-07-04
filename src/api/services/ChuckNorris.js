import apiChuckNorris from "./axios";

export const getRandomJoke = async () => {
  try {
    const response = await apiChuckNorris.get("/");
    // console.log(response);
    return response;
  } catch (error) {
    alert(`Error: ${error}`);
  }
};
