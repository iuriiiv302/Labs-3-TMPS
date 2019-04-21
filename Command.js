class Command {
    execute(){}
}

class IsConnecting extends Command {
    constructor(tv) {
        super();
        this.tv = tv;
    }

    execute() {
        this.tv.connect();
    }
}

class IsDisconnecting extends Command {
    constructor(tv) {
        super();
        this.tv = tv;
    }

    execute() {
        this.tv.disconnect();
    }
}

class Switch {
    constructor(connect, disconnect) {
        this.connect = connect;
        this.disconnect = disconnect;
    }

    connecting() {
        this.connect.execute();
    }

    disconnecting() {
        this.disconnect.execute();
    }
}

class TV {
    constructor(volume) {
        this.volume = volume || 0;
    }

    connect() {
        this.volume += 1;
        console.log('TV is connected!');
        console.log('Volume is ' + this.volume);
    }

    disconnect() {
        this.volume -= 1;
        console.log('TV is disconnected!');
        console.log('Volume is ' + this.volume);
    }

    //Memento
    compress() {
        let memento = JSON.stringify(this);
        return memento;
    }

    deCompress(memento) {
        let mem = JSON.parse(memento);
        this.volume = mem.volume;
    }
}

//Memento
class CareTaker {
    constructor() {
        this.mementos = {};
    }

    add(key, memento) {
        this.mementos[key] = memento;
    }

    get(key) {
        return this.mementos[key];
    }
}



module.exports = {Command, IsConnecting, IsDisconnecting, TV, Switch, CareTaker};