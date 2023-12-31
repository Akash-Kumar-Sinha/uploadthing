// src/core.ts
import { createUploadthing, type FileRouter } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  serverImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(() => {
    console.log("upload completed");
    // res.send("Upload completed");
  }),
  messageFile: f(["image", "pdf"]).onUploadComplete(() => {
    console.log("upload completed");
    // res.send("Upload completed");
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
