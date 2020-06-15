
const baseUri = "https://gateway.paysyslabs.com/"
const API_VERSION = "1.0.0" 



// Pay Transactions API
const payTransaction = (dta) => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/payTransaction/${API_VERSION}`,
            type: 'POST', 
            contentType: 'application/json',
            data: JSON.stringify({
                cardExpiredDate: dta.date, YYMM,
                cardName: dta.cardName,
                cardNumber: dta.cardNumber,
                cardPin: dta.cardPin,
                sessionId: dta.sessionId
            }),
            headers: {
                'X-Auth-Token': dta.token
            },
            success: function (response) {
                console.log(response)
            },
            error: function () {
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").value = "Error";
            }
        })
      })  
}

// SEND sms code API
const sendSms = (dta) => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/getSmsCode/${API_VERSION}`,
            type: 'POST', 
            contentType: 'application/json',
            data: JSON.stringify({

                cardExpiredDate: dta.date, YYMM,
                cardName: dta.cardName,
                cardNumber: dta.cardNumber,
                cardPin: dta.cardPin,
                sessionId: dta.sessionId
            }),
            success: function (response) {
                console.log(response)
            },
            error: function () {
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").value = "Error";
            }
        })
      })  
}


// RESEND Email api
const ResendButton = () => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/resendSmsCode/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            cardExpiredDate: document.getElementById("expiry-month").value + document.getElementById("expiry-year").value,
            cardNumber: document.getElementById("cardNumber").value.replace('-', ''),
            cardPin: document.getElementById("security-code").value,
            channelType: "07",
            currencyCode: merchantInfo.currency,
            merId: merchantInfo.merchantId,
            orderId: merchantInfo.orderId,
            phoneNo: merchantInfo.phone,
            txnAmount: merchantInfo.amount,
            txnTime: d.YYYYMMDDHHMMSS(),
        }),
        success: function (response) {
            if (response.responseCode == "00") {
                transferId = response.data.transferId;
                /*console.log(response);*/
                document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

// Purchase QRC API
const purchaseQRCapi = () => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/purchaseQRC/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            // DATA
            
        }),
        success: function (response) {
            if (response.responseCode == "00") {
                transferId = response.data.transferId;
                /*console.log(response);*/
                document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

// inquryQRC api
const inquiryQRCapi = () => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/inquryQRC/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            // DATA

        }),
        success: function (response) {
            if (response.responseCode == "00") {
                transferId = response.data.transferId;
                /*console.log(response);*/
                document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

// validateMerchant api
const validateMerchant = () => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/validateMerchant/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            // DATA

        }),
        success: function (response) {
            if (response.responseCode == "00") {
                transferId = response.data.transferId;
                /*console.log(response);*/
                document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

