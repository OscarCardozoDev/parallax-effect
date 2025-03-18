import { useState } from 'react';
import './App.css';
import Background from './components/Background/Background';
import Login from './components/Login/Login';
import Register from './components/register/Register';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      <Background />
      
      <div className={`auth-container ${isFlipped ? "rotated" : ""}`}>
        <Register handleToggle={handleToggle} />
        <Login handleToggle={handleToggle} />
      </div>
    </div>
  );
}

export default App;
