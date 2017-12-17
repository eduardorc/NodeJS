co
nsole.log ('Starting notes.js');

var addNote = (tittle, body) => {
  console.log ('Adding note: ', tittle, body);
};

var getAll = () => {
  console.log ('Getting all the notes.');
}

var getNote = (tittle) => {
  console.log ('Getting note: ', tittle);
}

var remNote = (tittle) => {
  console.log ('Removing note.', tittle);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  remNote
}
