// core.ts
import { createUploadthing, type FileRouter } from "uploadthing/express";
 
const f = createUploadthing();
 
export const uploadRouter = {
  serverImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(() => {}),
  messageFile: f(["image", "pdf"])
  .onUploadComplete(() => {}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof uploadRouter;