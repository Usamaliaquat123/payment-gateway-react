
const baseUri = "https://gateway.paysyslabs.com"
const API_VERSION = "1.0.0" 
const ACCESS_TOKEN = "Bearer 4c280096-0db9-44f3-8b4d-71747e630ea6"


// validateMerchant api
const validateMerchant = (dta) => {
    console.log(`${baseUri}/validateMerchant/${API_VERSION}`)
    console.log(JSON.stringify({
        // DATA
        "amount": dta.amount,
        "currency": dta.currency,
        "description": dta.description,
        "merchantId": dta.merchantId,
        "operationId": dta.operationId,
        "orderId": dta.orderId,
        "tid": dta.tid
    }))
    return new Promise((resolve, reject) => {
        // document.getElementById("errorMessage").style.display = "none";
        $.ajax({
            url: `${baseUri}/validateMerchant/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                // DATA
                "amount": dta.amount,
                "currency": dta.currency,
                "description": dta.description,
                "merchantId": dta.merchantId,
                "operationId": dta.operationId,
                "orderId": dta.orderId,
                "tid": dta.tid
            }),
            headers : {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                resolve(response.data.sessionId)
                if(response.responseCode == 00){
                    sessionStorage.setItem('sessionId',`${response.data.sessionId}`)
                    sessionStorage.setItem('merchantId',`${dta.merchantId}`)
                }else{
                    reject(response)
                }
            },
            error: function (e) {
                console.log(e)
            }
        })
    })
   
}



// Send smsCode Api
const sendSms = (dta) => {
    return new Promise((resolve, reject) => {
        // console.log(document.getElementById("cardNumber").value.replace('-', ''))/
        $.ajax({
            url: `${baseUri}/getSmsCode/${API_VERSION}`,
            type: 'POST', 
            contentType: 'application/json',
            data: JSON.stringify({
                cardExpiredDate: dta.cardExpiredDate,
                cardName: dta.cardName,
                cardNumber: dta.cardNumber,
                cardPin: dta.cardPin,
                merchantId: dta.merchantId, //SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
                sessionId: dta.sessionId
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                if(response.responseCode == 00){
                    localStorage.setItem('sessionId',`${response.data.sessionId}`)
                    resolve(response)
                }else{
                    reject(response)
                }
            },
            error: function (error) {
                console.log(e)
            }
        })
      })  
}


// RESEND Email api
const resendSmsCode = (dta) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${baseUri}/resendSmsCode/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                cardExpiredDate: dta.cardExpiredDate,
                cardName: dta.cardName,
                cardNumber: dta.cardNumber,
                cardPin: dta.cardPin,
                merchantId: dta.merchantId, //SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
                sessionId: dta.sessionId
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                if (response.responseCode == "00") {
                    localStorage.setItem('sessionId',`${response.data.sessionId}`)
                    resolve(response.data.sessionId)
                    /*console.log(response);*/
                }else{
                    reject(response)
                }
                console.log(response)
            },
        })
    })
   
}





// Pay Transactions API
const payTransaction = (dta) => {
    return new Promise((resolve, reject) => {
        console.log(document.getElementById("cardNumber").value.replace('-', ''))
        $.ajax({
            url: `${baseUri}/payTransaction/${API_VERSION}`,
            type: 'POST', 
            contentType: 'application/json',
            data: JSON.stringify({
                sessionId: dta.sessionId,
                merchantId: dta.merchantId,//SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
                smsCode: dta.smsCode
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                if(response.responseCode == 00){
                    resolve(response.data.message)
                }else{
                    reject(response)
                }
            },
        })
      })  
}

// SEND sms code API
















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
const inquiryQRCapi = (dta) => {
    document.getElementById("errorMessage").style.display = "none";
    $.ajax({
        url: `${baseUri}/inquryQRC/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            

        }),
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`
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



