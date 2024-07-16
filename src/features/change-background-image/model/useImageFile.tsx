import React from "react";

// TODO: Image src resolve하는 로직 && entities로 옮길지 고민하기
export default function useImageFile() {
  const [imageFile, setImageFile] = React.useState("");
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageFile(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  return {
    imageFile,
    onImageChange,
  };
}
