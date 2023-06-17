const mongoose = require('mongoose');
const { Schema } = mongoose;

const quizSchema = new Schema({
    categoria: {
        type: String,
        required: true
    },
    pergunta: {
        type: String,
        required: true
    },
    opcoes: {
        type: [String],
        required: true
    },
    resposta: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;