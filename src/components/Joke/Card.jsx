import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Badge, CardActionArea, CardActions } from "@mui/material";

export default function JokeCard({
  joke,
  generateNewRandomJoke,
  addLike,
  addUnlike,
  likes,
  unlikes
}) {
  // console.log("from card", joke);
  if (!joke) return null;
  const { value } = joke;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
          alt="ChuckNorris.io logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            This is a chuck joke!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {value}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <IconButton onClick={addLike} aria-label="add to favorites">
          <Badge badgeContent={likes} color="primary">
            <ThumbUpIcon />
          </Badge>
        </IconButton>
        <IconButton onClick={addUnlike} aria-label="unlike">
          <Badge badgeContent={unlikes} color="warning">
            <ThumbDownIcon />
          </Badge>
        </IconButton>

        <IconButton onClick={generateNewRandomJoke}>
          <ArrowForwardIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
