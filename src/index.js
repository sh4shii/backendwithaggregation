import express from "express";
import connectDb from "./db/dbConnection.js";
import dotenv from 'dotenv'
dotenv.config();

connectDb();

const app = express();

const port = process.env.PORT || 8000;

// Middleware to parse JSON in the request body
app.use(express.json())



// routes

app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
