import express from "express";
import dbpool from "./db.js";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));

app.get("/", async (req, res) => {
  return res.json({
    success: true,
    message: "Express app API Start successfully!",
  });
});

app.get("/module", async (req, res) => {
  try {
    const result = await dbpool.query("SELECT * FROM module");

    return res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log(`Server Start successfully at http://localhost:5000`);
});