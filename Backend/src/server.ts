// src/server.ts
import fs  from "fs";
import { UTApi } from "uploadthing/server";

const utapi = new UTApi({
    fetch: globalThis.fetch, // subset of standard fetch required for uploadthing
    apiKey: process.env.UPLOADTHING_SECRET// Use your actual environment variable name
  });

export const uploadthingutpai = async(location: string)=>{
  try {
    if(!location) return Error("location not found");
    const response = await utapi.uploadFiles(location)
    console.log(response.data);
    return response
  } catch (error) {
    fs.unlinkSync(location);
  }
}