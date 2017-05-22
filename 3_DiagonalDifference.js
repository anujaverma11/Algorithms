function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    // var a = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
    var primaryDiagSum = 0;
    var secondaryDiagSum = 0;

    for(var i=0;i<a.length;i++){
      var j = i;
      primaryDiagSum += a[i][j];
      }


    for (i=0, j=(a.length-1); i<a.length, j>=0; i++, j--){
      secondaryDiagSum += a[i][j];
      }

    console.log(Math.abs(primaryDiagSum-secondaryDiagSum));

}



// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

// Input Format

// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

// Constraints

// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is absolute value function