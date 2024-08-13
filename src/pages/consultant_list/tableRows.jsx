import React from 'react';
import '../../App.css';


const TableRows = ({ data }) => {
    return (
        <tr>
            <td>{data.roomNo}</td>
            <td>{data.name}</td>
            <td>{data.surname}</td>
            <td>{data.cellNumber}</td>
            <td>{data.appointmentDateTime}</td>
            <td>{data.specialty}</td>
            <td>{data.designation}</td>
            <td className={data.status === 'In-progress' ? 'status in-progress' : 'status available'}>
                {data.status}
            </td>
        </tr>
    );
};

export default TableRows;