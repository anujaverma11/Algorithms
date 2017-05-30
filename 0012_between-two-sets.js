// Consider two sets of positive integers, A={a1, a2, a3} and B={b1, b2, b3}. We say that a positive integer, x, is between sets A and B if the following conditions are satisfied:

// 1. All elements in A are factors of x.
// 2. x is a factor of all elements in B.
// In other words, some x is between A and B if that value of x satisfies x mod A = 0 for every a in A and also satisfies b mod x = 0 for every b in B. For example, if A = {2, 6} and B={12}, then our possible x values are 6 and 12.

// Given A and B, find and print the number of integers (i.e., possible x's) that are between the two sets.

// Input Format

// The first line contains two space-separated integers describing the respective values of n (the number of elements in set A) and m (the number of elements in set B).
// The second line contains n distinct space-separated integers describing a1, a2, a3, a4.....
// The third line contains m distinct space-separated integers describing b1, b2, b3, b4....

// Constraints

// Output Format

// Print the number of integers that are considered to be between A and B.

// Sample Input

// 2 3
// 2 4
// 16 32 96
// Sample Output

// 3

// Thus, we print 3 as our answer.

/////////////// ignore above this line ////////////////////

function getTotalX(a, b){
    // Complete this function
    // a = [ 2, 4 ];
    // b = [ 16, 32, 96 ];
    var total = 0;


    for(var i = a[0]; i<=b[0]; i++){
      // console.log(i);
      var counter = 0;

      for(var j=0;j<a.length;j++){
        if(i % a[j] !== 0){
          counter += 1;
        }
      }

      if (counter === 0){
        for(var z=0;z<b.length;z++){
           if(b[z] % i !== 0){
            counter += 1;
          }
        }
      }

      if(counter === 0){
        total+=1;
      }

    }
    return(total);
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write(""+total+"\n");

}
