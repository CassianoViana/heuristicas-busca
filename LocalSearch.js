"use strict";

class LocalSearch {

    constructor(preparator, listener){
        this.listener = listener;
        this.preparator = preparator;
        this.iterations = 0;
    }

    execute(nrMachines, nrTasks, replication) {
        this.machines = [];
        this.tasks = [];
        this.preparator.prepare(this, nrMachines, nrTasks);
        this.listener.start(replication);
        this.iterations = 0;
        this.search();
        this.listener.end(this);
    }

    search() {
        console.log("Implement in subclasses");
    }

    movementInprovesTime(movement){
        return movement.dstMachine.time + movement.task.Time < movement.srcMachine.time;
    }

    move(movement){
        movement.srcMachine.remove(movement.task);
        movement.dstMachine.add(movement.task);
    }

    findMakespanMachine(machines) {
        machines = machines || this.machines;
        return machines.reduce((a,b)=> a.time > b.time ? a : b);
    }

    get Name(){
        return "LocalSearch";
    }
}

module.exports = LocalSearch;
