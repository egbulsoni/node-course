const fs = require("fs");

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday"
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync("1-json.json", bookJSON);
// const dataBuffer = fs.readFileSync(`1-json.json`);
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(dataBuffer.toString());

fs.readFileSync("1-json.json");
const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Eduardo";
data.age = 22;

console.log(data);

const personJSON = JSON.stringify(data);
fs.writeFileSync("1-json.json", personJSON);

// console.log(personJSON);
