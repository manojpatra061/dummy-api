import { Request, Response } from "express";
import express from "express";
import dummyUsers from "../dummy.json";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello World! The App Is Listening On Port "${port}".`);
});

app.get("/api/test", (req: Request, res: Response) => {
  res.json({ msg: `The App Is Listening On Port 👉 ${port}`, data: dummyUsers });
});

app.listen(port, () => {
  console.log(`Dummy API listening on port "${port}"`);
});
