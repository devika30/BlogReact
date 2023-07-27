import React from "react";

function DeleteButton(props){
    console.log(props)

    return(
        <button onClick={props.deleteMethod}>Delete</button>
    )
}

export default DeleteButton
