import React from 'react';

const clear = () => {
    console.log("Clear invoked");
    return () => {
        console.log("Inner clear");
    }
}

const Search = () => {

    return (
        <div >
            <button className="fa fa-search" onClick={(event)=>{console.log(event)}}>Search</button>
            <button className="fa fa-crosshairs" onClick={clear()}>Search</button>
        </div>
    );

}

export default Search;