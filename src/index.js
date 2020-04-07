import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Button from './components/Button';

function App() {
  // This is just an example
  return <Button />;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
