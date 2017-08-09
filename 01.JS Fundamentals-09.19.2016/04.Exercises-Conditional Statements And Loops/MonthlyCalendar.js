/**
 * Created by anton on 28-Sep-16.
 */
function callendar([day, month, year]){
    [day, month, year] = [day, month, year].map(Number);
    console.log(`<table>`);
    console.log(`  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`);
    let firsDay = new Date(year, month - 1, 1);

    let firstDayOfCallendar = new Date(firsDay);
    firstDayOfCallendar.setDate(firstDayOfCallendar.getDate() - firstDayOfCallendar.getDay());

    let lastDayOfCallendar = new Date(firsDay);
    lastDayOfCallendar.setMonth(lastDayOfCallendar.getMonth() + 1);
    lastDayOfCallendar.setDate(0);

    lastDayOfCallendar.setDate(lastDayOfCallendar.getDate() + 6 - lastDayOfCallendar.getDay());

    let today = new Date(year, month - 1, day);
    let str = ``
    for (var i = firstDayOfCallendar; i <= lastDayOfCallendar; i.setDate(i.getDate() + 1)) {
        if(i.getDay() == 0) str += `  <tr>`;

        if(i.getFullYear() > firsDay.getFullYear() || (i.getMonth() > firsDay.getMonth() && i.getFullYear() == firsDay.getFullYear()) )str += `<td class="next-month">${i.getDate()}</td>`;
        else if(i.getFullYear() < firsDay.getFullYear() || (i.getMonth() < firsDay.getMonth() && i.getFullYear() == firsDay.getFullYear())) str += `<td class="prev-month">${i.getDate()}</td>`;
        else if(i.getDate() == today.getDate()) str += `<td class="today">${i.getDate()}</td>`;
        else str +=`<td>${i.getDate()}</td>`;

        if(i.getDay() == 6) str += `</tr>\n`;
    }
    str += `</table>`;

    console.log(str);
}

//callendar([4, 9, 2016]);