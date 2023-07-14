import { createContext } from "react";
import { TAuthorizationStage, AuthContextValue } from "./Types/Auth.types";
export const AuthContext = createContext<AuthContextValue>({
  status: TAuthorizationStage.UNAUTHORIZED,
  setStatus: () => {},
});