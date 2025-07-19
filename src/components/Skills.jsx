import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

function Skills() {
  const { resumeData, handleDataChange } = useApp();
  const data = resumeData.skills;
  const setData = (newData) => handleDataChange('skills', newData);
  
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setData([...data, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (indexToRemove) => {
    setData(data.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="form-section">
      <h3>Habilidades</h3>
      <div className="skill-input-wrapper">
        <input type="text" placeholder="Ex: React, Node.js, Liderança" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()} />
        <button type="button" onClick={handleAddSkill}>Adicionar</button>
      </div>
      <div className="skills-list">
        {data.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
            <button type="button" className="remove-skill-btn" onClick={() => handleRemoveSkill(index)}>
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;