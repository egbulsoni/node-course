const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const removeNote = title => {
  const notes = loadNotes();
  const newNotes = notes.filter(note => note.title !== title);

  // console.log(notes.length === newNotes.length);
  if (newNotes.length === notes.length) {
    console.log(chalk.red.inverse("Failed! item not found"));
  } else {
    console.log(chalk.green.inverse("Success, item removed!"));
    saveNotes(newNotes);
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your notes:"));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNotes();
  const wantedNote = notes.find(note => note.title === title);
  if (wantedNote) {
    console.log(chalk.yellow(wantedNote.title));
    console.log(wantedNote.body);
  } else {
    console.log(chalk.red("Note not found!"));
  }
};

module.exports = {
  readNote: readNote,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};
