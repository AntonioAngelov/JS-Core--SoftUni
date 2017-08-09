/**
 * Created by anton on 27-Oct-16.
 */
function listProcesor(listData) {
    let commandProcessor = (function () {
        let list = [];
        return {
            add: (str) => list.push(str),
            remove: (str) => list = list.filter(x => x != str),
            print: () => console.log(list)
        }
    })();

    for(let command of listData){
        let [cmdName, argument] = command.split(' ');
        commandProcessor[cmdName](argument);
    }
}

listProcesor(['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print']);