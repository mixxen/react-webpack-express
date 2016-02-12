var React         = require('react'),
    ReactDOM      = require('react-dom'),
    TestComponent = require('./components/TestComponent.jsx');

ReactDOM.render(
  <TestComponent/>,
  document.getElementById("react-container")
);