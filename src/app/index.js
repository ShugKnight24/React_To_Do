// Load React and ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');

// Style Normalization
require("./css/normalize.css");

// Load Styles
require("./css/index.css");

// Module requires
var ToDoItem = require("./todoitem");
var AddItem = require("./additem");
var CompletedItem = require("./completeditems");
var LogoIcon = require("./logo-icon");

// Creating a component
var ToDoComponent = React.createClass({

    // Define initial state
    getInitialState: function(){
        return {
            todos: ["Learn React", "Make a sweet to-do app", "???", "Profit"],
        }
    },
    // render
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return (
                <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));
        return(
            <div id="to-do-list-container">
                <div id="shumunov-label">
                    <div id="header-icon">
                        <LogoIcon/>
                        <p>Shumunov Paper Company</p>
                    </div>
                    <div id="label-text">
                        <p>Shumunov Jr. Legal Pads</p>
                    </div>
                </div>
                <div id="to-do-list">
                    <p id="to-do-header">Discipline Equals Freedom</p>
                    <ul>{todos}</ul>
                    <AddItem onAdd={this.onAdd}/>
                    <CompletedItem/>
                </div>
            </div>
        );
    },

    // Custom Functions

    // Deleting an Item from the to-do list
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    // Adding an Item to the to-do list
    onAdd: function(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});

// Passing ToDoComponent into the HTML via the React DOM
ReactDOM.render(<ToDoComponent/>, document.getElementById('site-wrapper'));
