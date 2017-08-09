/**
 * Created by anton on 30-Sep-16.
 */
function isValidDistance([x1, y1, x2, y2]){
    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);
    if(Math.sqrt(x1 * x1 + y1 * y1) == Math.round(Math.sqrt(x1 * x1 + y1 * y1)))console.log( `{`+ x1 + `, ` + y1 + `}` + ` to {0, 0} is valid`);
    else   console.log( `{`+ x1 + `, ` + y1 + `}` + ` to {0, 0} is invalid`);

    if(Math.sqrt(y2 * y2 + x2 * x2) == Math.round(Math.sqrt(y2 * y2 + x2 * x2)))console.log( `{`+ x2 + `, ` + y2 + `}` + ` to {0, 0} is valid`);
    else   console.log( `{`+ x2 + `, ` + y2 + `}` + ` to {0, 0} is invalid`);

    if(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) == Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)))) console.log(`{`+ x1 + `, ` + y1 + `}` + ` to ` + `{`+ x2 + `, ` + y2 + `} `+ `is valid`);
    else   console.log(`{`+ x1 + `, ` + y1 + `}` + ` to ` + `{`+ x2 + `, ` + y2 + `} `+ `is invalid`);

}

isValidDistance(['2','1','1','1']);