import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import TeamModel from '../database/models/team';
import  IServiceTeam  from '../interfaces/IServiceTeam';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('1. Teste da rota teams', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1.1. Testando o metodo get da rota teams', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/teams')

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('1.2. Testando o metodo get da rota teams por id', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/teams/5');

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

});
