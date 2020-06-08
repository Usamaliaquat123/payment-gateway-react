

const enrollmentVerfication = (transferId) => {
    console.log(transferId);
    debugger;
    $.ajax({
        url: 'http://localhost:5998/api/v1/inquiry/enrollmentVerification',
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
        url: 'http://localhost:5998/api/v1/inquiry/smsSending',
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


