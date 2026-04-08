import './App.css';
import { BrowserRouter } from 'react-router-dom';
import BasicRouting from './Layout/Containers';

function App() {
  return (
    <BrowserRouter>
      <div className='text-center'>
        
        <BasicRouting /> 
      </div>
    </BrowserRouter>
  );
}

export default App; 