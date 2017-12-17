console.log ('Starting app.js');

const yargs = require ('yargs'); // NPM
const notes = require('./notes.js');
const argv = yargs.argv;

var command = argv._[0];//var command = process.argv[2];

console.log ('Command: ', command);
//console.log ('Process: ', process.argv);
console.log ('Yargs: ', argv);

//Without yargs
if (command == 'add'){
  notes.addNote(argv.tittle, argv.body); //node app.js add --tittle Título --body Corpo
}else if (command == 'list'){
  notes.getAll();  //node app.js list
}else if (command == 'read') {
  notes.getNote (argv.tittle); //node app.js read --tittle Título
} else if (command == 'remove'){
  notes.remNote (argv.tittle); //node app.js remove --tittle Título
} else {
  console.log ('Command not recognized.');
}
