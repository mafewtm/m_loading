import React from 'react'
import Media from './components/Media'
import Progress from './components/Progress';

function App() {
  return (
    <React.StrictMode>
      <Progress />
      <div className="title">
        <h1>Server Name</h1>
      </div>
      <div className="description">
        <h2>Server Description</h2>
      </div>
      <Media />
    </React.StrictMode>
  );
}

export default App
