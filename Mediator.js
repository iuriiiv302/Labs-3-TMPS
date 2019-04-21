class Mediator {
    send(message, colleague){}
}

class ConcreteMediator extends Mediator {
    constructor() {
        super();
    }

    setTvClass1(tvClass1) {
        this.tvClass1 = tvClass1;
    }

    setTvClass2(tvClass2) {
        this.tvClass2 = tvClass2;
    }

    send(message, tvClass) {
        if (tvClass === this.tvClass2) {
            this.tvClass1.notify(message);
        }
        else {
            this.tvClass2.notify(message);
        }
    }
}

class TVClass {
    constructor(mediator) {
        this.mediator = mediator || 0;
    }

    send(message) {
        this.mediator.send(message, this);
    }

    notify(message){}
}

class TVClass1 extends TVClass {
    constructor(mediator) {
        super(mediator);
    }

    notify(message) {
        console.log("TV1 message is " + message);
    }
}

class TVClass2 extends TVClass {
    constructor(mediator) {
        super(mediator);
    }

    notify(message) {
        console.log("TV2 message is " + message);
    }
}




module.exports = {ConcreteMediator, TVClass, TVClass1, TVClass2};