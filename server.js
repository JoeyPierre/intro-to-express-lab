import express, { request } from "express";

const app = express();
const collectibles = [
  { name: "shiny ball", price: 5.95 },
  { name: "autographed picture of a dog", price: 10 },
  { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
];
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
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
app.get("/collectibles/:index", (req, res)=>{
  let index = req.params.index;
  res.send("So, you want the ${name} ? for ${price}, it can be yours!")
})

app.get('/shoes', (req, res) => {
  
  let filteredShoes = shoes;

  
  if (min-price) {
      const minPrice = parseFloat(min-price);
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }

  if (max-price) {
      const maxPrice = parseFloat(max-price);
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }

  if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }

})


app.listen(3000, () => {
  console.log("sup");
});
