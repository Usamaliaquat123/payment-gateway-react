const errorState = {
    cardNumber: false,
    cardDate: false,
    cardcvc: false,
    firstname: false,
    lastname: false,
    country: false,
    street: false,
    city: false,
    phNumber: false,
    email: false
}

// sms code validations
const getSMSvalue = () => {
    return new Promise((resolve, reject) => {
        try {
            var val1 = $('#verifyCode')
            var val2 = $('#verifyCode2')
            var val3 = $('#verifyCode3')
            var val4 = $('#verifyCode4')
            var val5 = $('#verifyCode5')
            var val6 = $('#verifyCode6')
            val1.on('keyup', (e) => { })
            val2.on('keyup', (e) => { })
            val3.on('keyup', (e) => { })
            val4.on('keyup', (e) => { })
            val5.on('keyup', (e) => { })
            val6.on('keyup', (e) => { })
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}

// firstname and lastname 
const mergeName = () => {
    return new Promise((resolve, reject) => {
        var firstname = $('#FirstName').val()
        var lastname = $('#LastName').val()

        if (firstname != "") {
            if (lastname != "") {
                resolve(firstname + ' ' + lastname)
            } else {
                reject("401")
            }
        } else {
            reject("400")
        }
    })
}


// cvc number Validations

const cvcNumberValid = (n) => {
    return new Promise((resolve, reject) => {
        if (n.length == 3) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}


const regexEmail = () => {
    
}

// Card Identifier
$(document).ready(function () {
    // debugger;
    masking()
    const cardNumber = $('#cardNumber')
    const expDate = $('#expDate')




    expDate.on('keyup', (e) => {
        if (e.target.value.length == 2) {
            if (e.target.value < 12) {
                console.log(e.target.value)
            } else {
                e.target.value = ""
            }
        }
    })







    getSMSvalue()
    // $("#phoneField").CcPicker();    

    const init = {
        "amount": "30.00",
        "currency": "586",
        "description": "Ecommerce",
        "merchantId": "010210742100010",
        "operationId": "",
        "orderId": "01112475",
        "tid": "15211001"
    }
    validateMerchant(init).then(res => console.log(res))

    cardNumber.on('keyup', (e) => {
        cardNum = e.target.value.replace(/\s/g, '')
        // cardNum = e.target.value.replace(/\s/g, '')  
        console.log(cardNum)
        if (cardNum.length == 19) {
            errorState['cardNumber'] = false
            cardNumber.css('background-size', '0 2px, 100% 1px')
            cardNumber.css('outline', '')
        } else {
            errorState['cardNumber'] = true
            cardNumber.css('background-size', '100% 1px, 100% 1px')
            cardNumber.css('outline', 'none')
        }
        const val = e.target.value
        if (val == "") {
            errorState['cardNumber'] = true
            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "1";
            mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "1";
            visa.style.filter = 'alpha(opacity=100)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

            var paypak = document.getElementById('paypak');
            paypak.style.opacity = "1";
            paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == 5) {
            errorState['cardNumber'] = false
            var visa = document.getElementById('visa');
            visa.style.opacity = "1";
            visa.style.filter = 'alpha(opacity=100)'; // IE fallback

            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "0.1";
            mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "0.1";
            unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback

            var paypak = document.getElementById('paypak');
            paypak.style.opacity = "0.1";
            paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == '5') {
            errorState['cardNumber'] = false
            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "1";
            mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "0.1";
            visa.style.filter = 'alpha(opacity=10)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "0.1";
            unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback

            var paypak = document.getElementById('paypak');
            paypak.style.opacity = "0.1";
            paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == '6') {
            errorState['cardNumber'] = false
            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "0.1";
            mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "0.1";
            visa.style.filter = 'alpha(opacity=10)'; // IE fallback

            var paypak = document.getElementById('paypak');
            paypak.style.opacity = "0.1";
            paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == '2') {
            errorState['cardNumber'] = false
            var paypak = document.getElementById('paypak');
            paypak.style.opacity = "1";
            paypak.style.filter = 'alpha(opacity=10)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "0.1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "0.1";
            mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "0.1";
            visa.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else {
            errorState['cardNumber'] = true
            console.log('error')
        }


    })
    // card digit filter and validations
    const cardDigitValid = (cardNum) => {
        // console.log(carNum.length == 16)
        return new Promise((resolve, reject) => {
            cardNum = cardNum.replace(/\s/g, '')
            cardNum = cardNum.replace(/\-/g, '')
            if (cardNum.length == 16) {
                // console.log(cardNum)
                resolve(cardNum)
            } else {
                console.log("sdsds")
                reject(false)
            }
        })
    }

    // date validation 

    const cardInfo = {
        cardExpiredDate: "3312",
        cardName: "WAHEED KHAN AFRIDI",
        cardNumber: "6222821234560017",
        cardPin: "123",
        merchantId: `${localStorage.getItem('merchantId')}`, //SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
        sessionId: `${localStorage.getItem('sessionId')}`
}

    // Form submit
    $('#formSub').click(() => {
        var month = $('#selectMonth').val()
        var years = $('#ddlYears').val()
        var cardNum = $('#cardNumber').val()
         
        console.log(localStorage.getItem('sessionId'))
        
       
        const payTrans = {
            sessionId : `${localStorage.getItem('sessionId')}`,
            merchantId : `${localStorage.getItem('merchantId')}`,
            smsCode : `${111111}`
        }
        sendSms(cardInfo).then(res => console.log(res))
        // resendSmsCode(cardInfo).then(res => console.log(res))

        setTimeout(() => {
            payTransaction(payTrans).then(res => console.log(res))
            
        }, 1000);
    })


    $('#loadingContainer').hide()  

    $('#resendCode').click(() => {
        var i = 0
        if (i == 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 60);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;

                $('#loadingContainer').show()  
                $('#loadingContainer').css("width",`${width}%`)
                $('#resendCode').css("display","hidden")
            if(width == 100){ 
                resendSmsCode(cardInfo).then().catch(err => console.log(err))
                $('#loadingContainer').hide()
                $('#resendCode').css("display","block")  
            }
              }
            }
          }

    })


})