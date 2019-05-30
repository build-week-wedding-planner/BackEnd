const request = require('supertest'); 
const server = require('./api/server');
describe('server.js', () => {
  describe('Main server Commands', () => {
    it('should return an 201 status code from the / ', async () => {
      const expectedStatusCode = 201;

      const response = await request(server).get('/');

      expect(response.status).toEqual(expectedStatusCode);
      
    });

    it('should return a JSON object saying Avengers Assemble !!', async () => {
      const expectedBody = "Avengers Assemble !!!";

      const response = await request(server).get('/');

      expect(response.body).toEqual(expectedBody);
    });

    
  });
});