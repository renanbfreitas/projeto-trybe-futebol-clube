import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('1. Teste da rota login', () => {
  /**
   * Exemplo do uso de stubs com tipos
   */

  let chaiHttpResponse: Response;

  afterEach(()=>{
    sinon.restore();
  })

  it('1.1. Testando o metodo post rota login email vazio', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "",
        "password": "stringTeste"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(400);
  });

  it('1.2. Testando o metodo post rota login usuario invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "stringTeste@gmail.com",
        "password": "stringTeste"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('1.3. Testando o metodo post rota login email invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "stringTeste",
        "password": "stringTeste"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('1.4. Testando o metodo post rota login password invalido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "stringTeste@gmail.com",
        "password": "str"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('1.5. Testando o metodo post rota login user valido', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "secret_admin"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('1.6. Testando o metodo post rota login user invalido 2', async () => {
    chaiHttpResponse = await chai
       .request(app).post('/login').send({
        "email": "admin@admin.com",
        "password": "secret_admi"
      });

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('1.7. Testando o metodo get rota login/role', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/login/role').set('authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2Nzc1OTA1NDF9.QXwSdQYZKCYzLWS7njCAU4Xf46KhRsm3hbCVVVsyNqI');

    expect(chaiHttpResponse.status).to.be.deep.equal(200);
  });

  it('1.8. Testando o metodo get rota login/role', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/login/role').set('authorization', 'eyJhbGciOiJII1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsInBhc3N3b3JkIjoiJDJhJDA4JHhpLkh4azFjekFPMG5aUi4uQjM5M3UxMGFFRDBSUTFOM1BBRVhRN0h4dExqS1BFWkJ1LlBXIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE2Nzc1OTA1NDF9.QXwSdQYZKCYzLWS7njCAU4Xf46KhRsm3hbCVVVsyNqI');

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

  it('1.9. Testando o metodo get rota login/role', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/login/role')

    expect(chaiHttpResponse.status).to.be.deep.equal(401);
  });

});
