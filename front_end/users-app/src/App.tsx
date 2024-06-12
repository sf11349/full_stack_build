import React from 'react';
import UserSearch from './components/UserSearch';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>User Search App</h1>
      <UserSearch />
    </div>
  );
};

export default App;
