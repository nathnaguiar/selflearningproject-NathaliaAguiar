import { useState } from 'react';
import './App.css';

function FactCard({ title, icon, api, headers, color, buttonText }) {
  const [fact, setFact] = useState('Click the button to load');

  const fetchFact = async () => {
    try {
      const res = await fetch(api, { headers });
      const data = await res.json();
      if (data.fact) setFact(data.fact);
      else if (data.text) setFact(data.text);
      else if (data.joke) setFact(data.joke);
      else if (data.q && data.a) setFact(`${data.q} — ${data.a}`);
    } catch (err) {
      setFact('Oops! Something went wrong.');
    }
  };

  return (
    <div className="card">
      <img src={icon} alt="" className="icon" />
      <h2>{title}</h2>
      <p className="fact">"{fact}"</p>
      <button style={{ backgroundColor: color }} onClick={fetchFact}>
        {buttonText}
      </button>
    </div>
  );
}

export default FactCard;
