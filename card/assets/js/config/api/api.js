
const baseUri = "http://10.0.70.64:4999"



const enrollmentVerfication = (transferId) => {
    console.log(transferId);
    debugger;
    $.ajax({
        url: `${baseUri}/api/v1/inquiry/enrollmentVerification`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            smsVerifyCode: document.getElementById("smsCode").value,
            transferId: transferId
        }),
        success: function (response) {
            if (response.responseCode == "00") {
                console.log(response);
                //closeIFrame();
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").value = "Error";
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

// reseend bu
const ResendButton = () => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/api/v1/ecommerce/resendSMSCode`,
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




const sendSms = (dta) => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/api/v1/ecommerce/getSMSCode`,
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


const sendSms = (dta) => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/api/v1/ecommerce/getSMSCode`,
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