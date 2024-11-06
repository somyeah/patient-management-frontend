import logo from './logo.svg';
import './App.css';

//function App() {
  //return (
   // <div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

//export default App;

import React, { useState } from 'react';
import PatientList from 'PatientList';
import PatientDetails from 'PatientDetails';
import PatientForm from 'PatientForm';

function App() {
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    const handleSelectPatient = (id) => {
        setSelectedPatientId(id);
    };

    const handlePatientAdded = () => {
        setSelectedPatientId(null);  // Refresh list after adding
    };

    return (
        <div>
            <h1>Patient Management Dashboard</h1>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div>
                    <PatientForm onPatientAdded={handlePatientAdded} />
                    <PatientList onSelectPatient={handleSelectPatient} />
                </div>
                <PatientDetails patientId={selectedPatientId} />
            </div>
        </div>
    );
}

export default App;
