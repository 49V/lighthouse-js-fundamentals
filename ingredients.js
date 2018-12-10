var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var repeat = 0;

// Write a while loop that prints out the contents of ingredients:
while ( repeat < ingredients.length ) {
  console.log( ingredients[repeat] );
  repeat++;
}

// Write a for loop that prints out the contents of ingredients:
for ( repeat = 0; repeat < ingredients.length; repeat++ ){
  console.log( ingredients[repeat] );
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
while ( repeat > 0 ) {
  console.log( ingredients [repeat - 1] );
  repeat--;
}