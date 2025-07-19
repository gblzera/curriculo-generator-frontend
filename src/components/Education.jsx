import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

function Education() {
  const { resumeData, handleDataChange } = useApp();
  const data = resumeData.education;
  const setData = (newData) => handleDataChange('education', newData);

  const getInitialState = () => ({ course: '', institution: '', startDate: '', endDate: '', inProgress: false, projectedEndDate: '' });
  const [newEducation, setNewEducation] = useState(getInitialState());
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setNewEducation({ ...newEducation, [name]: inputValue });
  };

  const handleAddOrUpdateEducation = () => {
    if (!newEducation.course || !newEducation.institution) {
      alert('Por favor, preencha pelo menos o Curso e a Instituição.');
      return;
    }

    if (editingIndex !== null) {
      const updatedData = data.map((item, index) => 
        index === editingIndex ? newEducation : item
      );
      setData(updatedData);
    } else {
      setData([...data, newEducation]);
    }
    
    setNewEducation(getInitialState());
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewEducation(data[index]);
  };

  const handleDelete = (indexToDelete) => {
    if (window.confirm("Tem certeza que deseja excluir esta formação?")) {
      setData(data.filter((_, index) => index !== indexToDelete));
    }
  };

  const handleCancelEdit = () => {
    setNewEducation(getInitialState());
    setEditingIndex(null);
  };

  return (
    <div className="form-section">
      <h3>{editingIndex !== null ? 'Editando Formação' : 'Adicionar Formação Acadêmica'}</h3>
      <input type="text" name="course" placeholder="Curso ou Formação" value={newEducation.course} onChange={handleInputChange} />
      <input type="text" name="institution" placeholder="Instituição de Ensino" value={newEducation.institution} onChange={handleInputChange} />
      <input type="text" name="startDate" placeholder="Data de Início (ex: Jan/2020)" value={newEducation.startDate} onChange={handleInputChange} />
      <div className="checkbox-wrapper">
        <label>
          <input type="checkbox" name="inProgress" checked={newEducation.inProgress} onChange={handleInputChange} />
          Em andamento
        </label>
      </div>
      {newEducation.inProgress ? (
        <input type="text" name="projectedEndDate" placeholder="Previsão de Conclusão (ex: Dez/2025)" value={newEducation.projectedEndDate} onChange={handleInputChange} />
      ) : (
        <input type="text" name="endDate" placeholder="Data de Conclusão (ex: Dez/2024)" value={newEducation.endDate} onChange={handleInputChange} />
      )}

      <div className="edit-actions">
        <button type="button" onClick={handleAddOrUpdateEducation}>
          {editingIndex !== null ? 'Salvar Alterações' : 'Adicionar Formação'}
        </button>
        {editingIndex !== null && (
          <button type="button" className="cancel-btn" onClick={handleCancelEdit}>
            Cancelar
          </button>
        )}
      </div>

      <div className="items-list">
        {data.map((edu, index) => (
          <div key={index} className="item">
            <div className="item-content">
              <p><strong>{edu.course}</strong></p>
              <p>{edu.institution}</p>
              <p className="item-date">{edu.startDate} - {edu.inProgress ? `Presente (Prev. ${edu.projectedEndDate})` : edu.endDate}</p>
            </div>
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

export default Education;