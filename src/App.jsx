import React, { useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import { cards } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  const handleButtonClick = () => {
    window.open('https://www.chess.com/', '_blank');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search by name" 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="container">
        {filteredCards.map(el => (
          <Card
            imgsrc={el.imgLink}
            key={el.id}
            age={el.age}
            name={el.name}
            bg={el.bg}
            desc={el.desc}
          />
        ))}
      </div>
      <button onClick={handleButtonClick} className='button'>Go to chess</button>
    </div>
  );
}

export default App;
