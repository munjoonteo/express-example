import React from "react";

const FormInput = props => {
  return (
    <div className="form-input">
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
