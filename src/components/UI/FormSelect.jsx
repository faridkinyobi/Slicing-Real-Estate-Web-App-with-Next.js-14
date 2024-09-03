import React from "react";

export default function FormSelect() {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text font-semibold">locations</span>
      </div>
      <select className="select select-bordered">
        <option disabled selected>
        Locations
        </option>
        <option>Star Wars</option>
        <option>Harry Potter</option>
        <option>Lord of the Rings</option>
        <option>Planet of the Apes</option>
        <option>Star Trek</option>
      </select>
    </label>
  );
}
