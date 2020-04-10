import React from 'react';

import './styles/global.css';
import CheckoutForm from './components/CheckoutForm';

function App() {
  return (
    <div className="bg-gray-200 min-w-screen min-h-screen flex items-center justify-center">
      <CheckoutForm />
    </div>
  );
}

export default App;
