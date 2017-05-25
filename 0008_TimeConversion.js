// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Input Format

// A single string containing a time in 12-hour clock format (i.e.:hh:mm:ss  or hh:mm:ssPM), where
// 01<=hh<=12 and 00<=mm,ss<=59.

// Output Format

// Convert and print the given time in 24-hour format, where 00<=hh<=23.

// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45


function main() {

    var time = readLine();
    // var time = "01:05:45AM";
    hour = time.substr(0, 2);
    hourToConvert = Number(hour);
    if (time[8]=="P" && hourToConvert<12){
      hourToConvert = hourToConvert + 12;
      console.log((time.replace(hour, hourToConvert)).substring(0,8));
    }

    else if (time[8]=="A" && hourToConvert == 12){
      console.log(time.replace(hour, "00").substring(0,8));
    }

    else{
      console.log(time.substring(0,8));
    }

}
