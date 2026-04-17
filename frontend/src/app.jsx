import '/App.css';
import CreateModule from './components/CreateModule';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<CreateModule />} />
            <Route path="/list-modules" element={<ListModules />} />
        </Routes>
        </BrowserRouter>
    
)};

export default App;