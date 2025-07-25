import { Request, Response } from "express";
import express from "express";
import dummyUsers from "../dummy.json";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/test", (req: Request, res: Response) => {
  res.json(dummyUsers);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
