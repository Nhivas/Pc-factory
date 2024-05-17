import React, { useState } from "react";
import '../styles/modal.css';
import ModalGpu from './modalgpu';


const Modal = ({ handleCPUSelect, CPUs, isChangeButton }) => {
  const [modal, setModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingCPUs, setMatchingCPUs] = useState([]);
  const [selected, setSelected]=useState(null);

  
  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Simulate search functionality (you can replace this with actual search logic)
    const matchedCPUs = CPUs.filter(cpu =>
      cpu.name.toLowerCase().includes(term.toLowerCase())
    );
    setMatchingCPUs(matchedCPUs);
  };

  const handleConfirm = (cpu) => {
    handleCPUSelect(cpu);
    setSelected(cpu);
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
              placeholder="Search CPU..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <ul className="cpu">
              {matchingCPUs.map(cpu => (
                <li key={cpu.name} onClick={() => handleConfirm(cpu)}>
                  {cpu.name}
                </li>
              ))}
            </ul>
            </div>
            {matchingCPUs.length === 0 && <p>No CPUs found.</p>}
            {selected ? (
              <>
              <div className="specs">
              <h2>Specifications:</h2>
              <ul>
                <li>Socket: {selected.specs.socket}</li>
                <li>Cores: {selected.specs.cores}</li>
                <li>Threads: {selected.specs.threads}</li>
                <li>Base Clock: {selected.specs.base_clock}</li>
                <li>Boost Clock: {selected.specs.boost_clock}</li>
                <li>Cache: {selected.specs.cache}</li>
                <li>Voltage: {selected.specs.voltage}</li>
                <li>TDP: {selected.specs.tdp}</li>
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

export default Modal;
