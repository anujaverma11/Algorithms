// There are two kangaroos on an x-axis ready to jump in the positive direction (i.e, toward positive infinity). The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine if they'll ever land at the same location at the same time?

// Input Format

// A single line of four space-separated integers denoting the respective values of x1, v1, x2, and v2.

// Constraints

// 0 <= x1 <= x2 <= 10000
// 1 <= v1 <= 10000
// 1 <= v2 <= 10000


// Output Format

// Print YES if they can land on the same location at the same time; otherwise, print NO.

// Note: The two kangaroos must land at the same location after making the same number of jumps.

// Sample Input 0

// 0 3 4 2
// Sample Output 0

// YES
// Explanation 0

// The two kangaroos jump through the following sequence of locations:

// 0 - 3 - 6 - 9 - 12
// 4 - 6 - 8 - 10 - 12

// Thus, the kangaroos meet after 4 jumps and we print YES.

// Sample Input 1

// 0 2 5 3

// Sample Output 1

// NO
// Explanation 1

// The second kangaroo has a starting location that is ahead (further to the right) of the first kangaroo's starting location (i.e., x2 > x1). Because the second kangaroo moves at a faster rate (meaning v2 > v1) and is already ahead of the first kangaroo, the first kangaroo will never be able to catch up. Thus, we print NO.


function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

// var x1 = 4602;
// var v1 = 8519;
// var x2 = 7585;
// var v2 = 8362;

    for(var i = 1; i<=10000; i++){
      x1 += v1;
      x2 += v2;
      //console.log(x1, x2)
      if(x1===x2){
        console.log("YES");
        var match = 1;
        break;
      }
    }

    if(match != 1){
        console.log("NO");
      }

}