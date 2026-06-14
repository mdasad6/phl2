import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import { Pool } from "pg";

const app: Application = express();
const port = 3000;

app.use(express.json()); //middleware json data request accept
// app.use(express.text()); //middleware text data request accept
// app.use(express.urlencoded({ extended: true }));

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_z0L7IyQBhMlW@ep-icy-heart-adviyb8z.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require",
});

const initDB = async () => {
  try {
    await pool.query(`
      
      CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(20),
      email VARCHAR(20) UNIQUE NOT NULL,
      password VARCHAR(20) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      age INT,

      created_at TIMESTAMP DEFAULT NOW() ,
      updated_at TIMESTAMP DEFAULT NOW()
      )

      `);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.log(error);
  }
};

initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/user", async (req: Request, res: Response) => {
  const { name, email, password, age } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name,email,password,age) VALUES($1,$2,$3,$4) RETURNING *`,
      [name, email, password, age],
    );
    res.status(201).json({
      message: "User Created Successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
      error,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
