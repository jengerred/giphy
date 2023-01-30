import React from 'react';

class ToDoClass extends React.Component {
    state = {
        toDoInput: '',
        toDoList: [
            'read',
            'bike',
            'swim'
        ]
    }
    componentDidMount = () => {
        console.log("the component has mounted")
    }
    componentDidUpdate = () => {
        function tellMeIUpdated(){
            console.log("I Updated")
        }
    }
    addToDo = () => {
        if(!this.state.toDoInput) return;
        this.setState({toDoList: [...this.state.toDoList, this.state.toDoInput]})
    }
    handleChangeInput = (event) => {
        this.setState({toDoInput: event.target.value})
    }
    render(){
        return(
            <div>
                <h2>To DO Class</h2>
                <input value={this.state.toDoInput} onChange={this.handleChangeInput}></input>
                <button onClick={this.addToDo}>Add To Do</button>
                <ul>
                    {this.state.toDoList.map((item, key) => {
                        return (
                        <li key={key}>{item}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default ToDoClass;