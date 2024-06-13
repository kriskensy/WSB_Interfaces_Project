import { useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const login = (email: string, password: string) => {
    console.log("Logging in...");
    if (email === "kris@diving.com" && password === "kris") {
      setIsLoggedIn(true);
      setUserEmail(email);
      console.log("Login successful.");
      return true;
    } else {
      console.log("Login failed.");
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
