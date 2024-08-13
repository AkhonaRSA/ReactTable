import React from 'react';
import '../../App.css';


const Staff = () => {
    // You can populate this with actual staff data
    const staffData = [
        { id: 1, name: 'George Mtsipe', position: 'Doctor', department: 'Ophthalmology' },
        { id: 2, name: 'Hope Matsimela', position: 'Nurse', department: 'Public Health' },
        { id: 3, name: 'Lerato Matjoke', position: 'Nurse', department: 'Pediatric' },
    ];

    return (
        <div className="container">
            <header className="header">
                <div className="logo">ClinicCompas</div>
                <div className="dashboard">Staff Details</div>
            </header>

            <div className="content">
                <h1>Staff Information</h1>
                <table className="staff-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffData.map((staff) => (
                            <tr key={staff.id}>
                                <td>{staff.id}</td>
                                <td>{staff.name}</td>
                                <td>{staff.position}</td>
                                <td>{staff.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Staff;