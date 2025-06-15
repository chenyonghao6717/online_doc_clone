const { Pool } = require("pg");

const pool = new Pool({
  user: "admin",
  host: "localhost", // Docker exposes PostgreSQL to host via port 5432
  database: "online-doc",
  password: "123456",
  port: 5432,
});

module.exports(pool);
