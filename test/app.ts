import { create } from "../src/app";
import request from "supertest";

const app = create();

describe("tests", () => {
  test("health check", async () => {
    const response = await request(app).get("/health");
    expect(response.body).toEqual({ status: "ok" });
  });
});
