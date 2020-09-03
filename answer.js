const mapBefore = document.getElementById("map-before");
const mapAfter = document.getElementById("map-after");
const mapReturn = document.getElementById("map-return");
const forBefore = document.getElementById("for-before");
const forAfter = document.getElementById("for-after");
const forReturn = document.getElementById("for-return");
const redBefore = document.getElementById("red-before");
const redAfter = document.getElementById("red-after");
const redReturn = document.getElementById("red-return");
const filBefore = document.getElementById("fil-before");
const filAfter = document.getElementById("fil-after");
const filReturn = document.getElementById("fil-return");
const sorBefore = document.getElementById("sor-before");
const sorAfter = document.getElementById("sor-after");
const sorReturn = document.getElementById("sor-return");

const arry = ["bob", 10, 5, 3, 1000, "jill", "joe"];

// array.map
mapBefore.innerHTML = arry;
// If an element is a number add 1, if it is a string, capatilize it.
mapReturn.innerHTML = arry.map((e) => {
  if (isNaN(e)) {
    return e.toUpperCase();
  } else {
    return e + 1;
  }
});
mapAfter.innerHTML = arry;

// array.forEach
forBefore.innerHTML = arry;
// console.log each element of the array.
forReturn.innerHTML = arry.forEach((e) => {
  console.log(e);
});
forAfter.innerHTML = arry;

// array.reduce
redBefore.innerHTML = arry;
// Add up all the numbers in the array.  If an element is a string, ignore it.
redReturn.innerHTML = arry.reduce((a, c) => {
  if (isNaN(c)) {
    return a;
  } else {
    return a + c;
  }
}, 0);
redAfter.innerHTML = arry;

// array.filter
filBefore.innerHTML = arry;
// Remove all strings from the array
filReturn.innerHTML = arry.filter((e) => !isNaN(e));
filAfter.innerHTML = arry;

// array.sort
sorBefore.innerHTML = arry;
// sort the array
sorReturn.innerHTML = arry.sort();
sorAfter.innerHTML = arry;
