import React from 'react';

export const renderField = ({ 
    input, 
    label, 
    type,
    textarea,
    meta: { touched, error, warning, invalid } 
  }) => {
  const textareaType = <textarea 
    {...input} 
    placeholder={label} 
    type={type} 
    className={`form-control ${touched && invalid ? 'has-danger' : ''}`}
  />;

  const inputType = <input {...input} 
    placeholder={label} 
    type={type} 
    className={`form-control ${touched && invalid ? 'has-danger' : ''}`}
  />;
  
  return (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
      <label>{label}</label>
      { textarea ? textareaType : inputType }

      { touched && ( 
        error && 
        <div className="text-help">
          {error} 
        </div>
      )}
    </div>
  )
};