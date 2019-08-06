import React from 'react';
import DataGrid from '../DataGrid/DataGrid.react';



class FetchDonors extends React.Component {
    constructor(props) {
        super(props);
        this.state ={donorList: []} 
    }

componentDidMount(){
    let url= "http://localhost:3005/bloodDonors";
    fetch(url).then(resp=>resp.json()).then(donorList=>this.setState({donorList}));
    }
    render() {
        return (
            <div >
                 <DataGrid donorList={this.state.donorList}>
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
}

export default FetchDonors;