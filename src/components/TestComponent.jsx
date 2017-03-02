import React from 'react';

import Actions from '../actions/Actions';
import Store from '../stores/Store';

class TestComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = Store.get();
    this.changeEventHandler = this.changeEventHandler.bind(this); //properties do not auto bind
  }
  componentDidMount() {
    Store.addListener('change', this.changeEventHandler);
  }
  changeEventHandler() {
    this.setState(Store.get());
  }
  handleChange(event) {
    Actions.set(event.target.value);
  }
  handleButtonClick(event) {
    Actions.add(1);
  }
	render() {
    return (
    	<div>
    		Hello <input onChange={this.handleChange} defaultValue={this.state.value} type="text"/>
    		<button onClick={this.handleButtonClick}>+1</button>
        <hr/>
        <span>{this.state.count}: {this.state.value}</span>
     	</div>
  )}
}

export default TestComponent;