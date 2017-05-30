// Maria plays n games of college basketball in a season. Because she wants to go pro, she tracks her points scored per game sequentially in an array defined as score={s1,s2,s3,s4...}. After each game i, she checks to see if score s[i] breaks her record for most or least points scored so far during that season.

// Given Maria's array of score for a season of n games, find and print the number of times she breaks her record for most and least points scored during the season.

// Note: Assume her records for most and least points at the start of the season are the number of points scored during the first game of the season.

// Input Format

// The first line contains an integer denoting n (the number of games).
// The second line contains n space-separated integers describing the respective values of s0, s1, s2, s3....

function getRecord(s){
    var bestRecord = s[0];
    var bestRecordTotal = 0;
    var worstRecord = s[0];
    var worstRecordTotal = 0;
    var result = [];

    for(var i = 1;i<s.length;i++){
    // console.log(bestRecord +" "+ s[i])
      if(bestRecord < s[i]){
        bestRecord = s[i];
        // console.log("here" + " "+s[i+1] + " " +s[i])
        bestRecordTotal+=1;
      }
    }

    result[0] = bestRecordTotal;

    for(var i = 1;i<s.length;i++){
    // console.log(worstRecord +" "+ s[i])
      if(worstRecord > s[i]){
        worstRecord = s[i];
        // console.log("here" + " "+s[i+1] + " " +s[i])
        worstRecordTotal+=1;
      }
    }
    result[1] =  worstRecordTotal;
    return (result);
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}