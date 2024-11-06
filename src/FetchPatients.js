import React, { useEffect, useState } from 'react';
import api from './Config';

function FetchPatients({ onSelectPatient }) {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function getPatients() {
            try {
                const response = await axios.get('/api/patients');
                setPatients(response.data);
            } catch (error) {
                console.error('Error viewing patient and status:', error);
            }
        }
        getPatients();
    }, []);

    return (
        <div>
            <h2>Patient List</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.patient_id} onClick={() => onSelectPatient(patient.patient_id)}>
                        {patient.patient_name} - Status: {patient.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchPatients;