import React from "react";

export default function useImageFiles() {
  const [imageFiles, setImageFiles] = React.useState<FileList | null>(null);
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageFiles(e.target.files);
  };
  return {
    imageFiles,
    onFileInputChange,
  };
}
