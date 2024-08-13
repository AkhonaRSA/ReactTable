import React from 'react';
import TableRows from './tableRows';
import '../index.css';



const Consultant = () => {
    const data = [
        { roomNo: '01', name: 'George', surname: 'Mtsipe', cellNumber: '085 298 6748', appointmentDateTime: '28/08/2024 14:48 PM', specialty: 'Ophthalmology', designation: 'Doctor', status: 'In-progress' },
        { roomNo: '02', name: 'Hope', surname: 'Matsimela', cellNumber: '01245 78230', appointmentDateTime: '28/08/2024 14:55 PM', specialty: 'Public Health', designation: 'Nurse', status: 'Available' },
        { roomNo: '03', name: 'Lerato', surname: 'Matjoke', cellNumber: '01245 78230', appointmentDateTime: '28/08/2023 13:55 PM', specialty: 'Pediatric', designation: 'Nurse', status: 'In-progress' },
    ];

    return (
        <div className="container">
            <header className="header">
                <div className="logo">ClinicCompas</div>
                <div className="dashboard">Dashboard</div>
                <input className="search-bar" type="text" placeholder="Search..." />
            </header>

            <div className='title_page'>
            <h1>Consultation Room</h1>
            </div>
           
            <div className='down'>
            <h3>Doctors/Nurses Information</h3>
            </div>

            <div className="content">
              
                <table className="consultation-table">
                    <thead>
                        <tr>
                            <th>Room NO</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Cell Number</th>
                            <th>Appointment Date/Time</th>
                            <th>Specialty</th>
                            <th>Designation</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <TableRows key={index} data={row} />
                        ))}
                    </tbody>
                </table>
               
            </div>
             <div className="button-container">
                    <button className="back-button">Back</button>s
                    <button className="view-staff-button">View Staff</button>
                </div>
        </div>
    );
};

export default Consultant;