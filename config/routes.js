const express = require('express')
const port = require('./routes')

module.exports = fuction(server) {
    const protectApi = express.Router();
    server.use('/api', protectApi);

    server.use('status', (req, res) =>
        res.send(`backend is runner on port ${port}`)
})