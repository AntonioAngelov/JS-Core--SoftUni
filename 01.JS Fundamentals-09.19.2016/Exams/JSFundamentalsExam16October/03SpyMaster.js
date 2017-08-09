/**
 * Created by anton on 16-Oct-16.
 */
function decode(input) {
    let key = input.shift().toLowerCase();
    let message = input;

    let keyPattern = new RegExp(('^'|' ') +key, "gi");
    let pattern2 = /\s+[\!\%\$#[A-Z]{8,}(\.|,|$| )/g;
    let messagePattern = new RegExp(keyPattern + pattern2, "g");

    let keyMatch = keyPattern.exec(key);
    let messageMatch = messagePattern.exec(message);


}

decode([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
]);