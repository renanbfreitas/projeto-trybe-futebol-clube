import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('1. Teste da rota leaderBoard', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1.1. Testando o metodo get rota matches', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard/home');

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('1.2. Testando o metodo get rota matches', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard/away');

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('1.3. Testando o metodo get rota matches', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/leaderboard');

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

});
