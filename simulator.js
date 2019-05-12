#!/usr/bin/env node

'use strict';

var ArgumentParser = require("argparse").ArgumentParser;
var parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Machines simulator',
});

parser.addArgument(
    ['-t', '--tx'],
    {
        help: "Frequencia, em milissegundos, para disparar a transição dos eventos [1000ms]",
        defaultValue: "1000",
    },
);

parser.addArgument(
    ['-u', '--host'],
    {
        help: "Endereço do host da api [127.0.0.1:3000]",
        defaultValue: "127.0.0.1:3000",
    }
)

var args = parser.parseArgs();
console.log(`Iniciando simulador com para o host ${args.host} e taxa de atualização em ${args.tx} ms`)

const axios = require('axios');
const http = axios.create({
    baseURL: `http://${args.host}`,
    timeout: 1000,
})

function randomStatus(status){
    return status[Math.floor(Math.random() * status.length)];
}

function update(){
    http.get('/status/all')
        .then(function(status) {
            http.get('/machine/all')
                .then(function (machines) {
                    machines.data.forEach(function (machine, i) {
                        let s = randomStatus(status.data);
                        machine.status = s._id;
                        console.log(`Atualizando status da maquina ${machine.name} para ${s.name}`)
                        http.put('/machine/'+machine._id, machine).catch((err) => console.log(`Não conseguiu alterar maquina ${machine._id}: ${err}`))
                    })
                }).catch( err => console.log(err));
        }).catch(err => console.log);
}

setInterval(update, args.tx);


