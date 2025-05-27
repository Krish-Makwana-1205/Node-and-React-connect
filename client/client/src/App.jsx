import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const res = await fetch('http://localhost:5000/api/message');
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React + Node App</h1>
      <button onClick={fetchMessage}>Get Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
