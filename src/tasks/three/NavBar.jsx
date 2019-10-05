import React from 'react';
import { AppContext } from '../../context/AppContext';
import fibonacci from '../../utils/fibonacci';

const stressLevel = {
  0: '😁',
  1: '😄',
  2: '😃',
  3: '😀',
  5: '😊',
  8: '🙂',
  21: '😐',
  13: '🤨',
  34: '🙁',
  42: '😟',
  55: '😣',
  63: '😖',
  71: '😫',
  79: '😭'
};

const findEmoji = amount => {
  let key = 0;
  for (let k in stressLevel) {
    if (amount > k) {
      key = k;
    }
  }

  return stressLevel[key];
};

const NavBar = () => {
  const { tasksTotal, addOne } = React.useContext(AppContext);

  const emotion = findEmoji(tasksTotal);

  return (
    <header>
      <button onClick={addOne}>add one</button>
      <span className="stress-level" role="img">
        {emotion}
      </span>
    </header>
  );
};

export default NavBar;
