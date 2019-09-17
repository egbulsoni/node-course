// const validator = require("validator");
const chalk = require("chalk");
const notes = require("./notes.js");
const yargs = require("yargs");

// console.log(getNotes());
// console.log(validator.isEmail("eduardo@ex.com"));
// console.log(validator.isURL("https:/google.com"));
// console.log(chalk.green("Success!"));

// customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add new note",
  // handler: function() {
  //   console.log("adding a new note!");
  // }
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },

  handler(argv) {
    notes.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "list notes",
  handler() {
    notes.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "read a note",
  handler(argv) {
    notes.readNote(argv.title);
  },
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  }
});
// const add = require("./utils.js");
// // can't access, unless exported on utils.js
// // console.log(name);
// const sum = add(4, -2);
// console.log(sum);

// if (command === "add") {
//   console.log("adding note");
// } else if (command === "remove") {
//   console.log("Remove note!");
// }

yargs.parse();
// console.log(process.argv);
// console.log(yargs.argv);
