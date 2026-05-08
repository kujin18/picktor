import { Pool } from "pg";

export const db = new Pool({
  user: "picktor",
  host: "localhost",
  database: "picktor",
  password: "1234",
  port: 5432,
});