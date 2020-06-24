package com.paysys.test.thymeleaf.controller;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import com.paysys.test.thymeleaf.model.ValidateSession;

@Controller
@RequestMapping("/payment")
public class CheckoutController {
	private static final Logger LOG = LoggerFactory.getLogger(CheckoutController.class);

	@GetMapping
	public String temp(Model model) {
		return "testTemplate1";
	}
	
	@PostMapping("/validate")
	public RedirectView validateSession(@Valid ValidateSession validSession, BindingResult result, Model model,
			RedirectAttributes redirectAttrs) {
		LOG.info("Received Session Id: {}", validSession.getSessionId());
		//validate session id from cache if valid then redirect to checkout

		RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
		if (false /*check if request is not valid */) {
	        redirectView.setUrl("/payment");			
			redirectAttrs.addFlashAttribute("error_code", "500");

	        return redirectView;
		}
        redirectView.setUrl("/payment/checkout");
		return redirectView;
	}
	

	@GetMapping("/checkout")
	public String checkout() {
		return "checkout";
	}
}
