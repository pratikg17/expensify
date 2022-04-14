import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import "dotenv/config";

const app = express();

// Mongo db connection
mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

// Setup routes
routes(app);

export default app;
