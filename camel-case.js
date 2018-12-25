var camelCase = function(input) {
  var array = input.split(' ');

  array.forEach(function(part, index) {
    this[index] = part[0].toUpperCase() + part.slice(1);
  }, array)

  return array.join(' ');

}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));