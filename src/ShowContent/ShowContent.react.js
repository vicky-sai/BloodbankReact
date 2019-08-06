import React from 'react';

const ShowContent = (props) => {

    return (
        <div >

             <h3>{props.request.location}</h3>
            <span><img src={props.request.imageRef} alt="abpos"></img></span>

        </div>
        

    );

}


export default ShowContent;