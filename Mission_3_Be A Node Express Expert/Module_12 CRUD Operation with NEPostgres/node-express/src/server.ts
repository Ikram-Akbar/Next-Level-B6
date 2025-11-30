import express, { Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path"

dotenv.config({path:path.join(process.cwd(), ".env")})
const app = express();
const port = 5000;

// PostgreSQL Connection
const pool = new Pool({
  connectionString:`${process.env.connection_string}`,
});

// Initialize DB
const initDB = async () => {
  try {
    // Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Todo Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS todo (
        id SERIAL PRIMARY KEY,
        userId INT REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        status BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log("Users & Todo tables are ready!");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
};

// Call DB init
initDB();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/post", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).json({
    message: "Successfully !!",
    success: true,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
