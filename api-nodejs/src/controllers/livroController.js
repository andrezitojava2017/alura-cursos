import { autorModel } from '../models/autor.js';
import livroModel from '../models/livro.js';

export const listarLivros = async (req, res) => {
  try {
    const livros = await livroModel.find({});
    res.status(200).json(livros);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const listarLivroPorId = async (req, res) => {
  try {
    const id = req.params.id;

    const livroLocalizado = await livroModel.findById(id);

    res.status(200).json(livroLocalizado);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const atualizarLivroPorId = async (req, res) => {
  try {
    const id = req.params.id;

    await livroModel.findByIdAndUpdate(id, req.body);

    res.status(200).json({ message: 'Livro atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const ExcluirLivroPorId = async (req, res) => {
  try {
    const id = req.params.id;

    await livroModel.findByIdAndDelete(id);

    res.status(200).json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const cadastrarLivro = async (req, res) => {
  const novoLivro = req.body;

  try {
    // recupera os dados do autor
    const autorEncontrato = await autorModel.findById(novoLivro.autor);

    // cria objeto com todos os dados do schema livroModel
    const livroCompleto = { ...novoLivro, autor: { ...autorEncontrato._doc } };

    const livro = await livroModel.create(livroCompleto);

    res.status(200).json(livro);
  } catch (error) {
    res.status(500).json({ message: `${error.message}` });
  }
};

export const listarLivrosPorEditor = async (req, res) => {
  try {
    const paramEditora = req.query.editora;
    const livro = await livroModel.find({ editora: paramEditora });

    res.status(200).json({ message: 'Busca realizada com sucesso', livro });
  } catch (error) {
    res.status(500).json({
      message: 'Não foi possivel recuperar os livros da editora selecionada',
    });
  }
};
