import { useState } from 'react';
import './App.css';

function App() {
const [paino, setPaino] = useState(0)
const [intensiteetti, setIntensiteetti] = useState(1.3)
const [sukupuoli, setSukupuoli] = useState('mies')
const [kalorit, setKalorit] = useState (0)

const laske = (e) => {
  e.preventDefault()
  let tulos = 0
  if (sukupuoli === 'mies') {
    tulos = (879 + 10.2 * paino) * intensiteetti
  } else {
    tulos =(795 + 7.18 * paino) * intensiteetti
  }
  setKalorit(tulos)
}

  return (
    <div>
      <h3>Kalori laskuri</h3>
      <form on onSubmit={laske}>
      <div>
        <label>Paino</label>
        <input value={paino} onChange={e => setPaino(e.target.value)}/>
      </div>
      <div>
        <label>Intensiteetti</label>
        <select value={intensiteetti} onChange={e => setIntensiteetti(e.target.value)}>
          <option value="1.3">Kevyt</option>
          <option value="1.5">Tavanomainen</option>
          <option value="1.7">Keskivertainen</option>
          <option value="2">Rankka</option>
          <option value="2.2">Erittäin rankka</option>
        </select>
      </div>
      <div>
        <label>Sukupuoli</label>
        <input type="radio" name="sukupuoli" value='mies'defaultChecked onChange={e => setSukupuoli(e.target.value)} /><label>Mies</label>
        <input type="radio" name="sukupuoli" value='nainen' onChange={e => setSukupuoli(e.target.value)}  /><label>Nainen</label>
      </div>
      <div>
        <label>Kalorit</label>
        <output> {kalorit.toFixed(0)}</output>
      </div>
      <button>Laske</button>
      </form>
    </div>

  );
}

export default App;
