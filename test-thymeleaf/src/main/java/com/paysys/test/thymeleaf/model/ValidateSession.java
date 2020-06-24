package com.paysys.test.thymeleaf.model;

public class ValidateSession {
	String sessionId;

	public ValidateSession() {
	}

	public ValidateSession(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	
	

	@Override
	public String toString() {
		return "ValidateSession [sessionId=" + sessionId + "]";
	}
}
