function exponentiation(x, n) {
  // your code here
  if (n < 0) {
    return "Wrong input";
  } else if (n === 0) {
    return 1;
  } else if (n <= 1) {
    return x;
  } else {
    n--;
    return x * exponentiation(x, n);
  }
}
console.log(exponentiation(2, 3)); // 8 // 2 * 2* 2 = 8
console.log(exponentiation(2, 12)); // 4096
console.log(exponentiation(7, 2)); // 49
console.log(exponentiation(9, 3)); // 729
console.log(exponentiation(22, 5)); // 5153632
console.log(exponentiation(1996, 0)); // 1
console.log(exponentiation(4213, -3)); // “wrong input”
