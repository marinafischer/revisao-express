const errorMiddleware = (erro, req, res, next) => {
  res.status(400).send('deu ruim aqui')
};

module.exports = errorMiddleware;