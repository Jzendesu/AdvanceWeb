const year1 = [0, 4, 16, 18, 20];
const year2 = year1.map(myFunction);

document.getElementById("arrayiteration").innerHTML = year2;

function myFunction(value, index, array) {
  return value + 2000;
}