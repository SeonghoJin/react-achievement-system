import React from 'react';
import {achievementStore} from "./achieve";
import { useAchieve } from 'react-achievement-system';


function App() {

  const {achieve} = useAchieve(achievementStore);

  return (
    <div className="App">
      <button onClick={() => achieve('hi')}>hi</button>
      <button onClick={() => achieve('hello')}>hello</button>
    </div>
  );
}

export default App;

