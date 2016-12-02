"use strict";

let FirstImproveSearch = require("./FirstImproveSearch");
let TabuSearch = require("./TabuSearch");
let Preparator = require("./Preparator");
let Appender = require("./Appender");

let appender = new Appender();
let firstImproveSearch = new FirstImproveSearch(new Preparator(), appender);
let tabuSearch = new TabuSearch(new Preparator(), appender);
 
let searchs = [firstImproveSearch, tabuSearch];
let nrMachines = [10, 20, 50,100];
// let nrMachines = [2, 4, 8];
let expoentesR = [1.5, 2.0];
let nrExecutions = 10;

console.time("TIME");

searchs.forEach(function(search) {
    nrMachines.forEach((nrMachine)=> {
        expoentesR.forEach((expoente)=> {
            let nrTasks = Math.ceil(Math.pow(nrMachine, expoente));
            let executions = 0;
            while(executions++ < nrExecutions)
                search.execute(nrMachine, nrTasks, executions);
        });
    });
});

console.timeEnd("TIME");

appender.log();
