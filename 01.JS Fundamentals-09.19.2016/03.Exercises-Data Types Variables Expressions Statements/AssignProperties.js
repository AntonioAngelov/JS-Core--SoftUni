/**
 * Created by anton on 26-Sep-16.
 */
function assign([prop1, x1, prop2, x2, prop3, x3]) {
    let object = {};
    object[prop1] = x1;
    object[prop2] = x2;
    object[prop3] = x3;

    console.log(object);
}

assign(['name', 'Pesho', 'age', '23', 'gender', 'male']);