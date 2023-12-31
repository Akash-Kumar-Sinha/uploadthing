// FileUpload.tsx
import { UploadDropzone } from "@uploadthing/react";
import type { OurFileRouter } from "../../Backend/src/core";
import "../../node_modules/@uploadthing/react/dist/index.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "serverImage" | "messageFile";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return (
    <div>
      File Upload
      <UploadDropzone<OurFileRouter, "serverImage" | "messageFile">
        endpoint={endpoint as "serverImage" | "messageFile"}
        onClientUploadComplete={(res) => {
          console.log("onclientuploadcomplete::");
          onChange(res?.[0].url);
        }}
        onUploadError={(error: Error) => {
          console.log("error::");
          console.log(error);
        }}
        onBeforeUploadBegin={(files) => {
          console.log("onbeforeuploadbegin::");
          const renamedFiles = files.map(
            (f) => new File([f], "renamed-" + f.name, { type: f.type })
          );
          console.log(renamedFiles);
          return renamedFiles;
        }}
        onUploadBegin={(name) => {
          console.log("onUploadbegin");
          console.log("Uploading: ", name);
        }}
      />
    </div>
  );
};

export default FileUpload;
