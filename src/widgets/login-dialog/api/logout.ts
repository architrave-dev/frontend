const logout = async () => {
  localStorage.removeItem("auth");
};

export { logout };
