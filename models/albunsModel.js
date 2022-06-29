const connection = require('./connections');

const getAll = async ()  => {
  const query = 'SELECT * FROM albuns;';
  const [data] = await connection.execute(query);
  return data;
};

module.exports = {getAll}