const mongoose = require('mongoose');

const banco = mongoose;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.connect('mongodb+srv://elitonr65:90190611@cluster0.x6wkh.mongodb.net/livraria', options)
    .then(() => {
        console.log('Conectado ao MongoDB!');
    })
    .catch((err) => {
        console.log('Erro ao se conectar ao MongoDB:', err);
    });

module.exports = banco;

