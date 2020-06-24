package com.paysys.test.thymeleaf.model;

public class MerchantConfiguration {

	private String cardNumber;
	private String amount;
	private String cardHolderName;
	private String securityCode;
	private String smsCode;

	public MerchantConfiguration(String cardNumber, String amount, String cardHolderName, String securityCode,
			String smsCode) {
		super();
		this.cardNumber = cardNumber;
		this.amount = amount;
		this.cardHolderName = cardHolderName;
		this.securityCode = securityCode;
		this.smsCode = smsCode;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public String getCardHolderName() {
		return cardHolderName;
	}

	public void setCardHolderName(String cardHolderName) {
		this.cardHolderName = cardHolderName;
	}

	public String getSecurityCode() {
		return securityCode;
	}

	public void setSecurityCode(String securityCode) {
		this.securityCode = securityCode;
	}

	public String getSmsCode() {
		return smsCode;
	}

	public void setSmsCode(String smsCode) {
		this.smsCode = smsCode;
	}

}
