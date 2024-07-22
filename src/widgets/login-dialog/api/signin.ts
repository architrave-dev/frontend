import { api } from "src/app/config";
import { signInSchema } from "../model";

const signIn = async (userInfo: unknown) => {
  const body = signInSchema.parse(userInfo);
  const { status } = await api.axiosInstance.post("/auth/signin", body);
  if (status !== 200) throw new Error("signIn Failed");
};

export { signIn };
