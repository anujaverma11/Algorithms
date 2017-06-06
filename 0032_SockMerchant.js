// John's clothing store has a pile of n loose socks where each sock i is labeled with an integer, c^i, denoting its color. He wants to sell as many socks as possible, but his customers will only buy them in matching pairs. Two socks, i and j, are a single matching pair if c^i = c^j.

// Given n and the color of each sock, how many pairs of socks can John sell?

// Input Format

// The first line contains an integer, n, denoting the number of socks.
// The second line contains n space-separated integers describing the respective values of c^0, c^1, c^2, c^3..., c^n-1.


// Output Format

// Print the total number of matching pairs of socks that John can sell.

// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3
// Explanation
// we can match three pairs of socks. Thus, we print 3 on a new line.

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);

    var removed = 0;
    var noOfmatches = 0;

    for(var i=0;i<c.length;i++){
      for(var j=0;j<c.length;j++){
        if(c[i] === c[j] && i!==j){
          // console.log(i + " "+ j)
          noOfmatches++;
          c.splice(i, 1);
          c.splice(j-1, 1);
          i = 0;
          j = 0;
        }
      }
      // console.log(c);
    }

    console.log(noOfmatches);

}
