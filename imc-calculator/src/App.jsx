import React, { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [categoria, setCategoria] = useState('');

  const calcularIMC = () => {
    const alturaEmMetros = altura / 100;
    const resultadoIMC = peso / (alturaEmMetros * alturaEmMetros);
    setImc(resultadoIMC.toFixed(2));
    
    if (resultadoIMC < 18.5) {
      setCategoria('Abaixo do peso');
    } else if (resultadoIMC < 24.9) {
      setCategoria('Peso normal');
    } else if (resultadoIMC < 29.9) {
      setCategoria('Sobrepeso');
    } else {
      setCategoria('Obesidade');
    }
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Peso (kg):</label>
        <input 
          type="number" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
        />
      </div>
      <div>
        <label>Altura (cm):</label>
        <input 
          type="number" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
        />
      </div>
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <p>Categoria: {categoria}</p>
        </div>
      )}
    </div>
  );
}

export default App;

