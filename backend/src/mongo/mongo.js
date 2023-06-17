const mongoose = require('mongoose');
const user = 'user';
const password = 'password';


const connectDB = () => {
    try {
        const dbUrl = `mongodb+srv://${user}:${password}@tcc.civo8wn.mongodb.net/?retryWrites=true&w=majority`;
    
        mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Conectado ao Mongo');
            })
            .catch((error) => {
                console.error('Erro ao conectar ao banco de dados:', error);
            });
    } catch (err) {
        console.log("Erro ao conectar ao banco:" + err)
    }
}
module.exports = connectDB;
