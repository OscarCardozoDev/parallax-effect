import { useState } from "react";
import authService from "../../services/auth.service";
import "./Register.css";

const Register = ({ handleToggle }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await authService.register(name, email, password);
      console.log("Registro exitoso:", response);
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      handleToggle(); // Cambia a la vista de login
    } catch (error) {
      alert("Error al registrarse");
    }
  };

  return (
    <div className="register-container">
      <form className="form register-form" onSubmit={handleSubmit}>
        <h1>¡Comencemos!</h1>

        <div className="input-container">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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

        <div className="btn-container">
          <button type="submit" className="btn">Registrar</button>
          <button type="button" className="btn" onClick={handleToggle}>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
