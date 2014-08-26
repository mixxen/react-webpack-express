/** @jsx React.DOM */
var React         = require('react');
var TestComponent = require('./TestComponent.jsx');

React.renderComponent(
  <TestComponent/>,
  document.getElementById("react-container")
);