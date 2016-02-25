var React = require('react'),
    Actions = require('../actions/Actions'),
    Store = require('../stores/Store');

var TestComponent = React.createClass({
  getInitialState: function() {
    return Store.get();
  },
  componentDidMount: function() {
    Store.addListener('change', this.changeEventHandler);
  },
  changeEventHandler: function() {
    this.setState(Store.get());
  },
  handleChange: function(event) {
    Actions.set(event.target.value);
  },
  handleButtonClick: function(event) {
    Actions.add(1);
  },
	render: function() {
    return (
    	<div>
    		Hello <input onChange={this.handleChange} defaultValue={this.state.value} type="text"/>
    		<button onClick={this.handleButtonClick}>+1</button>
        <hr/>
        <span>{this.state.count}: {this.state.value}</span>
     	</div>
  )}
});

module.exports = TestComponent;