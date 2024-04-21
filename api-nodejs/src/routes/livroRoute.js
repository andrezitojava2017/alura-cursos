import express from 'express';
import {
  ExcluirLivroPorId,
  atualizarLivroPorId,
  cadastrarLivro,
  listarLivroPorId,
  listarLivros,
  listarLivrosPorEditor,
} from '../controllers/livroController.js';

const livro = express.Router();

livro.get('/livros', listarLivros);
livro.get('/livros/busca', listarLivrosPorEditor);
livro.post('/livros', cadastrarLivro);
livro.get('/livros/:id', listarLivroPorId);
livro.put('/livros/:id', atualizarLivroPorId);
livro.delete('/livros/:id', ExcluirLivroPorId);

export default livro;
