import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
      this.props.onIncrement();
    });
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState((prevState) => ({ count: prevState.count - 1 }), () => {
        this.props.onDecrement();
      });
    }
  };

  handleReset = () => {
    this.setState({ count: 0 }, () => {
      this.props.onReset();
    });
  };

  render() {
    const { isVisible, onToggleVisibility } = this.props;
    const { count } = this.state;

    return (
      <div>
        {isVisible && (
          <Form.Group controlId="counterForm">
            <Button variant="success" onClick={this.handleIncrement}>
              +
            </Button>{' '}
            <strong>{count}</strong>{' '}
            <Button variant="danger" onClick={this.handleDecrement}>
              -
            </Button>{' '}
            <Button variant="warning" onClick={this.handleReset}>
              Reset
            </Button>
          </Form.Group>
        )}
        <Button variant="primary" onClick={onToggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Counter
        </Button>
      </div>
    );
  }
}

export default CounterComponent;
