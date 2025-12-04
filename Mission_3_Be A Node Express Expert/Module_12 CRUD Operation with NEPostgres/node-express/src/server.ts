import express, { NextFunction, Request, Response } from "express";
import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
const app = express();
const port = 5000;

// PostgreSQL Connection
const pool = new Pool({
  connectionString: `${process.env.cntionStr}`,
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

//custom middleware :
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `\x1b[36m[${new Date().toISOString()}]\x1b[0m \x1b[32m${
      req.method
    }\x1b[0m - Path: ${req.path}`
  );
  next();
};

// Routes
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/post", (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).json({
    message: "Successfully !!",
    success: true,
  });
});

// USERS CRUD

//POST API :
app.post("/api/users", async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }
    const result = await pool.query(
      `INSERT INTO users(name, email) VALUES($1, $2) RETURNING *`,
      [name, email]
    );
    res.status(201).json({
      success: true,
      message: "data inserted successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//GET ALL USERS
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json({
      message: "Retrieved Users successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
      details: err,
    });
  }
});
//GET SPECIFIC USER
app.get("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { rows } = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
      });
    }

    return res.status(200).json({
      message: "Successfully Fetch User",
      success: true,
      data: rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//UPDATE USER BY ID
app.put("/api/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "name and email are required",
      });
    }

    // Update Query with updated_at auto update
    const query = `
      UPDATE users 
      SET name=$1, email=$2, updated_at=NOW()
      WHERE id=$3
      RETURNING *;
    `;

    const values = [name, email, id];
    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: rows[0],
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//DELETE API
app.delete("/api/users/:id", async (req: Request, res: Response) => {
  try {
    // Correct ID
    const id = req.params.id;

    // Check user exists
    const check_user = await pool.query(`SELECT * FROM users WHERE id=$1`, [
      id,
    ]);

    if (check_user.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Delete user
    await pool.query(`DELETE FROM users WHERE id=$1`, [id]);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//NOT FOUND Route
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "Not Found",
    path: req.path,
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
