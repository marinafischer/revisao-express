const albunsModel = require('../models/albunsModel');

const getAll = async  () => {
  const data = await albunsModel.getAll();
  return data;
}

module.exports = {getAll}