// src/server.ts
import { Request, Response } from "express";
import fs from "fs";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi({
  fetch: globalThis.fetch, // subset of standard fetch required for uploadthing
  apiKey: process.env.UPLOADTHING_SECRET, // Use your actual environment variable name
});

type ContentDisposition = "inline" | "attachment";

async function uploadFiles(
  files: File[] | Buffer[],
  metadata: Record<string, any>,
  contentDisposition: ContentDisposition
) {
  const response = await utapi.uploadFiles(files, {
    metadata,
    contentDisposition,
  });
}

export const upload = async (req: Request, res: Response) => {
  try {
    const { files, metadata, contentDisposition } = req.body;

    const response = await utapi.uploadFiles(files, {
      metadata,
      contentDisposition,
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
