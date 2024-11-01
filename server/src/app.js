const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planet.router");

const app = express();

// Using CORS to allow requests from localhost:3000 (your frontend)
app.use(cors({
    origin: "http://localhost:3000",
}));

// Middleware to parse JSON requests
app.use(express.json());

// Mount planetsRouter on the `/api/planets` base path
app.use("/api/planets", planetsRouter);

module.exports = app;
