import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

function Experience() {
  const { resumeData, handleDataChange } = useApp();
  const data = resumeData.experience;
  const setData = (newData) => handleDataChange('experience', newData);
  
  const getInitialState = () => ({ company: '', position: '', startDate: '', endDate: '', inProgress: false, description: '' });
  
  const [newExperience, setNewExperience] = useState(getInitialState());
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setNewExperience({ ...newExperience, [name]: inputValue });
  };

  const handleAddOrUpdateExperience = () => {
    if (!newExperience.company || !newExperience.position) {
      alert('Por favor, preencha pelo menos a Empresa e o Cargo.');
      return;
    }

    if (editingIndex !== null) {
      const updatedData = data.map((item, index) => 
        index === editingIndex ? newExperience : item
      );
      setData(updatedData);
    } else {
      setData([...data, newExperience]);
    }
    
    setNewExperience(getInitialState());
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewExperience(data[index]);
  };


  const handleDelete = (indexToDelete) => {
    if (window.confirm("Tem certeza que deseja excluir esta experiência?")) {
      setData(data.filter((_, index) => index !== indexToDelete));
    }
  };


  const handleCancelEdit = () => {
    setNewExperience(getInitialState());
    setEditingIndex(null);
  };

  return (
    <div className="form-section">
      <h3>{editingIndex !== null ? 'Editando Experiência' : 'Adicionar Experiência Profissional'}</h3>
      <input type="text" name="company" placeholder="Empresa" value={newExperience.company} onChange={handleInputChange} />
      <input type="text" name="position" placeholder="Cargo" value={newExperience.position} onChange={handleInputChange} />
      <input type="text" name="startDate" placeholder="Data de Início (ex: Jan/2020)" value={newExperience.startDate} onChange={handleInputChange} />
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" name="inProgress" checked={newExperience.inProgress} onChange={handleInputChange} />
          Trabalho Atual
        </label>
      </div>
      {!newExperience.inProgress && (
        <input type="text" name="endDate" placeholder="Data de Saída (ex: Dez/2024)" value={newExperience.endDate} onChange={handleInputChange} />
      )}
      <textarea name="description" placeholder="Descrição das suas responsabilidades e conquistas..." rows="4" value={newExperience.description} onChange={handleInputChange} />
      
      {/* Botões com lógica condicional */}
      <div className="edit-actions">
        <button type="button" onClick={handleAddOrUpdateExperience}>
          {editingIndex !== null ? 'Salvar Alterações' : 'Adicionar Experiência'}
        </button>
        {editingIndex !== null && (
          <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
            Cancelar
          </button>
        )}
      </div>

      <div className="items-list">
        {data.map((exp, index) => (
          <div key={index} className="item">
            <div className="item-content">
              <p><strong>{exp.position}</strong></p>
              <p>{exp.company}</p>
              <p className="item-date">{exp.startDate} - {exp.inProgress ? 'Presente' : exp.endDate}</p>
            </div>
            {/* botões de ação para cada item */}
            <div className="item-actions">
              <button type="button" className="edit-btn" onClick={() => handleEdit(index)}>Editar</button>
              <button type="button" className="delete-btn" onClick={() => handleDelete(index)}>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;