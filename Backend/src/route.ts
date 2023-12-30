// router.ts
import express from "express";
import { createUploadthingExpressHandler } from "uploadthing/express";
import { uploadRouter } from "./core";

const router = express.Router();

router.route("/api/uploadthing")
  .get(createUploadthingExpressHandler({ router: uploadRouter }))
  .post(createUploadthingExpressHandler({ router: uploadRouter }));

export default router;
