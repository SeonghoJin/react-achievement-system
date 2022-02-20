import React from 'react';
import {useAchieve} from "react-achievement-system";
import {achievementStore} from "./achieve";


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
