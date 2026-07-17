const request = require("supertest");
const app = require("../src/app");

describe("API Endpoints", () => {
  describe("GET /", () => {
    it("should return welcome message", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Welcome to mcpmark-cicd API");
      expect(response.body.version).toBe("1.0.0");
    });
  });

  describe("GET /health", () => {
    it("should return health status", async () => {
      const response = await request(app).get("/health");
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBe("healthy");
      expect(response.body.uptime).toBeDefined();
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe("GET /api/status", () => {
    it("should return API status", async () => {
      const response = await request(app).get("/api/status");
      expect(response.statusCode).toBe(200);
      expect(response.body.status).toBe("ok");
      expect(response.body.service).toBe("mcpmark-cicd");
    });
  });
});
