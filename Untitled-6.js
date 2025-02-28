// CONFIDENTIAL - NDA PROTECTED - Created by Ervin Radosavlevici
// Contact: ervin210@sky.com, ervin210@icloud.com
// Licensed under the Master License Agreement. See MASTER_LICENSE file for details.

import React, { useState } from 'react';

const App = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const executeCommand = () => {
    fetch('http://localhost:5000/api/remote-commands/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    })
      .then((response) => response.json())
      .then((data) => setOutput(data.output))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <h1>Security Assistant</h1>
      <input
        type="text"
        placeholder="Enter command"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
      />
      <button onClick={executeCommand}>Execute</button>
      <div>
        <h2>Output:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default App;