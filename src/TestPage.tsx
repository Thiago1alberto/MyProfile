import React from 'react';

const TestPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Portfolio de Thiago Alberto
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
        Especialista em Dados e Business Intelligence
      </p>
      <div style={{ 
        background: '#333', 
        padding: '2rem', 
        borderRadius: '10px',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#f39c12', marginBottom: '1rem' }}>
          Seus dados estão uma bagunça?
        </h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Você passa horas retrabalhando planilhas, perdendo oportunidades e tomando decisões no escuro.
        </p>
        <button style={{ 
          background: '#3498db', 
          color: 'white', 
          padding: '1rem 2rem', 
          border: 'none', 
          borderRadius: '5px',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}>
          Quero resolver meus problemas de dados
        </button>
      </div>
    </div>
  );
};

export default TestPage;
