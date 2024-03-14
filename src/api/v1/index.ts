import { Router } from "express";

import { endpoint } from "./endpoint";

export function v1() {
  const router = Router();
  router.use("/endpoint", endpoint());
  return router;
}
