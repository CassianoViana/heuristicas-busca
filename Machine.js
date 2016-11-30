"use strict"

class Machine {

    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.time = 0;
    }

    set Tasks(tasks){
        this.tasks = tasks;
        this.time = 0;
        this.tasks.forEach(t => this.time += t.Time);
    }

    remove(task) {
        this.time -= task.Time;
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    add(task){
        this.time += task.Time;
        this.tasks.push(task);
    }
    
    toString(){
        return this.name + " = Time: " + this.time + ", tasks: " + this.tasks.map(t=>t.Time);
    }
}

module.exports = Machine