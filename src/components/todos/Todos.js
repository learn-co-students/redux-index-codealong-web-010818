import React, { Component } from 'react';
import Todo from './Todo';

export default class Todos extends Component {
	render() {
		const todos = this.props.store.getState().todos.map((todo, index) => {
			return <Todo text={todo.text} key={index} />;
		});

		return (
			<ul>
				To Do:
				{todos}
			</ul>
		);
	}
}
