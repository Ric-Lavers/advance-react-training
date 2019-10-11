import React from 'react';
import { AppContext } from './Context_4';

const stressLevel = {
  fibonacci: {
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
  },
  linear: {
    0: '😁',
    1: '😄',
    2: '😃',
    3: '😀',
    4: '😊',
    5: '🙂',
    6: '😐',
    7: '🤨',
    8: '🙁',
    9: '😟',
    10: '😣',
    11: '😖',
    12: '😫',
    13: '😭'
  }
};

const findEmoji = (amount, scaleType) => {
  let key = 0;
  for (let k in stressLevel[scaleType]) {
    if (amount > k) {
      key = k;
    }
  }

  return stressLevel[scaleType][key];
};

const NavBar = () => {
  const { tasksTotal, addOne, scaleType, setScaleType } = React.useContext(
    AppContext
  );

  const emotion = findEmoji(tasksTotal, scaleType);
  const handleSetScaleType = ({ target: { value } }) => setScaleType(value);

  return (
    <header>
      <button onClick={addOne}>add one</button>
      <span className="stress-level" role="img" title={String(tasksTotal)}>
        {emotion}
      </span>
      <select name="scale" onChange={handleSetScaleType}>
        <option value="fibonacci">fibonacci</option>
        <option value="linear">linear</option>
      </select>
    </header>
  );
};

export default NavBar;
