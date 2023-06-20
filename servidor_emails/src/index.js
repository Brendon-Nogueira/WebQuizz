const express = require('express')
const app = express()
const nodemailer = require('nodemailer')



app.get('/', (req, res) =>{
    console.log('Hello world')
})

app.get('/send-email', (req, res) => {

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure : true,
        auth: { 
            user : 'contatowebquizz@gmail.com', 
            pass: 'emyjymaitfznqczi'
        }
    })

    transport.sendMail({
        from : 'Contato Web Quizz <contatowebquizz@gmail.com>',
        to: 'eduardofariacaetano100@gmail.com, contatowebquizz@gmail.com',
        replyTo: 'contatowebquizz@gmail.com',
        subject: 'Seja bem vindo ao Web Quizz!',
        html: ' <h1>Web Quiz</h1> <p>Olá,</p><p>Seja bem-vindo(a) ao Web Quiz! Estamos felizes em tê-lo(a) como parte da nossa comunidade. Esperamos que você se divirta respondendo aos quizzes e aprenda bastante.</p> <p>Qualquer dúvida ou sugestão, não hesite em entrar em contato conosco.</p> <p>Divirta-se!</p>',
        text: 'Olá seja bem vindo ao WebQuizz'
    
    })
    .then( data => {
        res.send(data)
        //transport.close()
    })
    .catch(err => {
        res.send(err)
        //transport.close()
    })

})
const port = 3001
app.listen(port, () => console.log(`Server up on port: http://localhost:${port}`))



