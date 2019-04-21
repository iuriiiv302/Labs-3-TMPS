const {IsConnecting, IsDisconnecting, TV, Switch, CareTaker} = require('./Command');
const {NameRepository} = require('./Iterator');
const {ConcreteMediator, TVClass1, TVClass2} = require('./Mediator');
const {RemoteDevice, TvPost1, TvPost2, TvPost3} = require('./Strategy');



//CommandPattern
console.log('CommandPattern');

let tv = new TV();
let connectC = new IsConnecting(tv);
let disconnectC = new IsDisconnecting(tv);
let tvSwitching = new Switch(connectC, disconnectC);

tvSwitching.connecting();
tvSwitching.disconnecting();

//memento
let careTaker = new CareTaker();

careTaker.add(1, tv.compress());

tv.volume = 3;
console.log("New volume is " + tv.volume);

tv.deCompress(careTaker.get(1));
console.log("Old volume is " + tv.volume);

//IteratorPatern
console.log(' ');
console.log('IteratorPatern');

let names = ['Samsung', 'Philips', 'Tishiba', 'LG', 'Sony'];

let nameRepository = new NameRepository(names);

for( let iterator = nameRepository.getIterator(); iterator.hasNext(); ) {
    let name = iterator.next();
    if(!iterator.hasNext()) {
        console.log(name);
    }
    else {
        console.log(name + ', ');
    }

}

//Mediator
console.log(" ");
console.log('Mediator');

let concreteMediator = new ConcreteMediator();
let channel1 = new TVClass1(concreteMediator);
let channel2 = new TVClass2(concreteMediator);

concreteMediator.setTvClass1(channel1);
concreteMediator.setTvClass2(channel2);

channel1.send("TNT");
channel2.send("Prime");

//Strategy
console.log(' ');
console.log("Strategy");

let remoteDevice = new RemoteDevice(new TvPost1());
console.log("TV is on " + remoteDevice.execStrategy(1));
remoteDevice = new RemoteDevice(new TvPost2());
console.log("TV is on " + remoteDevice.execStrategy(2));
remoteDevice = new RemoteDevice(new TvPost3());
console.log("TV is on " + remoteDevice.execStrategy(3));
