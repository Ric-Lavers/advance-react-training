import React, { useState, forwardRef, createRef } from 'react';

const options = [
  { value: '', label: 'Please select' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
  { value: 8, label: '8' },
  { value: 13, label: '13' },
  { value: 21, label: '21' }
];

const ToDoInput = ({ onSubmit }) => {
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
  console.log('rending input');
  const renderOptions = React.useMemo(
    () =>
      options.map(({ label, value }) => {
        console.log('..');
        return (
          <option key={label} selected={value === selectedOption} value={value}>
            {label}
          </option>
        );
      }),
    [selectedOption]
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
        <select selected={selectedOption} onChange={handleValueChange}>
          {renderOptions}
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
export default React.memo(ToDoInput, (prevProps, nextProps) => {
  for (let key in nextProps) {
    if (nextProps[key] === prevProps[key]) return true;
  }
  return false;
});
