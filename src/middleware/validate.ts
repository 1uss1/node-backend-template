import { Request, Response, NextFunction, RequestHandler } from "express";
import { z } from "zod";

type Schema = z.AnyZodObject | z.ZodOptional<z.AnyZodObject>;

export function validate(schema: Schema): RequestHandler {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(request.body);
      next();
    } catch (error) {
      response.status(400).json({
        status: "error",
        error: "Bad request",
      });
    }
  };
}
