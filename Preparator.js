"use strict";

let Task = require('./Task');
let Machine = require('./Machine');

class Preparator {

    prepare(search, nrMachines, nrTasks){
        search.machines = this.createMachines(nrMachines);
        search.tasks = this.createTasks(nrTasks);
        search.nrTasks = nrTasks;
        search.nrMachines = nrMachines;
        let firstMachine = search.machines[0];
        firstMachine.Tasks = search.tasks;
    }

    createTasks(nrTasks) {
        let tasks = [];
        for (let i = 0; i < nrTasks; i++)
            tasks.push(new Task('T' + i, this.randomTime()));
        return tasks;
    }

    createMachines(nrMachines) {
        let machines = [];
        for (let i = 0; i < nrMachines; i++)
            machines.push(new Machine('M' + i));
        return machines;
    }

    randomTime() {
        return Math.ceil(Math.random() * 100 + 1);
    }

}

module.exports = Preparator;