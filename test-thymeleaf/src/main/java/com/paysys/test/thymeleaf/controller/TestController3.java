package com.paysys.test.thymeleaf.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/testControllerThree")
public class TestController3 {

	@GetMapping
	public String temp(Model model) {
		return "test Rest";
	}
}
