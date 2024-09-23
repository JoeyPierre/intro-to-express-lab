import express from "express";

const app = express();
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];

app.get("/", (req, res) => {
  res.send("Welcome to my API.");
});

app.get("/greetings/:username", (req, res) => {
  let username = req.params.username;

  res.send("Hello " + username);
});

app.get("/roll/:number", (req, res) => {
  let number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.send("You must specify a number.");
  } else {
    let rolledNumber = Math.floor(Math.random() * number);

    res.send("you rolled a " + rolledNumber);
  }
});

app.listen(3000, () => {
  console.log("sup");
});
