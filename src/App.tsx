import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Layout from './components/layout/layout.component';

import State from './redux/state.interface';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Layout />
    </div>
  );
};

export default App;
