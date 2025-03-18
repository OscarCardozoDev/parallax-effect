import { useState } from "react";
import authService from "../../services/auth.service";
import "./Login.css";

const Login = ({ handleToggle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    try {
      const response = await authService.login(email, password);
      console.log("Login exitoso:", response);
      // Aquí puedes redirigir o guardar el token en localStorage
    } catch (error) {
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form form" onSubmit={handleSubmit}>
        <h1>Bienvenidos</h1>

        <div className="input-container">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">Ingresar</button>
        <button type="button" className="btn" onClick={handleToggle}>Registrarse</button>
      </form>
    </div>
  );
};

export default Login;
