/** @jsx React.DOM */
var React         = require('react');

var AnotherComponent = React.createClass({
  render: function() {
    return (
      <div>Hello Again</div>
    );
  }
});


React.render(
  <AnotherComponent/>,
  document.getElementById("react-container")
);