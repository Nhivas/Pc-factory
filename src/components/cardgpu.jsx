import React, { useState } from 'react';
import ModalGpu from './modalgpu';
import '../styles/card.css';
import GPUs from '../data/gpu.json';

export const CardGpu = () => {
  const [selectedGPU, setSelectedGPU] = useState(null);

  const handleGPUSelect = (gpu) => {
    setSelectedGPU(gpu);
  };

  return (
    <div className="container">
      <h2>GPU</h2>
      <div className='select'>
        {selectedGPU ? (
          <img src={selectedGPU.image} alt={selectedGPU.name} />
        ) : (
          <ModalGpu handleGPUSelect={handleGPUSelect} GPUs={GPUs} />
        )}
        <div className='detail'>
          {selectedGPU ? (<>
            <p>
              Selected: {selectedGPU.name}<br></br>
              Price: {selectedGPU.price}
            </p>
            <ModalGpu handleGPUSelect={handleGPUSelect} GPUs={GPUs} isChangeButton={true} />
             </> 
        
          ) : null}
        </div>
      </div>
    </div>
  );
}
