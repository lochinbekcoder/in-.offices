"use strict";
const kridit = prompt("Kredit maqsadini kiriting");
const jadval = {
  maqsadi: kridit,
  summa: {},
  foiz: {},
  muddati: {},
  harOylikFoiz: [],
  harOylikTolov: [],
  umumiyqarzdorlik: {},
};

const a = +prompt("Kredit summasi");
jadval.summa = a;

const b = +prompt("Foizi");
jadval.foiz = b;

const c = +prompt("Muddati");
jadval.muddati = c;

let qolganQarzMiqdori = a;
let jamiFoiz = 0;

for (let i = 0; i < c; i++) {
  const oylikFoiz = qolganQarzMiqdori * (b / 100 / 12);
  const oylikAsosiyTolov = a / c;
  const oylikJamiTolov = oylikAsosiyTolov + oylikFoiz;

  jadval.harOylikTolov.push(oylikJamiTolov);
  jadval.harOylikFoiz.push(oylikFoiz);

  qolganQarzMiqdori -= oylikAsosiyTolov;
  jamiFoiz += oylikFoiz;
}

jadval.umumiyqarzdorlik = a + jamiFoiz;

console.log(jadval);