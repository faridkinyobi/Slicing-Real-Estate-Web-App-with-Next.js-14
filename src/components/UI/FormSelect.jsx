import React from "react";

export default function FormSelect({ label, option = [], value, onchange }) {
  return (
    <label className="form-control w-full max-w-xs">
      {label && (
        <div className="label md:hidden">
          <span className="label-text font-semibold">{label}</span>
        </div>
      )}
      <select
        className="select select-bordered"
        value={value}
        onChange={onchange}
      >
        <option value="">{label}</option>
        {option.map((items) => {
          return <option key={items.value} value={items.value}>{items.label}</option>;
        })}
      </select>
    </label>
  );
}
