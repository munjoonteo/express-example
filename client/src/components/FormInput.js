import React from "react";

import "../style/Form.css";

const FormInput = ({ value, setter, placeholder }) => {
  return (
    <div className="form-entry">
      <label className="form-label">{placeholder}</label>
      <input
        className="form-input"
        value={value}
        onChange={e => setter(e.target.value)}
      />
    </div>
  );
};

export default FormInput;
