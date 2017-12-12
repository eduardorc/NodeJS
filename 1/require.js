console.log('Starting app.');

const fs = require('fs'); //Require puxa a biblioteca, File System nesse caso
const os = require('os');

console.log ('Starting node.js');
const notes = require('./notes.js');//Acessar o notes.js

var user = os.userInfo();

var res = notes.addNote();
console.log (res);

console.log ('Result: ', notes.add(9, -2));

//Cria um arquivo e escreve nele (Nome do arquivo,'value')
fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}! `);
//Texto $variavel texto (utilizar qnd colocar variáveis no meio)
/*
fs.appendFile('greetings.txt', 'Hello World', function (err) {
  if (err) { console.log ('Unable to write to file')};
});
*/
//Qualquer um dos dois dará certo
