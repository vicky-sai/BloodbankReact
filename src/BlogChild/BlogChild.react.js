import React from 'react';



const BlogChild = (props) => {
    //console.log('Child called');
    return (
        <div >
            <button className="fa fa-thumbs-down" onClick={props.clapCount}></button>   
        </div>
    );

}

export default BlogChild;