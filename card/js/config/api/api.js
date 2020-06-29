
const baseUri = "https://gateway.paysyslabs.com"
const API_VERSION = "1.0.0"
const ACCESS_TOKEN = "Bearer 4c280096-0db9-44f3-8b4d-71747e630ea6"



const validateMerchant = (dta) => {
    console.log(dta)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${baseUri}/validateMerchant/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                "amount": "30.00",
                "currency": "586",
                "description": "QR",
                "merchantId": "010210742100010",
                 "operationId":"",
                "orderId": "824133245",
                "tid": "15211001"
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                if (response.responseCode == 00) {
                    sessionStorage.setItem('currency', dta.currency)
                    sessionStorage.setItem('originalOrderId', dta.orderId)
                    sessionStorage.setItem('tid', '15211001')
                    sessionStorage.setItem('amount', dta.amount)
                    sessionStorage.setItem('sessionId', `${response.data.sessionId}`)
                    sessionStorage.setItem('merchantId', '010210742100010')
                    resolve(response)
                } else {
                    reject(response)
                }
            },
            error: function (error) {
                reject(error)
            }
        })
    })
}




// Send smsCode Api
const sendSms = (dta) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${baseUri}/getSmsCode/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                cardExpiredDate: dta.cardExpiredDate,
                cardName: dta.cardName,
                cardNumber: dta.cardNumber,
                cardPin: dta.cardPin,
                merchantId: dta.merchantId,
                sessionId: dta.sessionId
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                if (response.responseCode == 00) {
                    sessionStorage.setItem('sessionId', `${response.data.sessionId}`)
                    resolve(response)
                } else {
                    reject(response)
                }
            },
            error: function (error) {
                reject(error)
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
                    sessionStorage.setItem('sessionId', `${response.data.sessionId}`)
                    resolve(response.data.sessionId)
                    /*console.log(response);*/
                } else {
                    reject(response)
                }
                console.log(response)
            },

            error: function (error) {
                reject(error)
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
                if (response.responseCode == 00) {
                    console.log(response)
                } else {
                    reject(response)
                }
            },
            error: function (error) {
                reject(error)
            }
        })
    })
}














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
                } else {
                    reject(response)
                }
            },
            error: function () {
                reject(error)
            }
        })
    })
}

// inquryQRC api
const inquiryQRCapi = (dta) => {
    console.log(dta)
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${baseUri}/inquryQRC/${API_VERSION}`,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                cardNumber: dta.crdNumber,
                currencyCode: dta.currency,
                merId: dta.description,
                originalOrderId: dta.merchantId,
                tid: dta.tid,
                txnAmount: dta.amount
            }),
            headers: {
                "Authorization": `${ACCESS_TOKEN}`
            },
            success: function (response) {
                console.log(response)
                if (response.responseCode == "00") {
                    resolve(response)
                    transferId = response.data.transferId;
                } else {
                    reject(response)
                }
            },
            error: function () {
                reject(error)
            }
        })
    })

}



