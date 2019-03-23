import React from "react";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <label>
      <span>{label}</span>
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
