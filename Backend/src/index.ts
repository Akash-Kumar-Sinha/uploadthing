import express from 'express';
import { createUploadthingExpressHandler } from "uploadthing/express";
import { uploadRouter } from "./core";
import "dotenv/config";
// import { utapi } from './server';
import cors from 'cors';

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

// app.post('/api/uploadthing', async (req, res) => {
//   try {
//     const formData = req.body.formData; // Get the form data from the client
//     console.log("formData",formData);
//     const uploadResponse = await utapi.uploadFiles(formData);
//     res.json({ success: true, uploadResponse });
//   } catch (error) {
//     console.error('Upload error:', error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
