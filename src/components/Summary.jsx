import React from 'react';
import { useApp } from '../context/AppContext';

function Summary() {
  const { resumeData, handleDataChange } = useApp();

  return (
    <div className="form-section">
      <h3>Resumo Profissional</h3>
      <textarea
        name="summary"
        placeholder="Escreva um parágrafo que resume suas qualificações e objetivos de carreira..."
        value={resumeData.summary}
        onChange={(e) => handleDataChange('summary', e.target.value)}
        rows="5"
      />
    </div>
  );
}

export default Summary;