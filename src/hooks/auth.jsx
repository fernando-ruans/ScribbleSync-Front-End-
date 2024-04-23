import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider ({ children }) {
  const [data, setData] = useState({});

  async function signIn ({ email, password }) {
    
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@ScribbleSync:user", JSON.stringify(user));
      localStorage.setItem("@ScribbleSync:token", token);

      api.defaults.headers.common ['Authorization'] = `Bearer ${token}`;

      setData({ user, token})
    } 
    catch (error) {
      if (error.response) {
        alert (error.response.data.message);
      } else {
        alert ("Não foi possível entrar.")
      }
    }
  }

  async function signOut () {
    const token = localStorage.removeItem("@ScribbleSync:token");
    const user = localStorage.removeItem("@ScribbleSync:user");

    setData({});
  }

  async function updateProfile ({ user }) {
    try {
      await api.put("/users", user);
      localStorage.setItem("@ScribbleSync:user", JSON.stringify(user));

      setData({ user, token: data.token});
      alert("Perfil atualizado!")
    } 
    catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar os dados.")
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@ScribbleSync:token");
    const user = localStorage.getItem("@ScribbleSync:user");

    if (token && user) {
       api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      signOut,
      updateProfile,
      user: data.user,      
      }}
      >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };