import React, { useState } from 'react';
import api from './Config';

function AddPatientData({ newPatient }) {
    const [formDetails, setFormDetails] = useState({
        name: '',
        date_of_birth: '',
        address: '',
        status: 'Inquiry',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({ ...formDetails, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/patients', formDetails);
            newPatient();
            setFormDetails({
                name: '',
                date_of_birth: '',
                address: '',
                status: 'Inquiry',
            });
        } catch (error) {
            console.error('Error adding patient data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Patient</h2>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={formDetails.name}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date_of_birth"
                value={formDetails.date_of_birth}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="address"
                placeholder="Address"
                value={formDetails.address}
                onChange={handleChange}
                required
            />
            <select name="status" value={formDetails.status} onChange={handleChange}>
                <option value="Inquiry">Inquiry</option>
                <option value="Onboarding">Onboarding</option>
                <option value="Active">Active</option>
                <option value="Churned">Churned</option>
            </select>
            <button type="submit">Add Patient</button>
        </form>
    );
}

export default AddPatientData;