import React from 'react';
import {Text2} from './styles';

const TodoList = props => (
  <React.Fragment>
    <ul>
      {
        props.todos.filtered.map((obj, ind) => 
          <li key={ind} id={obj.id}>{obj.string}
          <button onClick={() => props.deleteTodo(obj.id)}>Delete</button>
          </li>
        )
      }
    </ul>
    {
      //!props.todos.list.length && <p>No Todos to complete</p>
      props.todos.list.length ? (!props.todos.filtered.length && <Text2>No Results Found</Text2>) : <Text2>No Todos to complete</Text2>
    }
  </React.Fragment>
);


export default TodoList;