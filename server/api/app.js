import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Mongo db connection
mongoose.connect("mongodb://localhost:27017/expensedb");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Setup routes
routes(app);

export default app;
