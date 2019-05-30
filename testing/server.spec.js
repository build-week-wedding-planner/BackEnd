const request = require("supertest");

const server = require("./server");

describe("server", () => {
    it("sets the environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });


describe("server", () => {
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