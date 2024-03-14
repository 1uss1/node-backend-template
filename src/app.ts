import express from "express";
import helmet from "helmet";
import compression from "compression";

import { health } from "./health";
import { api } from "./api";

export function create(): express.Application {
  const app = express();

  // middleware
  app.use(helmet());
  app.use(compression());
  app.use(express.json());

  // endpoints
  app.use("/health", health());
  app.use("/api", api());

  return app;
}
