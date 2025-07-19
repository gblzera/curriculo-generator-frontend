import React from 'react';
import { useApp } from '../context/AppContext';

function Customization() {
  const { themeColor, setThemeColor } = useApp();

  return (
    <div className="form-section">
      <h3>Customizar Aparência</h3>
      <div className="color-picker-wrapper">
        <label htmlFor="themeColor">Cor Principal:</label>
        <input
          type="color"
          id="themeColor"
          name="themeColor"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Customization;