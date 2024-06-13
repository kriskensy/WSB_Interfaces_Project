import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const login = (email: string, password: string) => {
    if (email === "kris@diving.com" && password === "kris") {
      setIsLoggedIn(true);
      setUserEmail(email);
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  return {
    isLoggedIn,
    userEmail,
    login,
    logout,
  };
};
