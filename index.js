import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = new express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
  axios.get("https://v2.jokeapi.dev/joke/Any").then((response) => {
    const joke = response.data;
    console.log(joke);
    res.render("index.ejs", { joke: joke });
  });
});

app.get("/again", (req, res) => {
  res.redirect("/");
});
