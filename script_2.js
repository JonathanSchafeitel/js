number = prompt("De quel nombre veux-tu calculer la factorielle ?");
nb = Number(number);

function factorial(nb) {
  if (nb == 1 || nb == 0)
  return 1;
  else
  return (factorial(nb - 1) * nb);
}


let res = "Le résultat est : " + factorial(nb);
console.log(res);