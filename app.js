const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is listening in http://localhost:3000");
});

let goodAnswers = 0;
let callToFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOnhalfUsed = false;

const questions = [
  {
    title: "Jaki typ danych nie istnieje w JavaScript",
    answers: ["undefined", "null", "BigInt", "int"],
    correctAnswer: 3,
  },
  {
    title: "metoda push() w JavaScript",
    answers: [
      "dodaje element na końcu tablicy i zwraca nową tablicę",
      "dodaje element na końcu tablicy i zwraca długość tablicy",
      "dodaje element na końcu tablicy i nic nie zwraca",
      "dodaje element na końcu tablicy i zwraca ten element",
    ],
    correctAnswer: 1,
  },
  {
    title: "Ile argumentów możemy przekazać do metody splice()",
    answers: ["jeden", "dwa", "trzy", "wiele"],
    correctAnswer: 3,
  },
  {
    title: "Metoda reduce()",
    answers: [
      "Tworzy kopię tablicy",
      "Modyfikuje orginał",
      "na każdym elemencie tablicy wykonuje funkcję przekazaną jako parametr",
      "redukuje ilość elementów w tablicy do liczby podanej ",
    ],
    correctAnswer: 2,
  },
];

app.get("/questions", (req, res) => {
  if (goodAnswers === questions.length) {
    res.json({
      winner: true,
    });
  } else {
    const nextQuestion = questions[goodAnswers];
    const { title, answers } = nextQuestion;
    res.json({
      title,
      answers,
    });
  }
});
const getTotalFriendCount = (users) =>
  users.flatMap((item) => item.friends).length;

const data = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const b = getTotalFriendCount;
console.log(getTotalFriendCount); // wyświetla funkcję czyli to co jest w jej ciele
console.log(getTotalFriendCount(data)); // wyswietla rezultat bo jest wywołanie tej funkcji. );
console.log(b);

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

console.log(pizzaPalace.order("Smoked", makePizza, onOrderError))
