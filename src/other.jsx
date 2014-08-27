/** @jsx React.DOM */
var React         = require('react');

var AnotherComponent = React.createClass({
  render: function() {
    return (
      <div>Hello Again</div>
    );
  }
});


React.renderComponent(
  <AnotherComponent/>,
  document.getElementById("react-container")
);