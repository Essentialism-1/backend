const request = require("supertest");

const server = require("../api/server.js");

describe("authentication router", function() {
  it("should run tests", function() {
    expect(true).toBe(true);
  });

  describe("POST /api/auth/register", function() {
    it("should return 201", function() {
      return request(server)
        .post("/api/auth/register")
        .send({
          email: "<new email 2>",
          password: "<some password>"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
