import { config } from "dotenv";
config();
import { create } from "./app";

const port = process.env.PORT || 3000;

create().listen(port, () => {
  console.info("Running server in port:", port);
});
