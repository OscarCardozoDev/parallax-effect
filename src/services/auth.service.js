import API_URL from "../config/environments";

const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error en la autenticación");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
};

const register = async (name, email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      throw new Error("Error en el registro");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al registrarse:", error);
    throw error;
  }
};

export default { login, register };
