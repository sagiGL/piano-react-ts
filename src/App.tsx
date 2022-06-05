import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Piano from './components/Piano/Piano';
import { SoundProvider } from './providers/SoundProvider';

function App() {
  return (
      <div className="app" >
        <SoundProvider>
          <Piano></Piano>
        </SoundProvider>
      </div>
  );
}

export default App;
