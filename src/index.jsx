/** @jsx React.DOM */
var React         = require('react');
var TestComponent = require('./components/TestComponent.jsx');

React.render(
  <TestComponent/>,
  document.getElementById("react-container")
);