import React, { useState } from 'react';
import Modal from './modal';
import '../styles/card.css';
import CPUs from '../data/cpu.json';

export const Card = () => {
  const [selectedCPU, setSelectedCPU] = useState(null);

  const handleCPUSelect = (cpu) => {
    setSelectedCPU(cpu);
  };

  return (
    <div className="container">
      <h2>CPU</h2>
      <div className='select'>
        {selectedCPU ? (
          <img src={selectedCPU.image} alt={selectedCPU.name} />
        ) : (
          <Modal handleCPUSelect={handleCPUSelect} CPUs={CPUs} />
        )}
        <div className='detail'>
          {selectedCPU ? (<>
            <p>
              Selected: {selectedCPU.name}<br></br>
              Price: {selectedCPU.price}
            </p>
            <div className="popup">
            <Modal handleCPUSelect={handleCPUSelect} CPUs={CPUs} isChangeButton={true} />
            </div>
             </> 
        
          ) : null}
        </div>
      </div>
    </div>
  );
}
