/**
 * Created by anton on 27-Oct-16.
 */
function commandProcesor(commands) {
    let commandPr = (function () {
        let text = "";
        return {
            append: (str) => text = text + str,
            removeStart: (n) => text = text.slice(n),
            removeEnd: (k) => text = text.slice(0 , text.length - k),
            print: () => console.log(text)
        }
    })();

    for(let command of commands){
        let [cmndName, argument] = command.split(' ');
        commandPr[cmndName](argument);
    }
}

commandProcesor(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
);