const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const livroDAO = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    try {
        const livros = await livroDAO.obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter livros', error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        if (livro._id) {
            delete livro._id;
        }
        const novoLivro = await livroDAO.incluir(livro);
        res.status(201).json({ message: 'Livro incluido com sucesso', livro: novoLivro });
    } catch (error) {
        res.status(500).json({message: 'Erro ao incluir livro', error: error.message});
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        const ObjectId = mongoose.Types.ObjectId;
        if (!ObjectId.isValid(codigo)) {
            return res.status(400).json({ message: 'Código inválido' });
        }
        const resultado = await livroDAO.excluir(codigo);
        if (resultado.deletedCount === 0) {
            return res.status(404).json({message: 'Livro não encontrado'});
        }
        res.status(200).json({message: 'Livro excluido com sucesso'});
    } catch (error) {
        console.error('Erro ao excluir livro:', error);
        res.status(500).json({message: 'Erro ao excluir livro', error: error.message});
    }
});

module.exports = router;