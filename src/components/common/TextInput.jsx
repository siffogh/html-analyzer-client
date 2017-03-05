import React from 'react';
import './TextInput.scss';

export default ({ name, value, onChange, label, info, success, error, warning, placeholder, type }) => {
  const feedback = info || success || error || warning;
  let feedbackType = 'alert-';
  if (info) {
    feedbackType += 'info';
  } else if (success) {
    feedbackType += 'success';
  } else if (error) {
    feedbackType += 'danger';
  } else if (warning) {
    feedbackType += 'warning';
  }

  let feedbackP = '';
  if (feedback) {
    feedbackP = <p className={`feedback ${feedbackType}`}>{feedback}</p>;
  }
  return (
    <div className="form-group">
      <label className="form-control-label" htmlFor={name}>{label}</label>
      <input type={type || 'text'} id={name} className="form-control" value={value} placeholder={placeholder} onChange={onChange} required />
      {feedbackP}
    </div>
  );
};
