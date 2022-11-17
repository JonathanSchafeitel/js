const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

var resultat = 1
var tab = []
var livreLePlusLouer
var livreLeMoinsLouer 
var title873495
var book133712

for (let bookAttribut in books) {
  let bookRented = books[bookAttribut].rented
  let bookTitle = books[bookAttribut].title
  let bookId = books[bookAttribut].id
  
  // Livres ont été au moins empruntés une fois
  resultat *= bookRented

  // livre le plus emprunté 
  tab.push(bookRented)
  let l = tab.length - 1
  let most = tab.sort()[l]
  if(bookRented === most) {
    livreLePlusLouer = bookTitle
  }

  // livre le moins emprunté 
  let less = tab.sort()[0]
  if(bookRented === less) {
    livreLeMoinsLouer = bookTitle
  }

  // Livre avec l'id 873495
  if(bookId === 873495) {
    title873495 = bookTitle 
  }

  // Supprimer livre avec l'id 133712
  if(bookId === 133712) {
    book133712 = books.indexOf(books[bookAttribut]) 
  }
  
}

// Exercice 1
console.log("1. Est-ce que tous les livres ont été au moins empruntés une fois ?")
if(resultat > 0) {
  console.log("> " + "Oui") 
} else {
  console.log("> " + "Non")
}

// Exercice 2
console.log("2. Quel est livre le plus emprunté ?")
console.log("> " +livreLePlusLouer)

// Exercice 3
console.log("3. Quel est livre le moins emprunté ?")
console.log("> " + livreLeMoinsLouer)

// Exercice 4
console.log("4. Le livre avec l'ID: 873495")
console.log("> " + title873495)

// Exercice 5 
console.log("5. Suppression du livre avec l'ID: 133712")
console.log(books[book133712])
books.splice(books[book133712],1)
console.log(books)

// Exercice 6 
console.log("6. Livres triés par ordre alphabétique")
var byTitle = books.slice(0) 
byTitle.sort(function(a,b) {
  var x = a.title.toLowerCase();
  var y = b.title.toLowerCase();
  return x < y ? -1 : x > y ? 1 : 0;
});
console.log(byTitle)