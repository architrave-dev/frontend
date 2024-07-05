import React from "react";

function useLocalStorage(item: string) {
  const [stored, setStored] = React.useState<string>("");
  React.useEffect(() => {
    const token = localStorage.getItem(item);
    if (token) {
      setStored(token);
    }
    return () => {};
  }, [item]);
  return stored;
}

export { useLocalStorage };
