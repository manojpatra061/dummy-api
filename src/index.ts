import { Request, Response } from "express";
import express from "express";
import dummyUsers from "../dummy.json";

const app = express();
console.log("process.env.PORT = ", process.env.PORT);
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/test", (req: Request, res: Response) => {
  res.json(dummyUsers);
});

app.listen(port, () => {
  console.log(`Dummy API listening on port "${port}"`);
});
