// uploadthing.tsx
import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "../../Backend/src/core";
 
export const { UploadButton, UploadDropzone , Uploader} =
  generateComponents<OurFileRouter>();