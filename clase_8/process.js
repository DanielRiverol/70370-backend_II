// console.log(process.version);
// console.log(process.arch);
// console.log(process.platform);
// console.log(process.cwd());

// console.log(process.argv.slice(2))
// option("bandera", "Descript", "Valor por defecto")
import { Command } from "commander";
const program = new Command();
program
  .option("--port <port>", "Puerto de la app", 4500)
  .option("--mode, -m <mode>", "Entorno de la app", "development")
  .option("--help, -h <help>", "Ayuda", "ESTA ES LA AYUDA DE LA APLICACION");

program.parse();

console.log("Opciones:", program.opts());
