import React, { useState } from "react";
import '../styles/modal.css';

const ModalMb = ({ handleMBSelect, MBs, isChangeButton }) => {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingMBs, setMatchingMBs] = useState([]);
  const [selected, setSelected]=useState(null);
 
  
  const toggleModal = () => {
    
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Simulate search functionality (you can replace this with actual search logic)
    const matchedMBs = MBs.filter(mb =>
      mb.name.toLowerCase().includes(term.toLowerCase())
    );
    setMatchingMBs(matchedMBs);
  };

  const handleConfirm = (mb) => {
    handleMBSelect(mb);
    setSelected(mb);
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
              placeholder="Search Motherboards..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <ul className="cpu">
              {matchingMBs.map(mb => (
                <li key={mb.name} onClick={() => handleConfirm(mb)}>
                  {mb.name}
                </li>
              ))}
            </ul>
            </div>
            {matchingMBs.length === 0 && <p>No Motherboards found.</p>}
            {selected ? (
              <>
              <div className="specs">
              <h2>Specifications:</h2>
              <ul>
                <li>CPU Compatibility {selected.specs.CPU_Compatibility}</li>
                <li>RAM Slots: {selected.specs.RAM_Slots}</li>
                <li>RAM Capacity: {selected.specs.Max_RAM_Capacity}</li>
                <li>Form Factors: {selected.specs.Form_Factor}</li>
                <li>PCIe Slots: {selected.specs.PCIe_Slots}</li>
                <li>Storage: {selected.specs.Storage}</li>
                <li>Ethernet: {selected.specs.Ethernet}</li>
                <li>USB Ports: {selected.specs.USB_Ports}</li>
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

export default ModalMb;
