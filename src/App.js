import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import About from './Components/About';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = 'black';
      document.getElementById("textarea").style.backgroundColor = '#212529';
      document.getElementById("textarea").style.color = 'white';
      document.getElementById("summary").style.color = 'white';
      showAlert("Dark Mode Enabled","success");
      // console.log(mode);
    }
    else if(mode === 'dark'){
      document.body.style.background = 'white';
      document.getElementById("textarea").style.backgroundColor = 'white';
      document.getElementById("textarea").style.color = 'black';
      document.getElementById("summary").style.color = 'black';
      setMode('light');
      showAlert("Light Mode Enabled","success");
      // console.log(mode);
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
  <>
  <Router>
  <Navbar toggleMode = {toggleMode} mode = {mode}/>
  <Alert alert = {alert} showAlert={showAlert}/>
  <div className='container my-5'>
    <Routes>
      <Route path="/" element={<Main alert={alert} showAlert={showAlert} mode={mode}/>}>
          </Route>
          <Route path="/about" element={<About  />}>
          </Route>
          </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
