const request = require("supertest");
const db = require('./database/dbConfig')
const server = require("./api/server");

describe("server", () => {
  beforeEach(async() => {
    await db("events").del()
  })
  
    it("sets the environment to testing", () => {
      expect(process.env.ENVIRONMENT).toBe("testing");
    });
    it("returns 200 ok", () => {
      return request(server)
        .get("/events")
        .expect(200);
    });
    it("should return JSON", async () => {
      const res = await request(server).get("/events");
      expect(res.type).toBe("application/json");
    });
  });



