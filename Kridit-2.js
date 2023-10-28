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
const b = +prompt("Foizi");
const c = +prompt("Muddati");

jadval.summa = a;
jadval.foiz = b;
jadval.muddati = c;

const oylikFoizNisbi = b / 100 / 12;
const oylikTolov = a * oylikFoizNisbi / (1 - Math.pow(1 + oylikFoizNisbi, -c));

let qolganQarzMiqdori = a;
let jamiFoiz = 0;

for (let i = 0; i < c; i++) {
  const oylikFoiz = qolganQarzMiqdori * oylikFoizNisbi;
  const oylikAsosiyTolov = oylikTolov - oylikFoiz;
  const oylikJamiTolov = oylikTolov;

  jadval.harOylikTolov.push(oylikJamiTolov);
  jadval.harOylikFoiz.push(oylikFoiz);

  qolganQarzMiqdori -= oylikAsosiyTolov;
  jamiFoiz += oylikFoiz;
}

jadval.umumiyqarzdorlik = a + jamiFoiz;

console.log(jadval);