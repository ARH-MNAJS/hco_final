// components/Alert.tsx

import React from 'react';

const Alert: React.FC<{ message: string; type: 'success' | 'error' }> = ({ message, type }) => {
  const bgColor = type === 'success' ? '#feea63' : '#000';
  const textColor = type === 'success' ? '#000' : '#fff';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        backgroundColor: bgColor,
        color: textColor,
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        fontWeight: 'bold',
        boxShadow: '4px 4px 0px #000',
        zIndex: 1000,
      }}
    >
      {message}
    </div>
  );
};

export default Alert;
