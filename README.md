# Labs-3-TMPS

lab3TMPS
В данной лабораторной работе я использовал шаблоны поведения: Command, Iterator, Memento, Meditor и Strategy.
У меня есть телевизор и переключаюсь на них; Я могу подключить телевизор и отключиться. Там, где телевизор подключен, его громкость увеличивается, а когда отключается, громкость == ноль. Здесь код для тв

Класс ТВ {
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
}
и для коммутатора:
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
тогда я использую это
let tv = new TV();
let connectC = new IsConnecting(tv);
let disconnectC = new IsDisconnecting(tv);
let tvSwitching = new Switch(connectC, disconnectC);

tvSwitching.connecting();
tvSwitching.disconnecting();


Итератор
Я использую Iterator для повторения всех моих телевизионных брендов, и это удивительно, потому что клиентская сторона не знает, как это работает
class NameIterator extends Iterator {
    constructor(names) {
        super();
        this.id = 0;
        this.names = names;
    }

    hasNext() {
        if(this.id < this.names.length) {
            return true;
        }
        return false;
    }

    next() {
        if (this.hasNext()) {
            return this.names[this.id++];
        }
        return null;
    }
}

Memento
Я использую память для создания некоторой копии моего состояния телевизора, и когда я хочу сделать сброс, я легко делаю это и восстанавливаю состояние моего предыдущего телевизора. Вы можете видеть, что его работы

let careTaker = new CareTaker();

careTaker.add(1, tv.compress());

tv.volume = 3;
console.log("New volume is " + tv.volume);

tv.deCompress(careTaker.get(1));
console.log("Old volume is " + tv.volume);

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
Mediator
У меня есть два телевизора, и они должны общаться. Mediator может легко помочь нам в этом случае. Этот шаблон использует 2 или более телевизоров, если это необходимо
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
 Эти телевизоры не общаются друг с другом напрямую, они общаются посредством  модели Mediator, и, если нужно изменить, мы можем сделать это простым способом.
Strategy
class Strategy {
    tvShow(btnNum){}
}

class RemoteDevice {
    constructor(strategy) {
        this.strategy = strategy;
    }

    execStrategy(btnNum) {
        return this.strategy.tvShow(btnNum);
    }
}
У меня есть алгоритм tvShow (), который должен сделать каждый TVPost. Я поставил его в Стратегии и использую в простом режиме.
