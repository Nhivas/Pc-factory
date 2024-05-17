import React, { useState } from 'react';
import ModalMb from './modalmb';
import '../styles/card.css';
import MBs from '../data/motherboard.json';

export const CardMb = () => {
  const [selectedMB, setSelectedMB] = useState(null);

  const handleMBSelect = (mb) => {
    setSelectedMB(mb);
  };

  return (
    <div className="container">
      <h2>Motherboard</h2>
      <div className='select'>
        {selectedMB ? (
          <img src={selectedMB.image} alt={selectedMB.name} />
        ) : (
          <ModalMb handleMBSelect={handleMBSelect} MBs={MBs} />
        )}
        <div className='detail'>
          {selectedMB ? (<>
            <p>
              Selected: {selectedMB.name}<br></br>
              Price: {selectedMB.price}
            </p>
            <div className="popup">
            <ModalMb handleMBSelect={handleMBSelect} MBs={MBs} isChangeButton={true} />
            </div>
             </> 
        
          ) : null}
        </div>
      </div>
    </div>
  );
}
