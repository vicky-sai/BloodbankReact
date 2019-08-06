import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';
import PropTypes from 'prop-types';

//let donorName = "Ramesh";
let donorList = [
    {donorName:"Josh", phoneNumber: 9578623456, bloodGroup:"apos", donorUnits: 10},
    {donorName:"Achee", phoneNumber:7587244242, bloodGroup:"bpos", donorUnits: 17},
    {donorName:"Vicky", phoneNumber:9524704474, bloodGroup:"opos", donorUnits: 7}
];
const ShowDonor = (props) => {

    return (
        <div >
            <h2>
                {props.title}
            </h2>
            <DataGrid donorList={donorList}>
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Phone Number</th>
                            <th>Blood Group</th>
                            <th>Donor Units</th>
                        </tr>
                        
                    </thead>
            </DataGrid> 
        </div>
    );

}
ShowDonor.propTypes = {
    title: PropTypes.string.isRequired
};  

export default ShowDonor;