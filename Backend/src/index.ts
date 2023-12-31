import express, { Request, Response } from 'express';
import { createUploadthingExpressHandler } from "uploadthing/express";
import { uploadRouter } from "./core";
import "dotenv/config";
import { upload } from './server';
import cors from 'cors';
import { createUploadthing } from 'uploadthing/server';
// import { upload } from './middleware/multer';

const app = express();
const port = 3001;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.post('/api/uploadthing', upload )

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  }),
);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
