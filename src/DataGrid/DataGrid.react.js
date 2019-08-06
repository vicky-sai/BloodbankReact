import React from 'react';
import PropTypes from 'prop-types';


const DataGrid = (props) => {

    return (
        <div >
            <table className="table table-striped table-hover">
                {props.children}
                <tbody>
                    {
                        props.donorList.map((eachDonor,index)=>{
                                return  <tr key={index}>
                                        <td>
                                            {eachDonor.id}
                                        </td>   
                                        <td>
                                            {eachDonor.donorName}
                                        </td>
                                    
                                        <td>
                                            {eachDonor.bloodGroup}
                                        </td>
                                        <td>
                                            {eachDonor.lastDonated}
                                        </td>
                                    </tr>
                            }
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    );

}

let Donor = PropTypes.shape({
    donorName:PropTypes.string.isRequired,
    phoneNumber:PropTypes.number.isRequired,
    bloodGroup:PropTypes.oneOf(['apos','bpos','abpos','opos']),
    donorUnits:PropTypes.number.isRequired
});

DataGrid.propTypes = {
    donorList:PropTypes.arrayOf(Donor).isRequired

}



export default DataGrid;