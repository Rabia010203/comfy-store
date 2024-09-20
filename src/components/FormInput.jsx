import React from "react";

 const FormInput = ({ type, name, label, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label capitalize" htmlFor="">{label}</label>
      <input type={type}  name={name} className={`input input-bordered ${size}`} defaultValue={defaultValue}/>
    </div>
  );
};
export default FormInput