// Naming Variables
let quote = document.getElementById("quote");
let btn = document.getElementById("button");
let person = document.getElementById("name");
let amn = document.getElementById("am--n");
let amw = document.getElementById("am--w");
let akn = document.getElementById("ak--n");
let akw = document.getElementById("ak--w");
let jdn = document.getElementById("jd--n");
let jdw = document.getElementById("jd--w");

//Getting Quotes
const quotes = [
  {
    quote: "Be the change you wish to see in the world",
    person: "Mahatma Gandhi",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    person: "Alan Kay",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed: We hold these truths to be self-evident, that all men are created equal.",
    person: "Martin Luther King Jr.",
  },
  {
    quote: "The only true wisdom is in knowing you know nothing.",
    person: "Socrates",
  },
  {
    quote:
      "I cannot change the direction of the wind, but I can adjust my sails to always reach my destination.",
    person: "Jimmy Dean",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote:
      "The only thing necessary for the triumph of evil is for good men to do nothing.",
    person: "Edmund Burke",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu",
  },
];

//Enabling Button
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

// Enabling Accordion
function amnf() {
  if (amw.style.display == "inline") {
    return (amw.style.display = "none");
  } else {
    return (amw.style.display = "inline", akw.style.display = "none", jdw.style.display = "none");
  }
}
function aknf() {
  if (akw.style.display == "inline") {
    return (akw.style.display = "none");
  } else {
    return (akw.style.display = "inline", jdw.style.display = "none", amw.style.display = "none");
  }
}
function jdnf() {
  if (jdw.style.display == "inline") {
    return (jdw.style.display = "none");
  } else {
    return (jdw.style.display = "inline", amw.style.display = "none", akw.style.display = "none");
  }
}
