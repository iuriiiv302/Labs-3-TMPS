class Iterator {
    hasNext() {}
    next() {}
}

class IteratorContainer {
    getIterator() {}
}

class NameRepository extends IteratorContainer {
    constructor(names) {
        super();
        this.names = names;
    }

    getIterator() {
        return new NameIterator(this.names);
    }
}

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




module.exports = {Iterator, IteratorContainer, NameRepository, NameIterator};