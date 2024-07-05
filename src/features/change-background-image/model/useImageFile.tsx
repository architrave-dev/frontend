import React from "react";

// TODO: Image src resolve하는 로직 && entities로 옮길지 고민하기
export default function useImageFile() {
  const [imageFile, setImageFiles] = React.useState<File | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImageFiles(e.target.files[0]);
  };
  return {
    imageFile,
    onChange,
  };
}
