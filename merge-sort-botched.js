function mergeSort (array, l, r) {

  if (l < r) {

    // Step 1: Calculate new center
    var m = Math.floor((l + r) / 2);
    // Step 2: Sort first half
    mergeSort(array, l, m);
    // Step 3: Sort second half
    mergeSort(array, m + 1, r);
    merge(array, l, m, r);
  }
  return;
}

function merge(array, l, m, r) {
  var size_i = m - l + 1;
  var size_j = r - m;
  var i = 0;
  var j = 0;
  var k = 0;
  var array_i = array.slice(l, l + size_i);
  var array_j = array.slice((m + 1), ((m + 1) + size_j) );

  while ((i < size_i) && (j < size_j)){

    if(array[i] <= temp_array[j]) {
      array[k] = array_i[i];
      i++;
    }
    else {
      array[k] = array_j[j];
      j++;
    }
    k++;

  }

  while (i < size_i){
    array[k] = array_i[i];
    i++;
    k++;
  }

  while (j < size_j){
    array[k] = array_j[j];
    j++;
    k++;
  }
  return;
}

test_array = [1, 3, 6, 28, 0, 5000, 289, 230];
console.log(test_array);
mergeSort(test_array, 0, test_array.length - 1);
console.log(test_array);