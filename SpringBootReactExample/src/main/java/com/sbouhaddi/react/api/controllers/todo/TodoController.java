package com.sbouhaddi.react.api.controllers.todo;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sbouhaddi.react.api.model.Todo;
import com.sbouhaddi.react.api.services.TodoHardCodedService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class TodoController {

	private final TodoHardCodedService todoHardCodedService;

	@GetMapping("/{username}/todos")
	public ResponseEntity<List<Todo>> getAllTodos(@PathVariable String username) {

		List<Todo> todos = todoHardCodedService.getAllTodos();
		return ResponseEntity.ok(todos);
	}

	@GetMapping("/{username}/todos/{todo_id}")
	public ResponseEntity<Todo> getTodo(@PathVariable String username, @PathVariable long todo_id) {

		Todo todo = todoHardCodedService.findById(todo_id);
		return ResponseEntity.ok(todo);
	}

	@PostMapping("/{username}/todos/")
	public ResponseEntity<Todo> createNewTodo(@PathVariable String username, @RequestBody Todo todo) {
		Todo savedTodo = todoHardCodedService.save(todo);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(savedTodo.getId())
				.toUri();
		return ResponseEntity.created(location).body(savedTodo);

	}

	@PutMapping("/{username}/todos/{todo_id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable Long todo_id,
			@RequestBody Todo todo) {

		if (todoHardCodedService.findById(todo_id) == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(todoHardCodedService.save(todo));

	}

	@DeleteMapping("/{username}/todos/{todo_id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long todo_id) {
		Todo todo = todoHardCodedService.deleteTodoById(todo_id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();

	}

}
