const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: {type: banco.Schema.Types.ObjectId, required: true, auto: true},
    titulo: {type:String, require: true},
    codEditora: {type: Number, require: true},
    resumo: {type: String, require: true},
    autores: {type: [String], required: true},
}, {
    versionKey: false
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;