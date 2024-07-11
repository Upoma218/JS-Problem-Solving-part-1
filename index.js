// 1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const persons = [
  {
    name: "Rahim",
    age: 34,
    gender: "male",
  },
  {
    name: "Rahima",
    age: 30,
    gender: "female",
  },
  {
    name: "Korim",
    age: 23,
    gender: "male",
  },
  {
    name: "Jorina",
    age: 45,
    gender: "female",
  },
  {
    name: "Siam",
    age: 22,
    gender: "male",
  },
  {
    name: "Sabina",
    age: 34,
    gender: "female",
  },
];

const restPeople = persons.filter((person) => person.gender !== "female");
const peopleWithName = restPeople.map((people) => people.name);

console.log(peopleWithName);

/* ----------------------------------------------------------------------- */

// 2.Task: Object Manipulation

// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const bookTites = books.map((book) => book.title);
console.log(bookTites);

/* ----------------------------------------------------------------------- */

// 3.Task: Function Composition

// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

const number = 10;

const square = (num) => num * num;

const double = (num) => num * 2;

const add5 = (num) => num + 5;

const finalResult = (num) => add5(double(square(num)));
console.log(finalResult(number));

/* ----------------------------------------------------------------------- */

// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2018,
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2021,
  },
  {
    make: "Chevrolet",
    model: "Camaro",
    year: 2019,
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2022,
  },
];

const sortingByYear = cars.sort((a, b) => a.year - b.year);
console.log(sortingByYear);

/* ----------------------------------------------------------------------- */

// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const peoples = [
  {
    name: "Rahim",
    age: 34,
  },
  {
    name: "Rahim",
    age: 30,
  },
  {
    name: "Korim",
    age: 23,
  },
  {
    name: "Rahim",
    age: 45,
  },
  {
    name: "Siam",
    age: 22,
  },
  {
    name: "Sabina",
    age: 34,
  },
];

const modifyAge = (peoples, peopleName, newAge) => {
  peoples.forEach((people) => {
    if (people.name === peopleName) {
      people.age = newAge;
    }
  });
  return peoples;
};
modifyAge(peoples, "Rahim", 50);
console.log(modifyAge(peoples, "Rahim", 50), { peoples });
