// index.ts
import express from 'express';

import { createUploadthingExpressHandler } from "uploadthing/express";
 
import { uploadRouter } from "./core";

const cors = require('cors')
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

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
  }),
); 

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
