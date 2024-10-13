import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // array with the words
  let first = "A ";
  let adj = [
    "serious ",
    "drunk ",
    "direct ",
    "honest ",
    "crafty ",
    "peaceful ",
    "calm ",
    "blond ",
    "blue-eyed "
  ];
  let noun = [
    "reindeer ",
    "aurora borealis ",
    "HSL inspector ",
    "Vero official ",
    "squirrel ",
    "ice puddle ",
    "moomin "
  ];
  let action = [
    "took my ",
    "threw my ",
    "yelled at my ",
    "kicked my ",
    "stole my ",
    "burned my ",
    "bit my ",
    "hit my "
  ];
  let possetion = [
    "rye bread ",
    "money ",
    "winter gloves ",
    "wool socks ",
    "skis ",
    "lonkero ",
    "blueberries ",
    "salmon soup ",
    "ice skates ",
    "8 euro beer "
  ];
  let where = [
    "in the tram stop",
    "in the swamp",
    "in the sauna",
    "in front of Rautatientori",
    "near Tripla",
    "near Kontula",
    "at the cabin"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
