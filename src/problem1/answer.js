// Assumptions
// n - any integer which can be a negative number
// Output is less than MAX SAFE INTEGER hence assume n >=0

// Itereative
var sum_to_n_a = function (n) {
  let answer = 0;
  for (let i = 0; i <= n; i += 1) {
    answer += i;
  }
  return answer;
};

// Recursive
var sum_to_n_b = function (n) {
  if (n === 0) {
    return 0;
  }
  return sum_to_n_b(n - 1) + n;
};

// Memoization
// Mathematical formula sum of integers is n(n+1)/2
var sum_to_n_c = (function (n) {
  const memory = new Map();
  function calculateSum(n) {
    if (memory.has(n)) {
      console.log('In memory');
      return memory.get(n);
    }
    console.log('Calculating');
    const sum = (n * (n + 1)) / 2;
    memory.set(n, sum);
    return sum;
  }
  return calculateSum;
})();

// Test
// Solution A
console.log('SOLUTION A');
console.log(sum_to_n_a(0), 'expect 0');
console.log(sum_to_n_a(5), 'expect 15');

// Solution B
console.log('SOLUTION B');
console.log(sum_to_n_b(0), 'expect 0');
console.log(sum_to_n_b(5), 'expect 15');

// Solution C
console.log('SOLUTION C');
console.log(sum_to_n_c(0), 'expect 0');
console.log(sum_to_n_c(0), 'expect 0');
console.log(sum_to_n_c(5), 'expect 15');
