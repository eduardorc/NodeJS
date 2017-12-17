console.log ('Starting app.js');

const fs = require ('fs');
const _ = require ('lodash'); //_ = padrão de uso no LOADSH

//LODASH isString
console.log(_.isString(true)); //Retorna False pois boolean
console.log(_.isString('Eduardo')); //Retorna true

//LODASH uniq
var filteredArray = _.uniq(['Eduardo', 1, 2, 2, 'Eduardo']);
console.log (filteredArray);
