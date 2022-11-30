// Problem 1 - Konversi Nilai

function studentScore(number) {
  if (number >= 80 && number <= 100) {
    return "A";
  } else if (number >= 65 && number <= 79) {
    return "B+";
  } else if (number >= 50 && number <= 64) {
    return "B";
  } else if (number >= 35 && number <= 49) {
    return "C";
  } else if (number > 0 && number <= 34) {
    return "D";
  } else {
    return "invalid";
  }
}

let score = 80;
// input
console.log(studentScore(score)); // Nilai A
