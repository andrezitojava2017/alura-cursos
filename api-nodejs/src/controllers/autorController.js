import { autorModel } from '../models/autor.js';

export const novoAutor = async (req, res, next) => {
  try {
    const autor = await autorModel.create(req.body);
    res.status(200).json({ message: 'Autor cadastrado com sucesso', autor });
  } catch (error) {
    next(error);
  }
};

export const listaAutores = async (req, res, next) => {
  try {
    const autores = await autorModel.find();
    res.status(200).json({ message: 'Lista de autores', autores });
  } catch (error) {
    next(error);
  }
};

export const listaAutorPorId = async (req, res, next) => {
  try {
    const id = req.params.id;
    const autores = await autorModel.findById(id);
    res.status(200).json({ message: 'Autor encontrado', autores });
  } catch (error) {
    next(error);
  }
};

export const atualizaAutorPorId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await autorModel.findByIdAndUpdate(id, req.body);
    res.status(200).json({ message: 'Autor atualizado com sucesso' });
  } catch (error) {
    next(error);
  }
};

export const excluirAutorPorId = async (req, res, next) => {
  try {
    const id = req.params.id;
    await autorModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Autor Apagado com sucesso' });
  } catch (error) {
    next(error);
  }
};
