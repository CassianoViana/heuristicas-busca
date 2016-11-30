"use strict"

class Task {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }

    get Time() {
        return this.time;
    }
}

module.exports = Task