/**
 * Created by anton on 05-Nov-16.
 */
function solve() {
    class PcComponent{
        constructor(manufacturer){
            if(new.target === PcComponent){
                throw new Error("Abstract class can not be instantiated!")
            }

            this.manufacturer = manufacturer;
        }
    }

    class  Keyboard extends PcComponent{
        constructor(manufacturer, responseTime){
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends PcComponent{
        constructor(manufacturer, width, height){
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends PcComponent{
        constructor(manufacturer, expectedLife ){
            super(manufacturer);
            this.expectedLife  = expectedLife ;
        }
    }

    class Computer extends PcComponent{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer){
                throw new Error("Abstract class can not be instantiated!")
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }

        get battery(){
            return this._battery;
        }

        set battery(battery){
            if(!(battery instanceof Battery)){
                throw new TypeError;
            }
            this._battery = battery;
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard(){
            return this._keyboard;
        }

        set keyboard(keyboard){
            if(!(keyboard instanceof Keyboard)){
                throw new TypeError;
            }
            this._keyboard = keyboard;
        }

        get monitor(){
            return this._monitor;
        }

        set monitor(monitor){
            if(!(monitor instanceof Monitor)){
                throw new TypeError;
            }
            this._monitor = monitor;
        }
    }

    return {Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop}

}

let classes = solve();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let keyboard = new Keyboard('Logitech',70);
let monitor = new Monitor('Benq',28,18);
let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

let computer = new Computer();