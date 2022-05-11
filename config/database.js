const mongoose = require('mongoose')
const args = require('args-parser')(process.argv)
mongoose.Promise = require('bluebird')

if(args.production)
    module.exports = mongoose.connect('mongodb+srv://admin:992455134@cluster0.ffegy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
else
    module.exports = mongoose.connect('mongodb+srv://admin:992455134@cluster0.ffegy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    mongoose.Error.message.general.required = "O campo '{PATH}' é obrigatório."
    mongoose.Error.message.Number.min = "O '{PATH}' informado é menor que o limite do minimo de '{MIN}'."
    mongoose.Error.message.general.max = "O '{PATH}' informado é maior que o limite do máximo de '{MAX}'."
    mongoose.Error.message.general.max = "O '{VALUE}' não é valido para o campo '{PATH}'."