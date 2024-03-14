import { RequestHandler, Router } from "express";
import { z } from "zod";
import { validate } from "../../../middleware/validate";

const RequestBodySchema = z.object({
  message: z.string(),
});

const validatePostBody = validate(RequestBodySchema);

const post: RequestHandler = async (_, response) => {
  response.status(200).json({ status: "ok", message: "response from HTTP POST: /endpoint" });
};

const get: RequestHandler = async (_, response) => {
  response.status(200).json({ status: "ok", message: "response from HTTP GET: /endpoint" });
};

export function endpoint() {
  const router = Router();
  router.route("/").get(get).post(validatePostBody, post);
  return router;
}
