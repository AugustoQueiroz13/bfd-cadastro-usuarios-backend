import express from 'express';

const app = express()
app.use(express.json());

const users = []

app.post('/usuarios', (req, res) => {

    users.push(req.body)

    res.status(201).json(req.body)
})

app.get('/usuarios', (req, res) => {
    res.status(200).json(users)
})

app.listen(3000)


/* 
    Criar uma API de Usuário

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário


    Usuario MongoDB:
    Usuário: augusto
    Senha: kKIhSLCv1eANpDq3
*/