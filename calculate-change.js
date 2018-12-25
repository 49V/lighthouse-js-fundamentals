var calculateChange = function(total, cash) {

  const dollar_values = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  const dollar_strings = ['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  var count;
  var strings = [];
  var number_of_bills = 9;

  var change = cash - total;

  if (change < 0) {
    console.log(`Error, not enough cash, need: ${Math.abs(change)} cents`);
    return;
  }

  else {

    for(var i = 0; i < number_of_bills; i++) {
      count = Math.floor(change / dollar_values[i]).toString();
      // Uses short-circuiting to properly assign values
      (count > 0) && (strings = strings.concat(`${dollar_strings[i]}: ${count},`));
      change = change - dollar_values[i] * count;
    }

  }
  // Join the strings together and remove the last comma
  return '{ ' + strings.join(' ').slice(0, -1) + ' }';
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(500, 4000));
