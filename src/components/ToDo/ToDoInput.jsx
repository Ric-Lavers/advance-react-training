import React, { useState, forwardRef } from 'react';

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

const ToDoItem = React.memo(
  forwardRef(({ onSubmit }, ref) => {
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
      }
    };

    const renderOptions = React.useMemo(
      () =>
        options.map(({ label, value }) => {
          console.log('..');
          return (
            <option key={label} value={value}>
              {label}
            </option>
          );
        }),
      [options]
    );
    console.log('rendering input');
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
  }),
  (prevProps, nextProps) => {
    return prevProps.onSubmit === nextProps.onSubmit;
  }
);

ToDoItem.defaultProps = {
  onSubmit: () => {}
};

export default ToDoItem;
