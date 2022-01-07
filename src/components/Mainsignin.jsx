import React from 'react';

function Mainsignin({ label, ...props }) {
  return (
    <div className='flex flex-col'>
      <label className='mb-1' htmlFor={props.email}>
        {label}{' '}
      </label>
      <input
        onBlur={props.onBlur}
        className={` mt-2 mb-5 border-400 border-solid boder-2 ${
          props.touched && props.error ? 'bg-red-500' : ''
        }`}
        {...props}
      />
      <span>{props.touched[props.name] && props.error[props.name]}</span>
    </div>
  );
}

export default Mainsignin;
