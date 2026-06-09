import { DatabaseConnection } from "./Config/DatabaseConnection";

const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log("¿Es la misma instancia?", db1 === db2);