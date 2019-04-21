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

class TvPost1 extends Strategy {
    constructor() {
        super();
    }

    tvShow(btnNum) {
        return "TNT";
    }
}

class TvPost2 extends Strategy {
    constructor() {
        super();
    }

    tvShow(btnNum) {
        return "CTC";
    }
}

class TvPost3 extends Strategy {
    constructor() {
        super();
    }

    tvShow(btnNum) {
        return "Golos";
    }
}







module.exports = {Strategy, RemoteDevice, TvPost1, TvPost2, TvPost3};