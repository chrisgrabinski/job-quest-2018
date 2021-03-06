import React from "react";
import { css } from "emotion";

const Input = ({ type, label, name, value, min, onChange }) => {
  return (
    <label>
      <span
        className={css`
          display: block;
          font-family: monospace;
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
        min={min}
        onChange={onChange}
        className={css`
          background-color: #ebebeb;
          border: 0;
          box-sizing: border-box;
          display: block;
          font-family: monospace;
          font-size: 16px;
          height: 48px;
          padding: 0 16px;
          width: 100%;
        `}
      />
    </label>
  );
};

export default Input;
