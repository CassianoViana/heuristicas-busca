"use strict"

let Preparator = require("./Preparator");
let Task = require('./Task');
let Machine = require('./Machine');

class TestPreparator extends Preparator {

    prepare(search){
        search.machines = this.createMachines(4);
        search.tasks = this.createTasks([3,5,2,1]);
        search.nrTasks = search.machines.length;
        search.nrMachines = search.tasks.length;
        let firstMachine = search.machines[0];
        firstMachine.Tasks = search.tasks;
    }

    createTasks(values) {
        let tasks = [];
        values.forEach((v, i)=>tasks.push(new Task('T' + i, v)))
        return tasks;
    }

    createMachines(nrMachines) {
        let machines = [];
        for (let i = 0; i < nrMachines; i++)
            machines.push(new Machine('M' + i));
        return machines;
    }    
}

module.exports = TestPreparator;