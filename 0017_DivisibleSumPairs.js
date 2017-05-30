// You are given an array of n integers, a0, a1, a2, a3, a4...., and a positive integer, k. Find and print the number of (i,j) pairs where i < j and ai + aj is evenly divisible by k.

// Input Format

// The first line contains 2 space-separated integers, n and k, respectively.
// The second line contains n space-separated integers describing the respective values of a0, a1, a2, a3, a4.....


// Output Format

// Print the number of (i, j) pairs where i<j and ai + aj is evenly divisible by k.

// Sample Input

// 6 3
// 1 3 2 6 1 2
// Sample Output

//  5
// Explanation

// Here are the 5 valid pairs:

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    // write your code here
    var divisibleSumPairs = 0;

    for(var i=0; i<a.length; i++){
      for(var j=i+1; j<a.length; j++){
        if(((a[i]+a[j]) % k) === 0){
          divisibleSumPairs += 1;
        }
      }

    }

    console.log(divisibleSumPairs);
}
