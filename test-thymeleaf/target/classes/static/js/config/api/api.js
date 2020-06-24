	
	const baseUri = "https://gateway.paysyslabs.com"
	const API_VERSION = "1.0.0" 
	const ACCESS_TOKEN = "Bearer 4c280096-0db9-44f3-8b4d-71747e630ea6"





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
                    sessionStorage.setItem('sessionId',`${response.data.sessionId}`)
                    resolve(response)
                }else{
                    reject(response)
                }
            },
            error: function (error) {
                reject('b')
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
                    sessionStorage.setItem('sessionId',`${response.data.sessionId}`)
                    resolve(response.data.sessionId)
                    /*console.log(response);*/
                }else{
                    reject(response)
                }
                console.log(response)
            },
            
            error: function (error) {
                reject('b')
            }
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
                console.log(response)
                }else{
                    reject(response)
                }
            },
            error: function (error) {
                reject('b')
            }
        })
      })  
}

// SEND sms code API













// Purchase QRC API
const purchaseQRCapi = (dta) => {
    console.log(dta)
    return new Promise((resolve, reject) => {
    $.ajax({
        url: `${baseUri}/purchaseQRC/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            // DATA
            cardNumber: dta.cardNumber,
            merId: dta.merId,
            sessionId: dta.sessionId
        }),
        headers: {
            "Authorization": `${ACCESS_TOKEN}`
        },
        success: function (response) {
            console.log(response)
            if (response.responseCode == "00") {
                resolve(response.data)
                // transferId = response.data.transferId;
                // document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            reject('err')
        }
    })
   })
}

// inquryQRC api
const inquiryQRCapi = (dta) => {
    console.log('sds')
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${baseUri}/inquryQRC/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                amount: dta.amount,
                currency: dta.currency,
                description: dta.description,
                merchantId: dta.merchantId,
                operationId: dta.operationId,
                orderId: dta.orderId,
                tid: dta.tid
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                console.log(response)
                if (response.responseCode == "00") {
                    resolve(response)
                    transferId = response.data.transferId;
                    /*console.log(response);*/
                    // document.getElementById("payButton").disabled = false;
                }
            },
            error: function () {
                reject('err')
            }
        })
    })
  
}



