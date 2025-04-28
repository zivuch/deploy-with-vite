// const express = require("express");
// const cors = require("cors");
// const path = require("path");

import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on port ${process.env.PORT || 3001}`);
});

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});
