console.log ('Starting app.js');

console.log ('Result: ', notes.add(9, -2));

//LODASH
console.log(_.isString(true)); //Retorna False pois boolean
console.log(_.isString('Eduardo')); //Retorna true

var filteredArray = _.uniq(['Eduardo', 1, 2, 2, 'Eduardo']);
console.log (filteredArray);
