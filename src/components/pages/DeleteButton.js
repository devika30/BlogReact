import React from "react";
function DeleteButton(props) {
  console.log(props);
  return (
    <div className="deleteBtnDiv">
      <button className="deleteButtonStyle" onClick={props.deleteMethod}>Delete</button>
    </div>
  );
}

export default DeleteButton;
