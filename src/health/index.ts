import { RequestHandler, Router } from "express";

const get: RequestHandler = async (_, response) => {
  response.json({
    status: "ok",
  });
};

export function health() {
  const router = Router();
  router.get("/", get);
  return router;
}
