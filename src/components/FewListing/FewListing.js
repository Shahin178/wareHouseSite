import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import data from "../data.json";

export default function FewListing() {
  // Slice the data array to get the first 3 items
  const slicedData = data.slice(0, 3);

  return (
    <Grid container spacing={2} justifyContent="center">
      {slicedData.map((card, index) => (
        <Grid item key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.img}
                alt={card.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.city}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
