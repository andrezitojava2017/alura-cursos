import mongoose from 'mongoose';

export const errorBase = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    res
      .status(400)
      .json({ message: 'Um ou mais parametros são invalidos', type: 'Error' });
  } else {
    res
      .status(500)
      .json({ message: 'Ocorreu um erro interno no servidor', type: 'Error' });
  }
};
