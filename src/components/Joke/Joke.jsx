import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getRandomJoke } from "../../api/services/ChuckNorris";
import JokeCard from "./Card";

const Joke = () => {
  const [joke, setJoke] = useState();
  const [likes, setLikes] = useState(0);
  const [unlikes, setUnlikes] = useState(0);

  const generateNewRandomJoke = async () => {
    const { data } = await getRandomJoke();
    setJoke(data);
    return data;
  };

  const addLike = () => {
    setLikes(likes + 1);
    generateNewRandomJoke();
  };
  const addUnlike = () => {
    setUnlikes(unlikes + 1);
    generateNewRandomJoke();
  };
  useEffect(() => {
    generateNewRandomJoke();
  }, []);

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h4">Axios and ChuckNorris API</Typography>
      <br />
      <JokeCard
        joke={joke}
        setJoke={setJoke}
        generateNewRandomJoke={generateNewRandomJoke}
        addLike={addLike}
        addUnlike={addUnlike}
        likes={likes}
        unlikes={unlikes}
      />
    </Stack>
  );
};

export default Joke;
