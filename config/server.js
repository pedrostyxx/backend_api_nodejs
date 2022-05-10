const port = 3000
const bodyParser = require('body-parser')
const express = require('express')
const server = require()

const queryParser = require('express-query-int')
const allowCors = require('./cors')

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
server.use(queryParser());
server.use(allowCors);
server.use(express.static('public'));

server.listen(port, fuction(){
    console.log(`backend rodando em ${port}`)
})

