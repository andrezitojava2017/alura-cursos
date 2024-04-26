import express from 'express';
import {
  atualizaAutorPorId,
  excluirAutorPorId,
  listaAutorPorId,
  listaAutores,
  novoAutor,
} from '../controllers/autorController.js';

const autor = express.Router();

autor.post('/autor', novoAutor);
autor.get('/autor', listaAutores);
autor.get('/autor/:id', listaAutorPorId);
autor.put('/autor/:id', atualizaAutorPorId);
autor.delete('/autor/:id', excluirAutorPorId);

export default autor;
