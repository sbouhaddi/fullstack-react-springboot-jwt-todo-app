package com.sbouhaddi.react.api.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sbouhaddi.react.api.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);
	
}
