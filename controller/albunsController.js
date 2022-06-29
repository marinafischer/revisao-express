const albunsService = require('../services/albunsService');

const getAll = async (req, res, next) => {
  try {
    const data = await albunsService.getAll();
    res.status(200).json(data);
  } catch (error) {
    next(error)
  }
}

module.exports = {getAll}
