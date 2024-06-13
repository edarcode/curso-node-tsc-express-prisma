import { app } from "./app";
import { PORT } from "./constants/env";
import { SERVER_ON } from "./constants/roles";
import { connDb } from "./db/connDb";

function main() {
  connDb();
  app.listen(PORT, () => console.log(SERVER_ON));
}

main();
