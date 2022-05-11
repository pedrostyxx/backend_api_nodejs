const res = require('express/lib/response')
const _ = require('lodash')
const Register = require('./register')

Register.methods(['get', 'post', 'put', 'delete'])
Register.updateOptions({ new: true, runValidators: true })

Register.after('post', senderrorsOrNext).after('put', senderrorsOrNext)
Register.before('post', register).before('put', Register)

function senderrorsOrNext(req, res, next) {
    const bundle = req.locals.bundle
    if (bundle.errors) {
        var errors = parseerrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next()
    }
}

function parseerrors(nodeRestfulerrors) {
    const errors = []
    _.forIn(nodeRestfulerrors, error => error.push(error.message))
    return errors
}

const senderrorsFromDB = (res, dbErrors) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}

function register(req, res, next){
    const fullName = req.body.fullName || ''
    const mail = req.body.mail || ''
    const phone = req.body.phone || ''
    const address = req.body.address || ''
    const number = req.body.number || ''
    const complement = req.body.complement || ''

    const newBody = new Register({
        fullName,
        mail,
        phone,
        address,
        number,
        complement,
})

    newBody.save(err =>{
        if(err){
            return senderrorsFromDB(res, err)
        }else {
            res.status(201).json(newBody)
        }
})
}

module.exports = Register