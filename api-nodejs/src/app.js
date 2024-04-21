import express from 'express';
import conectDataBase from './config/mongoConect.js';
import livro from './routes/livroRoute.js';
import autor from './routes/autorRoute.js';

const app = express();
app.use(express.json());

app.use(livro);
app.use(autor);

const conect = await conectDataBase();

conect.on('error', (erro) => {
  console.error('Erro de conexao', erro);
});
conect.once('open', () => {
  console.log('Conexao realizada com sucesso');
});

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Bem vindo a Alura cursos' });
});

export default app;
