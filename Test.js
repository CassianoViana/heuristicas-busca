"use strict"

let FirstImproveSearch = require("./FirstImproveSearch");
let TabuSearch = require("./TabuSearch");
let TestPreparator = require("./TestPreparator");
let Appender = require("./Appender");

let appender = new Appender();
let tabuSearch = new TabuSearch(new TestPreparator(), appender);
let firstImproveSearch = new FirstImproveSearch(new TestPreparator(), appender);

//let searchs = [firstImproveSearch, tabuSearch]; 
let searchs = [tabuSearch];
let nrMachines = [10];
let expoentesR = [1.5];
let nrExecutions = 1;

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
