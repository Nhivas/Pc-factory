import React, { useState } from "react";
import '../styles/modal.css';

const ModalGpu = ({ handleGPUSelect, GPUs, isChangeButton }) => {
  const [modalgpu, setModalgpu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingGPUs, setMatchingGPUs] = useState([]);
  const [selected, setSelected]=useState(null);
 
  
  const toggleModal = () => {
    
    setModalgpu(!modalgpu);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Simulate search functionality (you can replace this with actual search logic)
    const matchedGPUs = GPUs.filter(gpu =>
      gpu.name.toLowerCase().includes(term.toLowerCase())
    );
    setMatchingGPUs(matchedGPUs);
  };

  const handleConfirm = (gpu) => {
    handleGPUSelect(gpu);
    setSelected(gpu);
    setModalgpu(modalgpu);
  };

  return (
    <>
      <button onClick={toggleModal} className={`btn-modal ${isChangeButton ? 'small' : ''}`}>
        <p>{isChangeButton ? 'Change..' : '+'}</p>
      </button>

      {modalgpu && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="inputs">
            <input
              type="text"
              placeholder="Search GPU..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <ul className="cpu">
              {matchingGPUs.map(gpu => (
                <li key={gpu.name} onClick={() => handleConfirm(gpu)}>
                  {gpu.name}
                </li>
              ))}
            </ul>
            </div>
            {matchingGPUs.length === 0 && <p>No CPUs found.</p>}
            {selected ? (
              <>
              <div className="specs">
              <h2>Specifications:</h2>
              <ul>
                <li>VRAM: {selected.specs.VRAM}</li>
                <li>Memory Bus: {selected.specs.Memory_Bus}</li>
              </ul>
            </div> 
            <div className="details">
            <img src={selected.image} alt="" />
            <p>Selected: {selected ? selected.name : 'None'}<br></br>
            Price: {selected ? selected.price : '-'}</p>
            
            <button className="close-modal" onClick={toggleModal}>
              SELECT
            </button>
            </div>
            </>
            )
            :
            null
            }
            
          </div>
        </div>
      )}
    </>
  );
}

export default ModalGpu;
