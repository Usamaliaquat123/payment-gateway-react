
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
        headers: {
            'X-Auth-Token': token
        },
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
        headers: {
            'X-Auth-Token': token
        },
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


// $('document').ready(() => {
//     c
// })

const sendSms = () => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/api/v1/ecommerce/getSMSCode`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({


                // "cardExpiredDate": "3312", YYMM
                // "cardName": "WAHEED KHAN AFRIDI",
                // "cardNumber": "6222821234560017",
                // "cardPin": "123",
                // "sessionId": "40309c05-14f0-4a12-8bd7-22d434a72928"
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
            headers: {
                'X-Auth-Token': token
            },
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
      })  
}