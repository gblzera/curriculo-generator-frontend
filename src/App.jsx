import React from 'react';
import './App.css';
import { useApp } from './context/AppContext';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import LayoutSelector from './components/LayoutSelector';
import Actions from './components/Actions';
import Footer from './components/Footer';
import ThemeToggler from './components/ThemeToggler';
import Customization from './components/Customization'; 

function App() {
  const { resumeData, layout, themeColor } = useApp(); 

  return (
    <div className="app-container">
      <header>
        <h1>Gerador de Currículos</h1>
        <p>Preencha as seções abaixo para criar seu currículo.</p>
        <ThemeToggler />
      </header>
      
      <main className="form-and-preview">
        <div className="resume-form">
          <PersonalInfo />
          <Summary />
          <Education />
          <Experience />
          <Skills />
          <Customization /> {/* Renderiza o novo componente */}
          <LayoutSelector />
          <Actions />
        </div>

        {/* Adiciona um 'style' inline para definir a variável CSS dinamicamente */}
        <div 
          className={`resume-preview layout-${layout}`}
          style={{ '--header-color': themeColor }}
        >
          <h2>Pré-visualização</h2>
          <div className="preview-content">
            <h3>{resumeData.personalInfo.name || "Seu Nome"}</h3>
            <p>{resumeData.personalInfo.email || "seu.email@exemplo.com"} | {resumeData.personalInfo.phone || "(XX) XXXXX-XXXX"}</p>
            {resumeData.personalInfo.linkedin && <p><a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}
            
            {resumeData.summary && ( <><h4>Resumo Profissional</h4><p>{resumeData.summary}</p></> )}
            
            {resumeData.education.length > 0 && ( <><h4>Formação Acadêmica</h4>{resumeData.education.map((edu, index) => ( <div key={index} className="preview-item"><p><strong>{edu.course}</strong></p><p>{edu.institution}</p><p className="preview-date">{edu.startDate} - {edu.inProgress ? `Presente (Prev. ${edu.projectedEndDate})` : edu.endDate}</p></div>))}</> )}
            
            {resumeData.experience.length > 0 && ( <><h4>Experiência Profissional</h4>{resumeData.experience.map((exp, index) => ( <div key={index} className="preview-item"><p><strong>{exp.position}</strong> at {exp.company}</p><p className="preview-date">{exp.startDate} - {exp.inProgress ? 'Presente' : exp.endDate}</p><p>{exp.description}</p></div>))}</> )}
            
            {resumeData.skills.length > 0 && ( <><h4>Habilidades</h4><div className="skills-preview">{resumeData.skills.map((skill, index) => ( <span key={index} className="skill-tag">{skill}</span>))}</div></> )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;