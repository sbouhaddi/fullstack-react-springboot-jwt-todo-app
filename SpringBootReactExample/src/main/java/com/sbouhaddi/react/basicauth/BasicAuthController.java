package com.sbouhaddi.react.basicauth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class BasicAuthController {

	@GetMapping("basicauth")
	public ResponseEntity<AuthenticationBean> basicAuth() {
		return ResponseEntity.ok(AuthenticationBean.builder().message("You are authenticated").build());
	}

}
