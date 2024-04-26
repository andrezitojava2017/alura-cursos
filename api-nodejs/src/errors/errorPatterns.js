const errorPatterns = (
  message = 'Erro interno do servidor',
  statusError = 500
) => {
  const error = new Error({ message, statusError });
  throw error;
};

export default errorPatterns;
