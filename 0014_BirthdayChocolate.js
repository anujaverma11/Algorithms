// Lily has a chocolate bar consisting of a row of n squares where each square has an integer written on it. She wants to share it with Ron for his birthday, which falls on month m and day d. Lily only wants to give Ron a piece of chocolate if it contains m consecutive squares whose integers sum to d.

// Given m, d, and the sequence of integers written on each square of Lily's chocolate bar, how many different ways can Lily break off a piece of chocolate to give to Ron?

// For example, if m=2, d=3 and the chocolate bar contains  rows of squares with the integers [1,2,1,3,2]written on them from left to right, the following diagram shows two ways to break off a piece.

// Input Format

// The first line contains an integer denoting n (the number of squares in the chocolate bar).
// The second line contains n space-separated integers describing the respective values of s0, s1, s2, s3 (the numbers written on each consecutive square of chocolate).
// The third line contains two space-separated integers describing the respective values of d (Ron's birth day) and m (Ron's birth month).


// Output Format

// Print an integer denoting the total number of ways that Lily can give a piece of chocolate to Ron.

// Sample Input 0

// 5
// 1 2 1 3 2
// 3 2
// Sample Output 0

// 2
// Explanation 0

// This sample is already explained in the problem statement.

// Sample Input 1

// 6
// 1 1 1 1 1 1
// 3 2
// Sample Output 1

// 0
// Explanation 1

// Lily only wants to give Ron m=2 consecutive squares of chocolate whose integers sum to d=3. There are no possible pieces satisfying these constraints:


// [1,1,1,1,1,1]
// Thus, we print 0 as our answer.

// Sample Input 2

// 1
// 4
// 4 1
// Sample Output 2

// 1
// Explanation 2

// Lily only wants to give Ron m=1 square of chocolate with an integer value of d=4. Because the only square of chocolate in the bar satisfies this constraint, we print 1 as our answer.

function solve(n, s, d, m){
    var chocolatePiece = 0;
    var numberOfWays = 0;

    function sum(arr){
      var sum = 0
      for (var i = 0;i< arr.length; i++){
        sum += arr[i];
      }
      return sum
    }

    for(var i=0;i<s.length;i++){
       chocolatePiece = s.slice(i, i+m);
      // console.log(sum(chocolatePiece))

       if(chocolatePiece.length === m && sum(chocolatePiece) === d){
         numberOfWays+=1
       }


    }

    return(numberOfWays)

}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}
