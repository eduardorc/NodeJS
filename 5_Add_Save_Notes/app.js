console.log ('Starting app.js');

const fs = require ('fs');
const yargs = require ('yargs'); // NPM
const notes = require('./notes.js');
const argv = yargs.argv;

var command = argv._[0];//var command = process.argv[2];

console.log ('Command: ', command);
//console.log ('Process: ', process.argv);
console.log ('Yargs: ', argv);

//Without yargs
if (command == 'add'){
  var note = notes.addNote(argv.tittle, argv.body); //node app.js add --tittle Título --body Corpo
  if (note) {
    console.log ('Note created.');
    console.log ('----');
    console.log ('Title: ', note.tittle);
    console.log ('Body: ', note.body);
  }else {
    console.log ('Note tittle taken');
  }
}else if (command == 'list'){
  notes.getAll();  //node app.js list
}else if (command == 'read') {
  notes.getNote (argv.tittle); //node app.js read --tittle Título
} else if (command == 'remove'){
  notes.remNote (argv.tittle); //node app.js remove --tittle Título
} else {
  console.log ('Command not recognized.');
}
