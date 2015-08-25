var React = require("react");
var ReactBootstrap = require("react-bootstrap");
var _ = require("lodash");
var superagent = require("superagent");

var App = React.createClass({
    render: function() {
        return (
                <h1>Hello, React</h1>
        );
    }
});

React.render(<App />, document.body);
