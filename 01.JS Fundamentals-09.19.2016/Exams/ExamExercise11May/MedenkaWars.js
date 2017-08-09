/**
 * Created by anton on 15-Oct-16.
 */
function findWinner(input){
    let attacks = input.map(row => row.split(' '));
    let consecutiveWhiteAttacks = [0, 0];//[count, damage]
    let consecutiveDarkAtacks = [0, 0];
    let damageTakenByWhite = 0;
    let damageTakenByDark = 0;

    for (let i = 0; i < attacks.length; i++) {
        attacks[i][0] = Number(attacks[i][0])
        if(attacks[i][1] == 'white'){
            if(consecutiveWhiteAttacks[1] == attacks[i][0]){
                consecutiveWhiteAttacks[0] += 1;
                if(consecutiveWhiteAttacks[0] % 2 == 0){
                    damageTakenByDark += 2.75 * 60 * attacks[i][0];
                }
                else   damageTakenByDark += 60 * attacks[i][0];
            }
            else{
                consecutiveWhiteAttacks[1] = attacks[i][0];
                consecutiveWhiteAttacks[0] = 1;
                damageTakenByDark += 60 * attacks[i][0];
            }
        }

        else{
            if(consecutiveDarkAtacks[1] == attacks[i][0]){
                consecutiveDarkAtacks[0] += 1;
                if(consecutiveDarkAtacks[0] % 5 == 0){
                    damageTakenByWhite += 4.5 * 60 * attacks[i][0];
                }
                else   damageTakenByWhite += 60 * attacks[i][0];
            }

            else{
                consecutiveDarkAtacks[1] = attacks[i][0];
                consecutiveDarkAtacks[0] = 1;
                damageTakenByWhite += 60 * attacks[i][0];
            }
        }

    }

    if(damageTakenByDark > damageTakenByWhite){
        console.log("Winner - Vitkor");
        console.log(`Damage - ${damageTakenByDark}`);
    }
    else{
        console.log("Winner - Naskor");
        console.log(`Damage - ${damageTakenByWhite}`);
    }
}

findWinner([
   '2 dark medenkas',
   '1 white medenkas',
   '2 dark medenkas',
   '2 dark medenkas',
   '15 white medenkas',
   '2 dark medenkas',
   '2 dark medenkasc'
]);