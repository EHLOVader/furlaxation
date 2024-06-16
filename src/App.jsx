import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtocolDetails from './components/ProtocolDetails';
import ProtocolList from './components/ProtocolList';
import { protocols } from './data/protocols.js';
import './App.scss';

function App() {
    const [step, setStep] = useState(0);

    const path = import.meta.env.PUBLIC_URL || '';

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path={path + "/protocol/:protocolId"} element={
                        <ProtocolDetails protocols={protocols} step={step}/>
                    }/>
                    <Route path={path + "/"} element={
                        <ProtocolList protocols={protocols}/>
                    }/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;