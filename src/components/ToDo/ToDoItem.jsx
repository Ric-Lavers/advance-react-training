import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';

import { AppContext } from '../../context/AppContext';

const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
  { value: 8, label: '8' },
  { value: 13, label: '13' },
  { value: 21, label: '21' }
];

const ToDoItem = React.forwardRef(
  ({ id, title, rating, addType, onMouseLeave }, ref) => {
    const [value, setValue] = useState(
      options.find(({ value }) => value === rating)
    );
    const { addToTotal } = useContext(AppContext);
    const currentValue = value ? value.value : 0;
    useEffect(() => {
      addToTotal(rating);
    }, []);

    const handleMouseLeave = () => {
      onMouseLeave(currentValue, id);
    };
    useEffect(() => {
      addType && handleMouseLeave();
    }, [currentValue]);

    const handleChange = option => {
      let diff = currentValue - option.value;
      addToTotal(diff);
      setValue(option);
    };

    return (
      <div
        ref={ref}
        onMouseLeave={handleMouseLeave}
        className={`todo-item ${addType ? 'add-task' : ''}`}
      >
        <h3 contentEditable={addType} suppressContentEditableWarning>
          {title}
        </h3>
        <label>
          <Select
            className="select"
            placeholder="Enter difficulty"
            name="difficulty"
            onChange={handleChange}
            options={options}
            value={value}
          />
        </label>
      </div>
    );
  }
);

ToDoItem.defaultProps = {
  title: 'Title',
  rating: '',
  addType: false,
  ref: null,
  onMouseLeave: () => {}
};

export default ToDoItem;
