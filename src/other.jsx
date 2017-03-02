import React from 'react';
import ReactDOM from 'react-dom';

var AnotherComponent = React.createClass({
  render: function() {
    return (
      <div>Hello Again</div>
    );
  }
});


ReactDOM.render(
  <AnotherComponent/>,
  document.getElementById("react-container")
);