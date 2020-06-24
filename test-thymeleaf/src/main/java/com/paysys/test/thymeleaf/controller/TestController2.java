package com.paysys.test.thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/testControllerTwo")
public class TestController2 {

	@GetMapping
	public String temp(Model model) {
		if (true) {
			return "redirect:/testControllerOne";
		} else {
			return "testTemplate2";
		}
	}
}
