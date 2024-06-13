import { app } from "./app";
import { PORT } from "./constants/env";
import { SERVER_ON } from "./constants/roles";

function main() {
  app.listen(PORT, () => console.log(SERVER_ON));
}

main();
