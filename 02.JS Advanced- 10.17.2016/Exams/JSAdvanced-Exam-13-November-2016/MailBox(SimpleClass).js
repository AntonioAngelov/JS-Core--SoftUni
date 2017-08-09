/**
 * Created by anton on 17-Dec-16.
 */
class MailBox {
constructor() {
    this.messages = [];
}

addMessage(subject, text){
    this.messages.push({subject, text});
    return this;
}

get messageCount() {
    return this.messages.length;
}

deleteAllMessages(){
    this.messages = [];
}

findBySubject(substr){
    let filteredMessages = this.messages.filter(x => x.subject.includes(substr));

    return filteredMessages;
}

toString(){
    if(this.messages.length == 0){
        return " * (empty mailbox)";
    }
    else{
        let fullInfo = "";
        for(let message of this.messages){
            fullInfo += ` * [${message.subject}] ${message.text}\n`
        }
        return fullInfo;
    }
}

}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());


