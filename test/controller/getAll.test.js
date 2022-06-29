const albunsService = require('../../services/albunsService');
const albunsController = require('../../controller/albunsController');
const {expect} = require('chai')
const sinon = require('sinon');

describe('Consulta os albuns no BD e retorna todos os dados encontrados', ()=>{
  const res = {};
  const req = {};
  const next = () => {};
  const resolve = [
    {
      "id_album": 1,
      "album_name": "Envious",
      "id_artist": 1,
      "year_release": 1990
    }
  ]
  beforeEach(()=>{
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(albunsService, 'getAll').resolves(resolve);
  });
  afterEach(()=>{
    albunsService.getAll.restore();
  });
  it('é chamado o método "status" com o código 200', async()=>{
    await albunsController.getAll(req, res, next);
    expect(res.status.calledWith(201)).to.be.equal(true)
  });
  it('é chamado o método "json" passando um array', async()=>{
    await albunsController.getAll(req, res, next);
    expect(res.json.calledWith(sinon.match.array)).to.be.equal(true)
  })
})