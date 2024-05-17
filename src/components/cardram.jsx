import React, { useState } from 'react';
import ModalRam from './modalram';
import '../styles/card.css';
import RAMs from '../data/ram.json';

export const CardRam = () => {
  const [selectedRAM, setSelectedRAM] = useState(null);

  const handleRAMSelect = (ram) => {
    setSelectedRAM(ram);
  };

  return (
    <div className="container">
      <h2>RAM</h2>
      <div className='select'>
        {selectedRAM ? (
          <img src={selectedRAM.image} alt={selectedRAM.name} />
        ) : (
          <ModalRam handleRAMSelect={handleRAMSelect} RAMs={RAMs} />
        )}
        <div className='detail'>
          {selectedRAM ? (<>
            <p>
              Selected: {selectedRAM.name}<br></br>
              Price: {selectedRAM.price}
            </p>
            <ModalRam handleRAMSelect={handleRAMSelect} RAMs={RAMs} isChangeButton={true} />
             </> 
        
          ) : null}
        </div>
      </div>
    </div>
  );
}
