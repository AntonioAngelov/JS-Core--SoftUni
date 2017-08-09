function toHTML(json){
    let arrOfStudents = JSON.parse(json);
    let html = `<table>\n`;
    html += `  <tr>`;
    for (let key of Object.keys(arrOfStudents[0])){
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += `</tr>\n`;

   for (let obj of arrOfStudents ){
       html += '  <tr>';
       for (let key of Object.keys(obj)){
           html += `<td>${htmlEscape(obj[key])}</td>`
       }
       html += '</tr>\n';
   }
   html += `</table>\n`;

   function htmlEscape(text) {
       text = new String(text);
       let map = { '"': '&quot;', '&': '&amp;',
           "'": '&#39;', '<': '&lt;', '>': '&gt;' };
       return text.replace(/[\"&'<>]/g, ch => map[ch]);
   }

    console.log(html);
}

toHTML('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');