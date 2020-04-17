package com.sbouhaddi.react.api.services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sbouhaddi.react.api.model.Todo;

@Service
public class TodoHardCodedService {

	private static List<Todo> todos = new ArrayList<>();
	private static Long idTodo = 0L;

	static {
		todos.add(Todo.builder().id(++idTodo).username("root").description("Learn React").targetDate(new Date())
				.isDone(false).build());
		todos.add(Todo.builder().id(++idTodo).username("root").description("Learn Angular").targetDate(new Date())
				.isDone(false).build());
		todos.add(Todo.builder().id(++idTodo).username("root").description("Learn DevOps").targetDate(new Date())
				.isDone(true).build());
	}

	public List<Todo> getAllTodos() {
		return todos;
	}

	public Todo deleteTodoById(long todo_id) {
		Todo todo = findById(todo_id);
		if (todo != null)
			todos.remove(todo);
		else
			return null;
		return todo;
	}

	public Todo findById(long todo_id) {
		Todo todo = todos.stream().filter(customer -> customer.getId() == todo_id).findAny().orElse(null);
		return todo;
	}

	public Todo save(Todo todo) {
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idTodo);
			todos.add(todo);
		} else {
			deleteTodoById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

}
