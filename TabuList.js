"use strict";

class TabuList {

    constructor(search){
        this.search = search;
        this.tasks = [];
    }

    add(task){
        task.iterations = this.calcNrIterations();
        this.tasks.push(task);
    }

    remove(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    }

    update(){
        for(let task of this.tasks){
            task.iterations--;
            if(task.iterations == 0){
                this.remove(task);
            }
        }
    }

    calcNrIterations(){
        let nrTasks = this.search.nrTasks;
        let param = Math.ceil((Math.random() + 0.000001) * 9) / 100;
        this.search.parametro = param;
        let nrIterations =  param * nrTasks;
        return  Math.ceil( nrIterations );
    }
}
module.exports = TabuList;