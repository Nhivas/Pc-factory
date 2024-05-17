// src/components/BuildPC.jsx
import React, { useState } from 'react';
import Footer from './Footer';
import '../styles/buildpc.css';
import axios from 'axios';
import Header from './Header';
import { Card } from './card';
import { CardRam } from './cardram';
import { CardMb } from './cardmb';
import { CardGpu } from './cardgpu';

const BuildPC = () => {
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: '',
    motherboard: '',
    ram: '',
    gpu: '',
    cooler: '',
    ssd: '',
    cabinet: '',
    smps: ''
  });

  const handleSelectComponent = (componentName, value) => {
    setSelectedComponents(prevState => ({ ...prevState, [componentName]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send selectedComponents to backend API to save to PC collection
      const response = await axios.post('http://localhost:5000/api/pc', selectedComponents);
      console.log(response.data); // Log response from server
      // Reset selectedComponents after successful submission
      setSelectedComponents({
        cpu: '',
        motherboard: '',
        ram: '',
        gpu: '',
        cooler: '',
        ssd: '',
        cabinet: '',
        smps: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Header />
        <div className="cards">
        <Card/>
        <CardMb/>
        <CardRam/>
        <CardGpu/>
        </div>

    </>
  );
};

export default BuildPC;
