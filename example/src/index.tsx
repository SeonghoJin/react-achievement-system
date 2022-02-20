import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AchievementSystemRoot} from "react-achievement-system";
import { achievementStore } from './achieve';

ReactDOM.render(
  <React.StrictMode>
      <AchievementSystemRoot store={achievementStore}>
          <App />
      </AchievementSystemRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
