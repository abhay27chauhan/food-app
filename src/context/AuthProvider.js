import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";

import Loader from "../components/Loader/Loader";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  function signUp(user) {
    setUser(user);
  }

  async function login(email, password) {
    try {
      const data = await axios.post("/api/users/login", {
        email: email,
        password: password,
      });
      setUser(data.data);
      localStorage.setItem("user", JSON.stringify(data.data));
      return data;
    } catch (err) {
      console.log(err);
    }
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  useEffect(() => {
    let data = localStorage.getItem("user");
    if (data) {
        setUser(JSON.parse(data));
        setLoading(false);
        history.push("/");
    } else {
      setUser(null);
      setLoading(false);
    }
  }, []);

  const value = {
    user,
    login,
    signUp,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children: (<Loader size={50}/>)}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
