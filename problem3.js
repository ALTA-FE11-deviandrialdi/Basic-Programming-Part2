function primeNumber(number) {
  // Your Code Here
  
   let pembagi = 0
    for(let i = 1; i <= number; i++){
        number % i === 0 && pembagi++
    }

    return pembagi === 2
}

console.log(primeNumber(11)); // true
console.log(primeNumber(13)); // true
console.log(primeNumber(17)); // true
console.log(primeNumber(20)); // false
console.log(primeNumber(35)); // false
