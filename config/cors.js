module.exports = fuction (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', 'GET', 'POST', 'OPTIONS', 'PUT', 'PATCH', 'PUT', 'DELETE')
    res.header('Acess-Control-Allow-Origin', '')
    next()
}