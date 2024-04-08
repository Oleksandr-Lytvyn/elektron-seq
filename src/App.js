import './App.css';
// import { sendMiddleC } from './myScripts';
import { MainPage } from './components/MainPage';
import { midiListener } from './utilites/midiListener';

// sendMiddleC();

midiListener();

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
