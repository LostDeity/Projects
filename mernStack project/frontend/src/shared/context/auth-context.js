import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedin: false,
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});
