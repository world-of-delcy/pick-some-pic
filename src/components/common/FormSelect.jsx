import React from "react";
function FormSelect({ options, value, onChange }) {
  return (
    <div className="d-flex align-items-center">
      <label htmlFor="form-select" className="form-label p-2">
        <b>Quality</b>
      </label>
      <select
        id="form-select"
        className="form-select w-auto"
        aria-label="Default select example"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
