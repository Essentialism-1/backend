const request = require("supertest");

const server = require("../api/server.js");

describe("login router", function() {
  it("should run tests", function() {
    expect(true).toBe(true);
  });

  describe("POST /api/login/register", function() {
    it("should return 201", function() {
      return request(server)
        .post("/api/auth/login")
        .send({
          email: "<new email>",
          password: "<some password>"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
