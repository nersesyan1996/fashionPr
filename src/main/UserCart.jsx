import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.num.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.num.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          William Bradley Pitt (born December 18, 1963) is an American actor and
          film producer. He is the recipient of various accolades, including an
          Academy Award, a British Academy Film Award, and two Golden Globe
          Awards for his acting, in addition to a second Academy Award, a second
          British Academy Film Award, a third Golden Globe Award, and a
          Primetime Emmy Award as a producer under his production company, Plan
          B Entertainment.
        </Typography>
      </CardContent>
    </Card>
  );
}
