// Load React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');

// Load CSS
require("./css/completeditems.css");

// Create Completed Item Component
var CompletedItems = React.createClass({
    // render of completed item
    render: function(){
        return (
            <div id="completed-items">
                <p id="completed-to-do-header">Completed To-Dos!</p>
                <ul>
                    <li>
                        <div className="completed-to-do-item">
                            <span className="completed-item">{this.props.item}</span>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = CompletedItems;
