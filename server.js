import express from "express";
import { join, resolve } from "path";

const app = express();
const __dirname = resolve()

console.log(join(__dirname, "dist", "index.html"));

app.use(express.static(join(__dirname, "dist")));
app.get("*any", (_, res) => res.sendFile(join(__dirname, "dist", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("🚀 Server ready"));
