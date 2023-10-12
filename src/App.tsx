import React from 'react';
import './App.scss';
import InputFields from './components/InputFields/InputFields';

const App:React.FC = () => {
  return (
    <div className="App">
      <span className="heading">To-Do List</span>
      <InputFields />
    </div>
  );
}

export default App;
