import React, { useState } from 'react';
import axios from 'axios';
import { useApp } from '../context/AppContext';

function Actions() {
  const { resumeData, layout, handleClearForm, validateData, themeColor } = useApp(); // Pega a themeColor
  const [loading, setLoading] = useState(false);

  const handleGeneratePdf = async () => {
    const isValid = validateData();
    if (!isValid) {
      alert("Por favor, corrija os erros indicados no formulário antes de gerar o PDF.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://gerador-curriculos-backend.onrender.com/generate-resume', { layout, resumeData, themeColor }, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'curriculo.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
      alert('Não foi possível gerar o PDF. Verifique se o servidor backend está rodando e tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-section actions-section">
      <h3>Finalizar</h3>
      <button 
        className="generate-btn" 
        type="button" 
        onClick={handleGeneratePdf}
        disabled={loading}
      >
        {loading ? 'Gerando...' : 'Gerar PDF'}
      </button>
      <button 
        className="clear-btn" 
        type="button" 
        onClick={handleClearForm}
        disabled={loading}
      >
        Limpar Formulário
      </button>
    </div>
  );
}

export default Actions;