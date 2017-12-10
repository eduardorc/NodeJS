console.log('Starting app.');

const fs = require('fs'); //Require puxa a biblioteca, File System nesse caso
const os = require('os');

var user = os.userInfo();

//Cria um arquivo e escreve nele (Nome do arquivo,'value')
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);
//`Texto $variavel texto` (utilizar ` qnd colocar variáveis no meio)


/*
fs.appendFile('greetings.txt', 'Hello World', function (err) {
  if (err) { console.log ('Unable to write to file')};
});
*/
//Qualquer um dos dois dará certo
