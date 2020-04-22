import React from 'react';

function Button({ children, style, extraClasses, ...rest }) {
  return (
    <button {...rest} className={`button button--${style} ${extraClasses}`}>
      {children}
    </button>
  );
}

export default Button;
