import React from "react";

const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? item : null;
};

export default function useAuth(key: string) {
  const [auth, setAuth] = React.useState<string | null>();
  React.useEffect(() => {
    const user = getLocalStorage(key);
    if (user) {
      setAuth(user);
    }
  }, [key]);
  return {
    auth,
    setAuth,
  };
}
