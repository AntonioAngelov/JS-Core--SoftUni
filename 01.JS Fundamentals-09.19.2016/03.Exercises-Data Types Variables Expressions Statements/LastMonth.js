/**
 * Created by anton on 26-Sep-16.
 */
function findLastDayOfMonth([date, month, year]) {
    month -= 1;
   switch(month){
       case 0:
           console.log("31");
           break;
       case 1:
           console.log("31");
           break;
       case 2:
           if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) console.log("29");
           else console.log("28");
           break;
       case 3:
           console.log("31");
           break;
       case 4:
           console.log("30");
           break;
       case 5:
           console.log("31");
           break;
       case 6:
           console.log("30");
           break;
       case 7:
           console.log("31");
           break;
       case 8:
           console.log("31");
           break;
       case 9:
           console.log("30");
           break;
       case 10:
           console.log("31");
           break;
       case 11:
           console.log("30");
           break;
   }
}

findLastDayOfMonth(['17','1','2002']);