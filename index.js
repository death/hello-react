require("./style/main.less");

var React = require("react");
var ReactDOM = require("react-dom");
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

ReactDOM.render(<App />, window.root);
