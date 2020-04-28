import React from 'react';

function Button({ children, buttonStyle, extraClasses, ...rest }) {
  return (
    <button {...rest} className={`button button--${buttonStyle} ${extraClasses}`}>
      {children}
    </button>
  );
}

export default Button;
