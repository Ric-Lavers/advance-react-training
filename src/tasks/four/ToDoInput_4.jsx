import React, { useState, createRef, useContext, memo } from 'react';
import { AppContext } from './Context_4';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
  { value: 8, label: '8' },
  { value: 13, label: '13' },
  { value: 21, label: '21' }
];

const ToDoInput = ({ onSubmit }) => {
  const { scaleType } = useContext(AppContext);

  const ref = createRef();
  const [selectedOption, setOption] = useState('');
  const [input, setInput] = useState('');

  const handleInputChange = ({ target: { value } }) => setInput(value);
  const handleValueChange = ({ target: { value } }) => {
    setOption(parseInt(value));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (input && selectedOption) {
      onSubmit(input, selectedOption);
      setInput('');
      setOption('');
      ref.current.focus();
    }
  };

  const renderOptions = () => {
    console.log(
      '%c select options',
      'font-weight: bold',
      "- this shouldn't render on every input change"
    );
    return options.map(({ label, value }, i) => {
      const v = scaleType === 'fibonacci' ? value : i + 1;
      return (
        <option key={label} value={v}>
          {scaleType === 'fibonacci' ? label : String(i + 1)}
        </option>
      );
    });
  };
  console.log(
    '%c ToDoInput',
    'font-weight: bold',
    '- should only be called with a input change '
  );

  return (
    <form className="todo-item add-task">
      <input
        ref={ref}
        onChange={handleInputChange}
        name="newTitle"
        value={input}
        placeholder="Enter new task"
      />

      <label>
        <select value={selectedOption} onChange={handleValueChange}>
          <option value="">Please select</option>
          {renderOptions()}
        </select>
      </label>
      <input onClick={handleSubmit} type="submit" />
    </form>
  );
};

ToDoInput.defaultProps = {
  onSubmit: () => {}
};

// export default ToDoInput;
export default memo(ToDoInput);
