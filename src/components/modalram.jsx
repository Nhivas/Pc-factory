import React, { useState } from "react";
import '../styles/modal.css';

const ModalRam = ({ handleRAMSelect, RAMs, isChangeButton }) => {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingRAMs, setMatchingRAMs] = useState([]);
  const [selected, setSelected]=useState(null);
 
  
  const toggleModal = () => {
    
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Simulate search functionality (you can replace this with actual search logic)
    const matchedRAMs = RAMs.filter(ram =>
      ram.name.toLowerCase().includes(term.toLowerCase())
    );
    setMatchingRAMs(matchedRAMs);
  };

  const handleConfirm = (ram) => {
    handleRAMSelect(ram);
    setSelected(ram);
    setModal(modal);
  };

  return (
    <>
      <button onClick={toggleModal} className={`btn-modal ${isChangeButton ? 'small' : ''}`}>
        <p>{isChangeButton ? 'Change..' : '+'}</p>
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="inputs">
            <input
              type="text"
              placeholder="Search RAMs..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <ul className="cpu">
              {matchingRAMs.map(ram => (
                <li key={ram.name} onClick={() => handleConfirm(ram)}>
                  {ram.name}
                </li>
              ))}
            </ul>
            </div>
            {matchingRAMs.length === 0 && <p>No RAMs found.</p>}
            {selected ? (
              <>
              <div className="specs">
              <h2>Specifications:</h2>
              <ul>
                <li>DDR: {selected.ddr}</li>
                <li>Speed: {selected.speed}</li>
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

export default ModalRam;
