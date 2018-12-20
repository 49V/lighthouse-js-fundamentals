/*
  Author : Moshe Lawlor
  Inspiration from https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
  Note : I tried setting this up using pass by reference, but after quite a few hours
  I was unsuccessful. I then had to defer to find some help, and found this article
  useful for working out my mergeSort logic, and a pass by value implementation.
*/
function mergeSort (array) {

  // Base Case
  if (array.length == 1) {
    return array;
  }

  // Step 1: Calculate new center
  var middle_index = Math.floor(array.length / 2);
  // Step 2: Sort first half
  var left_array = array.slice(0, middle_index);
  // Step 3: Sort second half
  var right_array = array.slice(middle_index);
  return merge(mergeSort(left_array), mergeSort(right_array));

}

function merge(left_array, right_array) {

  var sorted_array = [];
  var i = 0;
  var j = 0;
  var left_size = left_array.length;
  var right_size = right_array.length

  while ((i < left_size) && (j < right_size)){

    if(left_array[i] < right_array[j]) {
      sorted_array.push(left_array[i]);
      i++;
    }
    else {
      sorted_array.push(right_array[j]);
      j++;
    }
  }

  while (i < left_size){
    sorted_array.push(left_array[i]);
    i++;
  }

  while (j < right_size){
    sorted_array.push(right_array[j]);
    j++;
  }

  return sorted_array;
  // This can alternatively be shortened by:
  // sorted_array.concat(left_array.slice(i)).concat(right_array.slice(j))
  // and removing the loops

}
