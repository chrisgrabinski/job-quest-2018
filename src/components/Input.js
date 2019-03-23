import React from "react";
import { css } from "emotion";

const Input = ({ type, label, name, value, onChange }) => {
  return (
    <label>
      <span
        className={css`
          display: block;
          font-size: 12px;
          margin-bottom: 4px;
        `}
      >
        {label}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={css`
          border-radius: 5px;
          border: 0;
          box-sizing: border-box;
          display: block;
          height: 48px;
          padding: 0 16px;
          width: 100%;
        `}
      />
    </label>
  );
};

export default Input;
