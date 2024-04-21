import { autorModel } from '../models/autor.js';

export const novoAutor = async (req, res) => {
  try {
    const autor = await autorModel.create(req.body);
    res.status(200).json({ message: 'Autor cadastrado com sucesso', autor });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno na gravação' });
  }
};

export const listaAutores = async (req, res) => {
  try {
    const autores = await autorModel.find();
    res.status(200).json({ message: 'Lista de autores', autores });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno na busca de autores' });
  }
};

export const atualizaAutorPorId = async (req, res) => {
  try {
    const id = req.params.id;
    await autorModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: 'Autor atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno na atualização de autores' });
  }
};

export const excluirAutorPorId = async (req, res) => {
  try {
    const id = req.params.id;
    await autorModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Autor Apagado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro interno na exclusão de autores' });
  }
};
