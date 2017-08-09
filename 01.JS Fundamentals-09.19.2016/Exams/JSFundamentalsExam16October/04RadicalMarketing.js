/**
 * Created by anton on 16-Oct-16.
 */
function main(input) {
    let log = input;

    let subscriptions = new Map();
    for (let i = 0; i < log.length; i++) {
        let registerPattern = /^([A-Z]+)$/g;
        let subscibePattern = /^([A-Z]+)-([A-Z]+)$/g;

        let matchRegister = registerPattern.exec(log[i]);
        let matchSubscibe = subscibePattern.exec(log[i]);

        if(matchRegister){
          if (!subscriptions.has(matchRegister[1])){
              let person = matchRegister[1];
              subscriptions.set(person, []);
          }
        }
        if(matchSubscibe){
            let person1 = matchSubscibe[1];
            let preson2 = matchSubscibe[2];
           if(person1 != preson2){
              if(subscriptions.has(person1)){
                  if(subscriptions.has(preson2)){
                      if(!subscriptions.get(preson2).includes(person1)){
                          subscriptions.get(preson2).push(person1);
                      }
                  }
              }
           }
        }
    }

    let sorted = new Map(Array.from(subscriptions.entries()).sort(function (firstEntry, secondEntry){
        let firstEntrySubscriptions = firstEntry[1].length;
        let secondEntrySubscriptions = secondEntry[1].length;
        let result = secondEntrySubscriptions - firstEntrySubscriptions;
        let firstSubscribeTo = 0;
        let secondSubscribeTo = 0;
        if(result == 0){
            for(let key of subscriptions.keys()){
                  if(subscriptions.get(key).includes(firstEntry[0])){
                      firstSubscribeTo +=1;
                  }
                  if(subscriptions.get(key).includes(secondEntry[0])){
                      secondSubscribeTo +=1;
                  }
            }
            result = secondSubscribeTo -firstSubscribeTo;
        }
        return result;

    }));

    let mostImportant = Array.from(sorted.keys()).shift();
    console.log(mostImportant);
    let i = 1;
    while (sorted.get(mostImportant).length > 0){
        console.log(i + '.' + ' ' + sorted.get(mostImportant).shift());
        ++i;
    }
}

main([
   'A',
   'B',
   'C',
   'D',
   'A-B',
   'B-A',
   'C-A',
   'D-A'
]);