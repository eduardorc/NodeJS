console.log ('Starting notes.js');

const fs = require ('fs');

var fetchNotes = () => {
  //Try será para checar se já existe o arq e executar o comando
  //para que crashar tentando copiar o que já tinha.
  //Código interno: copia o que já tinha
  try {
    var notesString = fs.readFileSync ('notes_data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }; //Caso não ocorra erro, nada será feito.
};

var saveNotes = (notes) => {
  fs.writeFileSync ('notes_data.json', JSON.stringify(notes));
}


var addNote = (tittle, body) => {
  var notes = fetchNotes();
  var note = {
    tittle,
    body
  };

  var duplicateNotes = notes.filter((note) => note.tittle === tittle);
  //console.log (duplicateNotes);
  //Irá retornar o qu estiver duplicado

  if (duplicateNotes.length === 0){
    notes.push(note); //Adiciona uma informação ao final do array
    saveNotes(notes);
    return note;
    //Escreve no arquivo
  };
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
