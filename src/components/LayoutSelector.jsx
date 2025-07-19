import React from 'react';
import { useApp } from '../context/AppContext';

function LayoutSelector() {
  const { layout, setLayout } = useApp();
  
  return (
    <div className="form-section">
      <h3>Escolha o Layout</h3>
      <div className="layout-options">
        <label className={`layout-option ${layout === 'moderno' ? 'selected' : ''}`}>
          <input type="radio" name="layout" value="moderno" checked={layout === 'moderno'} onChange={(e) => setLayout(e.target.value)} />
          Moderno
        </label>
        <label className={`layout-option ${layout === 'classico' ? 'selected' : ''}`}>
          <input type="radio" name="layout" value="classico" checked={layout === 'classico'} onChange={(e) => setLayout(e.target.value)} />
          Clássico
        </label>
        <label className={`layout-option ${layout === 'minimalista' ? 'selected' : ''}`}>
          <input type="radio" name="layout" value="minimalista" checked={layout === 'minimalista'} onChange={(e) => setLayout(e.target.value)} />
          Minimalista
        </label>
      </div>
    </div>
  );
}

export default LayoutSelector;