// var obj = {
//   name: 'Eduardo'
// };
//
// var stringObj = JSON.stringify(obj); //conver o obj em string
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Eduardo", "age": 24}';
// var person = JSON.parse(personString); //Converte em String no original
// console.log (typeof person);
// console.log (person);

const fs = require ('fs');

var originalNote = {
  tittle: 'Some tittle',
  body: 'Some body'
};
//Irá transformar em string e salvar no arquivo notes.json
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync ('notes.json', originalNoteString);

//Irá voltar a forma original de obj
var noteString = fs.readFileSync ('notes.json');
var note = JSON.parse(noteString);

console.log (typeof note);
console.log(note.tittle);
