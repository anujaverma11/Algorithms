// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where s is the start point and t is the end point. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point a and the orange tree is at point b.

// a_____________s______________t_______________b

// When a fruit falls from its tree, it lands d units of distance from its tree of origin along the x-axis. A negative value of d means the fruit fell d units to the tree's left, and a positive value of d means it falls d units to the tree's right.

// Given the value of d for m apples and n oranges, can you determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s,t])? Print the number of apples that fall on Sam's house as your first line of output, then print the number of oranges that fall on Sam's house as your second line of output.

// Input Format

// The first line contains two space-separated integers denoting the respective values of s and t.
// The second line contains two space-separated integers denoting the respective values of a and b.
// The third line contains two space-separated integers denoting the respective values of m and n.
// The fourth line contains m space-separated integers denoting the respective distances that each apple falls from point a.
// The fifth line contains n space-separated integers denoting the respective distances that each orange falls from point b.

// Constraints

// Output Format

// Print two lines of output:

// On the first line, print the number of apples that fall on Sam's house.
// On the second line, print the number of oranges that fall on Sam's house.
// Sample Input 0

// 7 11
// 5 15
// 3 2
// -2 2 1
// 5 -6
// Sample Output 0

// 1
// 1
// Explanation 0

// The first apple falls at position 5 - 2 = 3.
// The second apple falls at position 5 + 2 = 7.
// The third apple falls at position 5 + 1 = 6.
// The first orange falls at position 15 + 5 = 20.
// The second orange falls at position 15 - 6 = 9.
// Only one fruit (the second apple) falls within the region between 7 and 11, so we print 1 as our first line of output.
// Only the second orange falls within the region between 7 and 11, so we print 1 as our second line of output.

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);

    // a = 5;
    // b = 15;
    // m = 3;
    // n = 2;
    // apple = [ -2, 2, 1 ];
    // orange = [ 5, -6 ];

    var appleOnHouse = 0;
    var orangeOnhouse = 0;
    for(var i = 0; i<m; i++){
        if((a + apple[i]) >= s && (a + apple[i]) <= t){
            appleOnHouse++;
        }
    }

    for(var j = 0; j<n; j++){
        if((b + orange[j]) <= t && (b + orange[j])>=s){
            orangeOnhouse++;
        }
    }
    console.log(appleOnHouse);
    console.log(orangeOnhouse);

}
