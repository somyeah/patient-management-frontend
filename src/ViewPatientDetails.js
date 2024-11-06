import React, { useEffect, useState } from 'react';
import api from './Config';

function ViewPatientDetails({ patientId }) {
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        async function getPatient() {
            try {
                const response = await api.get(`/api/patients/${patientId}`);
                setPatient(response.data);
            } catch (error) {
                console.error('Error displaying patient data:', error);
            }
        }
        if (patientId) {
            getPatient();
        }
    }, [patientId]);

    if (!patient) return <p>Select a patient to view details.</p>;

    return (
        <div>
            <h2>Patient Details</h2>
            <p>Name: {patient.name}</p>
            <p>Date of Birth: {patient.date_of_birth}</p>
            <p>Address: {patient.address}</p>
            <p>Status: {patient.status}</p>
        </div>
    );
}

export default ViewPatientDetails;