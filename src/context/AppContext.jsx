import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const defaultResumeData = {
    personalInfo: { name: '', email: '', phone: '', linkedin: '' },
    summary: '',
    education: [], 
    experience: [],
    skills: [],
  };

  const savedData = JSON.parse(localStorage.getItem('resumeData'));

  const [resumeData, setResumeData] = useState(savedData || defaultResumeData);
  const [layout, setLayout] = useState('moderno');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [errors, setErrors] = useState({});
  
  const [themeColor, setThemeColor] = useState('#8e44ad'); // Roxo como padrão

  useEffect(() => {
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const handleDataChange = (section, data) => {
    setResumeData(prevData => ({ ...prevData, [section]: data }));
  };

  const handleClearForm = () => {
    if (window.confirm("Você tem certeza que deseja limpar todos os dados do formulário? Esta ação não pode ser desfeita.")) {
      localStorage.removeItem('resumeData');
      setResumeData(defaultResumeData);
    }
  };

  const validateData = () => {
    const newErrors = {};
    if (!resumeData.personalInfo.name) {
      newErrors.name = 'O nome completo é obrigatório.';
    }
    if (!resumeData.personalInfo.email) {
      newErrors.email = 'O e-mail é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(resumeData.personalInfo.email)) {
      newErrors.email = 'O formato do e-mail é inválido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const value = {
    resumeData,
    layout,
    theme,
    errors,
    themeColor,     
    setThemeColor,  
    handleDataChange,
    setLayout,
    setTheme,
    handleClearForm,
    validateData,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}