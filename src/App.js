import React from 'react';

import './styles/global.css';
import Checkout from './modules/Checkout';

function App() {
  return (
    <div className="bg-gray-100 min-w-screen min-h-screen flex items-center justify-center antialiased font-sans">
      <Checkout />
    </div>
  );
}

export default App;
