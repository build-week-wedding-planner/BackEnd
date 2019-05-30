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

  describe("POST /events", () => {
    let data = {};
    it("respond with 201 created", async () => {
      await request(server)
        .post("/events")
        .send(data)
        .set("Accept", "application/json")
        expect(201);
    });
  });
        
  
  describe("POST /events", () => {
    let data = {};
    it("respond with 500 not created", () => {
      request(server)
        .post("/events")
        .send(data)
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(500);
    });
  });
  it("validate that the required fields are included inside the body", () => {
    request(server)
      .post("/events")
      .send({ title: "" })
      .set("Content-Type", "application/json")
      .expect(422);
  });
  

