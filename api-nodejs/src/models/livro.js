import mongoose from 'mongoose';
import { autoSchema } from './autor.js';

const livroSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autoSchema,
  },
  { versionKey: false }
);

/**
 * livros representa a tabela no banco de dados
 * livroSchema representa a estrutura da tabela
 */
const livroModel = mongoose.model('livros', livroSchema);

export default livroModel;
