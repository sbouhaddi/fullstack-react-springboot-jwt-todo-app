package com.sbouhaddi.react.api.helloWorld;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

	@GetMapping
	@RequestMapping(path = "hello-world", produces = "application/json")
	public ResponseEntity<String> helloWorld() {

		return new ResponseEntity<String>("Hello World", HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(path = "hello-world-bean", produces = "application/json")
	public ResponseEntity<HelloWorldBean> helloWorldBean() {

		return new ResponseEntity<HelloWorldBean>(new HelloWorldBean("Hello World"), HttpStatus.OK);
	}

	@GetMapping
	@RequestMapping(path = "hello-world-bean-path/{name}", produces = "application/json")
	public ResponseEntity<HelloWorldBean> helloWorldBeanPath(@PathVariable String name) {

		// throw new RuntimeException("Something went wrong");
		return new ResponseEntity<HelloWorldBean>(new HelloWorldBean(String.format("Hello World, %s", name)),
				HttpStatus.OK);
	}

}
