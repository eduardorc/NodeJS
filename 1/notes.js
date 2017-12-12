console.log ('Notes.js iniciado.');

module.exports.age = 25;

module.exports.addNote = () => {//=>Arrow function
  console.log ('addNote');
  return 'New note';
}

module.exports.add = (a, b) => {
  return a + b;

}
