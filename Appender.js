"use strict"

let LocalSearch = require("./LocalSearch");
let fs = require('fs');

class Appender {

    constructor() {
        this.lines = []
    }

    start(replication) {
        this.replication = replication;
        this.previousTime = Date.now();
    }

    end(search) {
        this.time = Date.now() - this.previousTime;
        this.lines.push(
            {
                name: search.Name,
                n: search.nrTasks,
                m: search.nrMachines, 
                replication: this.replication, 
                time: this.time,
                iterations: search.iterations, 
                valor: search.makespanMachine.time, 
                parametro: "NA" 
            }
        );
    }

    log(){
        var stream = fs.createWriteStream("log.txt");
        let lines = this.lines;
        stream.once('open', function(fd){
            for(let line of lines){
                stream.write(line.name +','+ line.n +','+ line.m +','+ line.replication +','+ line.time +','+ line.iterations +','+ line.valor +','+ line.parametro + '\n')
            }
            stream.end();
        });
    }
}

module.exports = Appender;