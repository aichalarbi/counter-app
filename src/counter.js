
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CounterComponent = ({ isVisible, onIncrement, onDecrement, onToggleVisibility, onReset }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onIncrement();
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      onDecrement();
    }
  };

  const handleReset = () => {
    setCount(0);
    onReset();
  };

  return (
    <div>
      {isVisible && (
        <Form.Group controlId="counterForm">
          <Button variant="success" onClick={handleIncrement}>
            +
          </Button>{' '}
          <strong>{count}</strong>{' '}
          <Button variant="danger" onClick={handleDecrement}>
            -
          </Button>{' '}
          <Button variant="warning" onClick={handleReset}>
            Reset
          </Button>
        </Form.Group>
      )}
    </div>
  );
};

export default CounterComponent;
