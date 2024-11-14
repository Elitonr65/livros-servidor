const Livro = require('./livro-schema');
const mongoose = require('mongoose');

const obterLivros = async () => {
    try {
        const livros = await Livro.find();
        return livros;
    } catch (error) {
        throw new Error('Erro ao obter livros:' + error.message);
    }
};

const incluir = async (livro) => {
    try {
        const novoLivro = await Livro.create(livro);
        return novoLivro;
    } catch (error) {
        throw new Error('Erro ao incluir livro:' + error.message);
    }
};

const excluir = async (codigo) => {
    try {
        const ObjectId = mongoose.Types.ObjectId;
        const livroId = new ObjectId(codigo);
        const resultado = await Livro.deleteOne({ _id: livroId });
        return resultado;
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        throw new Error('Erro ao excluir livro:' + error.message);
    }
};

module.exports = { obterLivros, incluir, excluir };