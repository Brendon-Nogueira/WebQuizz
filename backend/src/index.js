const connectDB = require('./mongo/mongo');
const express = require('express');
const router = require('./router/router');
const cors = require('cors');

const app = express()

app.use(cors());

app.use(express.json());
app.use('/quiz', router);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

try {
    connectDB()
} catch (err) {
    console.log('Erro ao conectar ao Mongo no erro ' + err)
}

const port = 8087
app.listen(port, () => console.log(`Server up on port: http://localhost:${port}/quiz`))