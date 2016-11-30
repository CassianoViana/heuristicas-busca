"use strict"

let LocalSearch = require("./LocalSearch");
let TabuList = require("./TabuList");
let Movement = require("./Movement");

class TabuSearch extends LocalSearch {

    constructor(preparator, listener) {
        super(preparator, listener);
        this.tabuList = new TabuList(this);
        this.iterations = 0;
    }

    search() {
        this.iterationsNoImprove = 0;
        do {
            this.iterations ++;
            this.tabuList.update();
            this.makespanMachine = super.findMakespanMachine();
            let minTimeTask = this.findMinTimeTaskNotInTabuList();
            if(minTimeTask){
                
                let dstMachine = this.findDstMachineTo(minTimeTask);
                if(!dstMachine) {
                    this.iterationsNoImprove++;
                } else {
                    this.iterationsNoImprove = 0;
                    
                    let fromMakespanToDst = new Movement(minTimeTask, this.makespanMachine, dstMachine);
                    this.move(fromMakespanToDst);
                    this.tabuList.add(minTimeTask);
                }
            }
        } while (this.iterationsNoImprove < 1000);
    }

    findMinTimeTaskNotInTabuList(){
        let notInTabuList = task=>this.tabuList.tasks.indexOf(task) == -1;
        let tasks = this.makespanMachine.tasks.filter(notInTabuList);
        let minTimeTask = (ta, tb) => ta.Time < tb.Time ? ta : tb;
        let task = tasks.length && tasks.reduce(minTimeTask);
        return task;
    }

    findDstMachineTo(task){
        for(let machine of this.machines){
            if( machine == this.makespanMachine ) continue;
            if(machine.time + task.Time < this.makespanMachine.time){
                return machine;
            }
        }
    }

    moveTasks() {
        for (let i = this.makespanMachine.tasks.length - 1; i >= 0; i--) {
            let task = this.makespanMachine.tasks[i];
            if(this.moveTaskToOtherMachine(task)){
                this.tabuList.add
            }
        }
        return false;
    }

    get Name() {
        return "tabu";
    }
}

module.exports = TabuSearch;