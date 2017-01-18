// Load React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');

// Load CSS
require("./css/todoitem.css");

// Create todo item component
var ToDoItem = React.createClass({
    // Define component's initial state
    getInitialState: function(){
        return {
            hover: false
        }
    },

    // Render
    render: function() {
        var toDoStyle;
        if (this.state.hover) {
          toDoStyle = {color: '#D62828', textDecoration: 'line-through', textTransform: 'uppercase'}
        } else {
          toDoStyle = {}
        }
        return(
            <li>
                <div className="to-do-item">
                    <span className="item-name" style={toDoStyle}>{this.props.item}</span>
                    <span className="delete-item" onClick={this.deleteItem} onMouseEnter={this.toDoHover} onMouseLeave={this.toDoHover}> x </span>
                </div>
            </li>
        );
    },

    // Custom Functions

    // Delete To-Dos
    deleteItem: function(){
        this.props.onDelete(this.props.item);
    },

    // Change To-Dos style with hover on delete-item
    toDoHover: function(){
        this.setState({hover: !this.state.hover})
    }
});

// Export to index.js
module.exports = ToDoItem;
