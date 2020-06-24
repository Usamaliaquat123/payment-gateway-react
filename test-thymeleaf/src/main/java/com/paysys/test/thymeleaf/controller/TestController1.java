package com.paysys.test.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/testControllerOne")
public class TestController1 {

	@GetMapping
	public String temp(Model model) {
		return "testTemplate1";
	}
}
