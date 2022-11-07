import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuestionaireProvider from './QuestionaireProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    <QuestionaireProvider>
      <App />
    </QuestionaireProvider>
   
  // </React.StrictMode>
);

