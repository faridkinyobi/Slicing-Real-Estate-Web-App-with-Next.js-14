import React from "react";

export default function SearchForm({
  inputClaname,
  btnClaname,
  WrapperClassName,
  placeholder,
}) {
  return (
    <div
      className={`flex gap-3 md:max-w-[578px] md:mx-auto ${WrapperClassName}`}
    >
      <input
        placeholder={placeholder}
        type="text"
        className={`input w-full ${inputClaname} placeholder:text-sm`}
      />
      <button className={`btn btn-primary ${btnClaname}`}>Search</button>
    </div>
  );
}
