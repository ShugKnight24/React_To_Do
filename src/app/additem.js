// Load React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');

// Load CSS
require("./css/additem.css");

// Create add item component
var AddItem = React.createClass({
    // render of add item
    render: function() {
        return(
            <form id="add-to-do" onSubmit={this.addItem}>
                <input className="add-text" type="text" ref="newItem" placeholder="New To-Do" required/>
                <input className="add-button" type="submit" value="Add a To-Do" />
            </form>
        );
    },

    // Custom Functions
    addItem: function(event) {
        event.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
        this.refs.newItem.value = "";
    }
});

// Export to index.js
module.exports = AddItem;
