import express from "express";
import dbpool from "./db.js";
import cors from "cors";

const app = express();

app.use(
  cors({
  origin: "http://localhost:3000",
}));

app.use(express.json());

app.get("/modules", async (req, res) => {
  const [results] = await dbpool.query("SELECT * FROM module");
  return res.json({
    success: true,
    data: results,
  });
});


app.post("/modules", async (req, res) => {

  const data= req.body;
  const moduleName = data.moduleName;
  const moduleCode = data.moduleCode;
    const moduleTrainer = data.moduleTrainer;
  const moduleDescription = data.moduleDescription;
  const updateAt = Date.now();
 const  createAt = Date.now();
   
 
  const result = await dbpool.query(
    "INSERT INTO module (moduleName, moduleCode, moduleDescription, moduleTrainer, createAt, updateAt) VALUES (?, ?, ?, ?, ?, ?)" ,
    [moduleName, moduleCode, moduleDescription, moduleTrainer, createAt, updateAt],
  );

console.log(result);

  return res.json({
    success: true,
    message: "New Module inserted successfully!",
  });
});




app.listen(5000, () => {
  console.log(`Server Start successfully at http://localhost:5000`);
});