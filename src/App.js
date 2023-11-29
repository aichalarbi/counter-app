import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CounterComponent from './count';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  handleToggleVisibility = () => {
    this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
  };

  handleIncrement = () => {
    console.log('Incremented');
  };

  handleDecrement = () => {
    console.log('Decremented');
  };

  handleReset = () => {
    console.log('Reset');
  };

  render() {
    const { isVisible } = this.state;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        {isVisible && <h1>React Counter App</h1>}
        <Button variant="primary" onClick={this.handleToggleVisibility}>
          {isVisible ? 'Hide' : 'Show'} Counter
        </Button>
        {isVisible && (
          <CounterComponent
            isVisible={isVisible}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onToggleVisibility={this.handleToggleVisibility}
            onReset={this.handleReset}
          />
        )}
      </div>
    );
  }
}

export default App;
