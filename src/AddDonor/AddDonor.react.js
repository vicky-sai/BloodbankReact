import React from 'react';



class AddDonor extends React.Component {
    
    constructor(props) {
            super(props);
            this.state={
                newDonor : {
                "id" :0,
                "donorName":'',
                "bloodGroup":'',
                "lastDonated":''
            }
        }
    }

    handleSubmit=(event) => {
        event.preventDefault();
        //console.log(this.state.newDonor);

        let url="http://localhost:3005/bloodDonors";
        fetch(url,{
            method:"POST",
            body:JSON.stringify(this.state.newDonor),
            headers: {
                "Content-Type":"application/json"   
            }
        }).then(resp=> console.log(resp.json()));
    }

    handleChange =(event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        let name= event.target.name;
        let value = event.target.value;

        this.setState( prevState => ({newComment: {...prevState.newDonor, [name]:value}}))
    }

    render() {
        return (         
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">Id :</label>
                    <input type="text" name="id" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;
                    <label htmlFor="">Name :</label>
                    <input type="text" name="donorName" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;
                    <label htmlFor="">Blood Group :</label>
                    <input type="text" name="bloodGroup" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;
                    <label htmlFor="">Last Donated :</label>
                    <input type="date" name="lastDonated" onChange={this.handleChange}/>&nbsp;&nbsp;&nbsp;
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default AddDonor;