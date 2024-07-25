import React from "react";

function useImageFile(src: string) {
  const [imageFile, setImageFile] = React.useState(src);
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

export { useImageFile };
