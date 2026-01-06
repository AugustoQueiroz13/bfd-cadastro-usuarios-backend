import express from 'express';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const app = express()
app.use(express.json());

const prisma = new PrismaClient();

app.post('/usuarios', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                age: req.body.age
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
});


app.get('/usuarios', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});x    


/* 
    Criar uma API de Usuário

    - Criar um usuário
    - Listar todos os usuários
    - Editar um usuário
    - Deletar um usuário


    
*/