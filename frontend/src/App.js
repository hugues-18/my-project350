import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Modules from './components/Modules';
import Exam from './components/Exam';
import AboutUs from './components/AboutUs';
import CreateModule from './components/CreateModule';
 
function App() {
  return (
    <div>
    <Router>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/modules' element={<Modules />} />
          <Route path='/Exam' element={<Exam />} /> 
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CreateModule" element={<CreateModule />} />
        </Routes>
    
    </Router>
   
   </div>
  );

}

export default App;
