// Anna and Brian order n items at a restaurant, but Anna declines to eat any of the Kth item (where 0<= k <= n) due to an allergy. When the check comes, they decide to split the cost of all the items they shared; however, Brian may have forgotten that they didn't split the Kth item and accidentally charged Anna for it.

// You are given n, k, the cost of each of the n items, and the total amount of money that Brian charged Anna for her portion of the bill. If the bill is fairly split, print Bon Appetit; otherwise, print the amount of money that Brian must refund to Anna.

// Input Format

// The first line contains two space-separated integers denoting the respective values of n (the number of items ordered) and k (the 0-based index of the item that Anna did not eat).
// The second line contains n space-separated integers where each integer i denotes the cost, c[i], of item i (where 0<= i <= n).
// The third line contains an integer, b (charged), denoting the amount of money that Brian charged Anna for her share of the bill.


// Output Format

// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., b (charged) - b(actual)) that Brian must refund to Anna (it is guaranteed that this will always be an integer).

// Sample Input 0

// 4 1
// 3 10 2 9
// 12
// Sample Output 0

// 5
// Explanation 0
// Anna didn't eat item c[1] = 10, but she shared the rest of the items with Brian. The total cost of the shared items is  and, split in half, the cost per person is . Brian charged her  for her portion of the bill, which is more than the  dollars worth of food that she actually shared with him. Thus, we print the amount Anna was overcharged, , on a new line.

// Sample Input 1

// 4 1
// 3 10 2 9
// 7
// Sample Output 1

// Bon Appetit
// Explanation 1
// Anna didn't eat item , but she shared the rest of the items with Brian. The total cost of the shared items is  and, split in half, the cost per person is . Because this matches the amount, , that Brian charged Anna for her portion of the bill, we print Bon Appetit on a new line.


function processData(input) {
    a = input.replace( /\n/g, " " ).split( " " );

    a = a.map(Number);

    var totalDishesOrdered = a[0];
    var counter = 0;
    var annaDeclined = a[1];
    var sum = 0

    for(var i=2;i<(a[0]+2);i++){
      sum += a[i];

      if(annaDeclined === counter){
        var notTobeShared = a[i];
      }
      counter++;
    }
    var totalTobeshared = (sum - notTobeShared)/2;
    if(totalTobeshared === a[i]){
      console.log("Bon Appetit");
    }
    else{
      console.log(a[i] - totalTobeshared);
    }
}
