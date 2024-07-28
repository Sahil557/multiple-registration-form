import React from "react";
import { FileUploadProps } from "./interface";

const FileUpload: React.FC<FileUploadProps> = ({ label, onChange }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onChange?.(file);
  };

  return (
    <>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        className="block w-full text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="file"
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileUpload;
