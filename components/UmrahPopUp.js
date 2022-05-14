import React from "react";
function UmrahPopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {/* <button className="close-btn" onClick={() => props.setTrigger(false)}> */}
        <i
          className="close-btn fa-solid fa-circle-xmark fa-2x text-danger pr-4"
          onClick={() => props.setTrigger(false)}
        ></i>
        {/* </button> */}
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default UmrahPopUp;
