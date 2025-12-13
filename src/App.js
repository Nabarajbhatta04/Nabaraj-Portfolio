// npm uninstall date-fnsimport React from 'react';
import './App.css';
import Portfolio from './pages/Portfolio';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App">
      <Portfolio />
      <Toaster />
    </div>
  );
}

export default App;