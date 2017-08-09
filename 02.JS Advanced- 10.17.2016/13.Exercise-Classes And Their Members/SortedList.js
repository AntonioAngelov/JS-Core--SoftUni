/**
 * Created by anton on 02-Nov-16.
 */
class SortedList{
    constructor(){
        this.list = [];
        this.size = 0;
    }

    add(element){
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size +=1;
    }

    remove(index){
        if(index >= 0 && index < this.list.length && this.list.length != 0) {
            this.list.splice(index, 1);
            this.size -= 1;
        }
    }
    get(index){
        if(index >= 0 && index < this.list.length && this.list.length != 0)
            return this.list[index];
    }
}

let list1 = new SortedList();
list1.add(1);
console.log(list1.get(0));
list1.add(5);
list1.add(6);
list1.remove(0);
console.log(list1.get(0));