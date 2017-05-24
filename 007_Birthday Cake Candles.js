
// Colleen is turning x years old! She has x candles of various heights on her cake, and candle i has height height-i . Because the taller candles tower over the shorter ones, Colleen can only blow out the tallest candles.

// Given the height-i for each individual candle, find and print the number of candles she can successfully blow out.

// Input Format

// The first line contains a single integer, x, denoting the number of candles on the cake.
// The second line contains x space-separated integers, where each integer i describes the height of candle .

// Constraints
// 1 <= n <= 10^5
// Output Format
// 1 <= height-i <= 10^7

// Print the number of candles Colleen blows out on a new line.

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2
// Explanation 0

// We have one candle of height 1, one candle of height 2, and two candles of height 3. Colleen only blows out the tallest candles, meaning the candles where height=3. Because there are 2 such candles, we print 2 on a new line.


function main() {
    var n = parseInt(readLine());
    height = readLine().split(' ');
    height = height.map(Number);
    tallestCandle = Math.max.apply( Math, height);
    // console.log(tallestCandle)
    var allTallCandles = 0;

    height.forEach(function (value) {
      if(value === tallestCandle){
        allTallCandles += 1;
      }
    });

console.log(allTallCandles);

}
