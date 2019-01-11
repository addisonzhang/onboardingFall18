import React, { Component } from "react";
import Input from "./Input";
import TodoList from "./ToDoList";
import uuid from 'uuid/v4';
import {Title, Text, Box, SmallBox, SmallBox2, theme} from "./styles"
import { ThemeProvider } from 'styled-components'
// import { readdirSync } from "fs";

class TodoContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      list: [],
      filtered: [],
      query: ''
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.filterTodo = this.filterTodo.bind(this);
    this.setQuery = this.setQuery.bind(this);
  }

  addTodo = (todo) => {
    const newTodo = {string: todo, id: uuid()};
    // this.setState({list: [...this.state.list, newTodo]},
    //   () => console.log(this.state.list));
    this.setState({list: [...this.state.list, newTodo]}, () => this.filterTodo());
  }

  deleteTodo(id) {
    const arr = this.state.list;
    for(let i = 0; i < arr.length; i++) {
      if(arr[i].id === id) {
        this.state.list.splice(i, 1);
        break;
      }
    }
    this.setState({list: this.state.list}, () => this.filterTodo()); 
  }

  setQuery = event => {
    this.setState({query: event.target.value}, () => this.filterTodo());
  }

  filterTodo() {
    console.log("hellp")
    this.setState({filtered: this.state.list.filter(el => el.string.includes(this.state.query))},
    () => console.log(this.state.filtered))
    // this.setState({filtered: this.state.filter},
    //   () => console.log(this.state.list)); 
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <SmallBox>
            <Title>To Do List</Title>
            <Text>Add your todo list here!</Text>
            <TodoList todos={this.state} deleteTodo={this.deleteTodo}/>
            </SmallBox>
          <SmallBox2>
            <Input addTodo={this.addTodo} setQuery={this.setQuery} />
          </SmallBox2>
        </Box>
      </ThemeProvider>
    )
  }
}

export default TodoContainer;