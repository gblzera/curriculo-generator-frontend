import React from 'react';
import { useApp } from '../context/AppContext';

function PersonalInfo() {
  const { resumeData, handleDataChange } = useApp();
  const data = resumeData.personalInfo;

  const handleNameChange = (e) => {
    const { value } = e.target;
    handleDataChange('personalInfo', { ...data, name: value });
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    handleDataChange('personalInfo', { ...data, email: value });
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');
    handleDataChange('personalInfo', { ...data, phone: numericValue });
  };

  const handleLinkedinChange = (e) => {
    const { value } = e.target;
    handleDataChange('personalInfo', { ...data, linkedin: value });
  };

  return (
    <div className="form-section">
      <h3>Informações Pessoais</h3>
      <input
        type="text"
        name="name"
        placeholder="Nome Completo"
        value={data.name}
        onChange={handleNameChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={data.email}
        onChange={handleEmailChange}
        required
      />
      <input
        type="text" 
        name="phone"
        placeholder="Telefone"
        value={data.phone}
        onChange={handlePhoneChange}
      />
      <input
        type="url"
        name="linkedin"
        placeholder="URL do seu Perfil no LinkedIn"
        value={data.linkedin}
        onChange={handleLinkedinChange}
      />
    </div>
  );
}

export default PersonalInfo;