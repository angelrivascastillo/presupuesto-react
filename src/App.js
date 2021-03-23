import { useState } from 'react';
import './App.css';
import AgregarGastos from './components/AgregarGastos';
import DefinirPresupesto from './components/DefinirPresupesto';
import LIstaGastos from './components/LIstaGastos';

// initialGastos
function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarpregunta] = useState(true)
  const [gastos, setGastos] = useState([])

  const addGastos = nuevogasto => {
    setGastos([...gastos, { id: Date.now(), ...nuevogasto }])
  }
  return (
    <div>
      <h1>Gasto Semanal</h1>
      <div className="container">
        {mostrarpregunta &&
          <DefinirPresupesto setPresupuesto={setPresupuesto} setRestante={setRestante} setMostrarpregunta={setMostrarpregunta} />
        }
        {
          !mostrarpregunta &&
          <div className="row">
            <AgregarGastos restante={restante} setRestante={setRestante} addGastos={addGastos} />
            <LIstaGastos restante={restante} presupuesto={presupuesto} gastos={gastos} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
