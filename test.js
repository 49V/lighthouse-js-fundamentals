function changeParam(x, y, z) {
  x = 3;
  y = "new string";
  z["key2"] = "new";
  z["key3"] = "newer";

  z = {"new" : "object"};
}

var a = 1,
    b = "something",
    c = {"key1" : "whatever", "key2" : "original value"};

console.log(c);

changeParam(a, b, c);

console.log(c);