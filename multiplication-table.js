/*
 * Creates a multiplcation table based upon row_length
 *
 * @param {integer} row_length   : Positive integer with the number of * items in a row
 *
 * @return {string} multiplicationTable : String of our properly formatted divider
*/
var create_multiplication_table = function(row_length) {
  var multiplicationTable = "";

  for(var i = 0; i < row_length; i++) {
    multiplicationTable = multiplicationTable.concat(create_divider(row_length));
    multiplicationTable = multiplicationTable.concat(create_line(i + 1, row_length));
  }

  multiplicationTable = multiplicationTable.concat(create_divider(row_length));

  return multiplicationTable;
}

/*
 * Creates a single divider row_based upon the size of the table
 *
 * @param {integer} times   : Positive integer with the number of items on a *                          line
 *
 * @return {string} divider : String of our properly formatted divider
*/
var create_divider = function(times) {
  maxNumberOfDigits = calculate_num_digits(times * times);
  const block = "+" + '-'.repeat(maxNumberOfDigits + 2);
  var divider = block.repeat(times);
  divider = divider.concat('+\n');
  return divider
}

/*
 * Creates a single line row_based upon the first value of a row, and its * associated length
 *
 * @param {integer} row_base   : Positive integer of the first value of the row
 * @param {integer} row_length : Positive integer containing number of
 * items per row
 *
 * @return {string} line       : String with our properly formatted line
*/
var create_line = function(row_base, row_length) {
  var line = "";
  var numberOfSpaces, numberOfDigits, entryValue;

  const space = " ";

  for(var i = 0; i < row_length; i++) {
    entryValue = row_base * (i + 1);
    numberOfDigits = calculate_num_digits(entryValue);
    numberOfSpaces = (calculate_num_digits(row_length * row_length) - numberOfDigits) + 1;
    line = line.concat(`| ${entryValue}` + space.repeat(numberOfSpaces));
  }

  line = line.concat('|\n');

  return line
}

/*
 * Calculates the number of digits of a given positive integer. Ex:
 * calculate_num_digits(526) returns 3
 * calculate_num_digits(20) returns 2
 *
 * @param {integer} number : Positive integer which we want the number of * digits for
 *
 * @return {integer} : The number of digits in number
*/
var calculate_num_digits = function(number) {
  return number.toString().length;
}

console.log(create_multiplication_table(1));
console.log(create_multiplication_table(5));
console.log(create_multiplication_table(10));