"use strict";

let LocalSearch = require("./LocalSearch");
let Movement = require("./Movement");

class FirstImproveSearch extends LocalSearch {

    search() {
        do {
            this.iterations ++;
            this.makespanMachine = super.findMakespanMachine();
        } while (this.findTaskAndMove());
    }

    findTaskAndMove() {
        for(let i = this.makespanMachine.tasks.length - 1; i >= 0; i--){
            let task = this.makespanMachine.tasks[i];
            if(this.moveTaskToOtherMachine(task)) return true;
        }
        return false;
    }

    moveTaskToOtherMachine(taskMove){
        for(let j = 0; j < this.machines.length; j++){
            let machine = this.machines[j];
            if(machine == this.makespanMachine)
                continue;

            let fromMakespanToCurrentMachine = new Movement(taskMove, this.makespanMachine, machine);
            if(super.movementInprovesTime(fromMakespanToCurrentMachine)){
                super.move(fromMakespanToCurrentMachine)
                return true; 
            }
        }
        return false;
    }

    get Name(){
        return "monotona";
    }
}
module.exports = FirstImproveSearch;
