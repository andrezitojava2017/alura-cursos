import mongoose from 'mongoose';

const autoSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String },
    nacionalidade: { type: String },
  },
  { versionKey: false }
);
const autorModel = mongoose.model('autor', autoSchema);

export { autorModel, autoSchema };
