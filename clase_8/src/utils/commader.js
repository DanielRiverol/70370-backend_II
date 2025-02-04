import { Command } from "commander";
const program = new Command();
program
  .option("--port, -p <port>", "Puerto del servidor")
  .option("--mode, -m <mode>", "entorno del programa")
  .parse();

export default program;
