import React from 'react'
import Video from './components/Video'
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
      <Video />
    </React.StrictMode>
  );
}

export default App
