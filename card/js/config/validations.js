const errorState = {

    cardNumber: {
        val: '',
        err: true
    },
    cardDate: {
        val: '',
        err: true
    },
    cardcvc: {
        val: '',
        err: true
    },
    firstname: {
        val: '',
        err: true
    },
    lastname: {
        val: '',
        err: true
    },
    country: {
        val: '',
        err: true
    },
    street: {
        val: '',
        err: true
    },
    city: {
        val: '',
        err: true
    },
    phNumber: {
        val: '',
        err: true
    },
    email: {
        val: '',
        err: true
    }
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



const regexEmail = () => {

}

// Card Identifier
$(document).ready(function () {
    // debugger;
    masking()
    const cardNumber = $('#cardNumber')
    const expDate = $('#expDate')
    const cvcNumber = $('#cvcInput')
    const emailAddr = $('#emailAddr')
    const firstname = $('#firstname')
    const lastname = $('#lastname')
    const phNumber = $('#phNumber')
    const country = $('#selectMonth')
    const city = $('#city')


    cvcNumber.on('keyup', (e) => {
        if (e.target.value.length == 3) {
            errorState.cardcvc.err = false
            errorState.cardcvc.val = e.target.value
            cvcNumber.css('background-size', '0 2px, 100% 1px')
            cvcNumber.css('outline', '')
        } else {
            errorState.cardcvc.err = true
            cvcNumber.css('background-size', '100% 1px, 100% 1px')
            cvcNumber.css('outline', 'none')
        }
    })


    // Firstname 
    firstname.on('keyup',(e) => {
        if(e.target.value == ""){
            errorState.firstname.val == ""
            errorState.firstname.err == true
        }else{

        }
    })  
    // lastname
    lastname.on('keyup',(e) => {
        if (e.target.value == "") {
             errorState.lastname.val == ""
            errorState.lastname.err == true
        }else{

        }
    })
    // phoneNumber
    phNumber.on('keyup',(e) => {
        if(e.target.value == ""){
            errorState.phNumber.val == ""
            errorState.phNumber.err == true
        }else{  

        }
    })
    // Country
    
    // city





    console.log(city.val())
    city.on('keyup',(e) => {

    })
    // expDate Validations
    expDate.on('keyup', (e) => {
        if (e.target.value.length == 1) {
            if (e.target.value > 1) {
                e.target.value = e.target.value.padStart(2, "0")
            }
        }
        if (e.target.value.length == 2) {
            if (e.target.value < 13) {
                console.log(e.target.value)
            } else {
                e.target.value = ""
            }
        }
        if (e.target.value.length == 7) {

            var currentYear = (new Date()).getFullYear();
            var str = currentYear.toString().slice(-2)
            var usr_dte = e.target.value.toString().slice(-2)
            console.log(usr_dte)
            if (str > usr_dte) {
                e.target.value = e.target.value.substring(0, e.target.value.length - 2)
            } else {
                var crdDte = e.target.value.replace(/\s/g, '')
                errorState.cardDate.err = false
                errorState.cardDate.val = crdDte
                expDate.css('background-size', '0 2px, 100% 1px')
                expDate.css('outline', '')
            }
        } else {
            errorState.cardDate.err = true
            expDate.css('background-size', '100% 1px, 100% 1px')
            expDate.css('outline', 'none')
        }
        // console.log(e.target.value.length)
    })







    getSMSvalue()

    const init = {
        "amount": "30.00",
        "currency": "586",
        "description": "Ecommerce",
        "merchantId": "010210742100010",
        "operationId": "",
        "orderId": "01112475",
        "tid": "15211001"
    }
    // validateMerchant(init).then(res => console.log(res))


    console.log(sessionStorage.getItem('sessionId'))

    cardNumber.on('keyup', (e) => {
        cardNum = e.target.value.replace(/\s/g, '')
        // cardNum = e.target.value.replace(/\s/g, '')  
        console.log(cardNum)
        if (cardNum.length == 19) {
            errorState.cardNumber.val = e.target.value
            errorState.cardNumber.err = false
            cardNumber.css('background-size', '0 2px, 100% 1px')
            cardNumber.css('outline', '')
        } else {
            errorState.cardNumber.err = true
            errorState.cardNumber.val = ""
            cardNumber.css('background-size', '100% 1px, 100% 1px')
            cardNumber.css('outline', 'none')
        }
        const val = e.target.value
        if (val == "") {
            errorState.cardNumber.err = false
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
            errorState.cardNumber.err = false
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
            errorState.cardNumber.err = false
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
            errorState.cardNumber.err = false
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
            errorState.cardNumber.err = false
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
            errorState.cardNumber.err = true
            console.log('error')
        }


    })


    // date validation 

    const cardInfo = {
        cardExpiredDate: "3312",
        cardName: "WAHEED KHAN AFRIDI",
        cardNumber: "6222821234560017",
        cardPin: "123",
        merchantId: sessionStorage.getItem('merchantId'), //SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
        sessionId: sessionStorage.getItem('sessionId')
    }


    emailAddr.on('keyup',(e) => {
        var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(e.target.value)
       
        if (e.target.value.match(mailformat)) {
            errorState.email.val = e.target.value
            errorState.email.err = false
            emailAddr.css('background-size', '0 2px, 100% 1px')
            emailAddr.css('outline', '')
        }
        else {
            errorState.email.err = true
            emailAddr.css('background-size', '100% 1px, 100% 1px')
            emailAddr.css('outline', 'none')
        }
        if(e.target.value == ""){
            emailAddr.css('background-size', '0 2px, 100% 1px')
            emailAddr.css('outline', '')
        }
    })




    const formValid = (val, el) => {
        return new Promise((resolve, reject) => {
            if(val == true){
                el.css('background-size', '100% 1px, 100% 1px')
                el.css('outline', 'none')
            }else{
                resolve(false)
                el.css('background-size', '0 2px, 100% 1px')
                el.css('outline', '')
            }
        })
    }



   

    // Form submit
    $('#formSub').click(() => {






        // $('#cardDetSub').submit(() => {
        //     var cardNumbr = true
        //     var cvc = true
        //     var datee = true
        //     var fname = true
        //     var lname = true
        //     formValid(errorState.cardNumber.err,cardNumber).then(res => cardNumbr = false).catch(e => cardNumbr = true)
        //     formValid(errorState.cardcvc.err,cvcNumber).then(res => cvc = false).catch(e => cvc = true)
        //     formValid(errorState.cardDate.err,expDate).then(res => datee = false).catch(e => datee = true)
        //     formValid(errorState.firstname.err,firstname).then(res => fname  = false).catch(e => fname = true)
        //     formValid(errorState.lastname.err,lastname).then(res => lname = false).catch(e => lname = true)
            
        //     console.log(cardNumbr)
        // })





        var month = $('#selectMonth').val()
        var years = $('#ddlYears').val()
        var cardNum = $('#cardNumber').val()
        const formData = {}
        // console.log(localStorage.getItem('sessionId'))
        // check card Number

        formValid(errorState.cardNumber.err,cardNumber)
        formValid(errorState.cardcvc.err,cvcNumber)
        formValid(errorState.cardDate.err,expDate)
        // formValid(errorState.firstname.err,firstname)
        // formValid(errorState.lastname.err,lastname)
        
        // if(errorState.cardNumber.err == true){
        //     cardNumber.css('background-size', '100% 1px, 100% 1px')
        //     cardNumber.css('outline', 'none')
        // }else{
        //     cardNumber.css('background-size', '0 2px, 100% 1px')
        //     cardNumber.css('outline', '')
        // }
        // // check cvc numbr
        // if (errorState.cardcvc.err == true) {
        //     cvcNumber.css('background-size', '100% 1px, 100% 1px')
        //     cvcNumber.css('outline', 'none')
        // } else {
        //     cvcNumber.css('background-size', '0 2px, 100% 1px')
        //     cvcNumber.css('outline', '')
        // }
        // // check date 
        // if (errorState.cardDate.err == true) {
        //     expDate.css('background-size', '100% 1px, 100% 1px')
        //     expDate.css('outline', 'none')
        // } else {
        //     expDate.css('background-size', '0 2px, 100% 1px')
        //     expDate.css('outline', '')
        // }
        // ///////////////////////////////////////////////////////
        // check fName
        if (errorState.firstname.err == true) {
            firstname.css('background-size', '100% 1px, 100% 1px')
            firstname.css('outline', 'none')
        } else {
            firstname.css('background-size', '0 2px, 100% 1px')
            firstname.css('outline', '')
        }
        // check lname
        if (errorState.lastname.err == true) {
            lastname.css('background-size', '100% 1px, 100% 1px')
            lastname.css('outline', 'none')
        } else {
            lastname.css('background-size', '0 2px, 100% 1px')
            lastname.css('outline', '')
        }


       
        // const payTrans = {
        //     sessionId: `${localStorage.getItem('sessionId')}`,
        //     merchantId: `${localStorage.getItem('merchantId')}`,
        //     smsCode: `${111111}`
        // }

       
        $('#cardContainer').hide()
        $('#loading').show()
        sendSms(cardInfo).then(res => {
                $('#loading').hide()
                $('#codeSmsCard').show()
        }).catch(err => {
            $('#loading').hide()
            $('#paymentFailed').show()
        })
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
                    $('#loadingContainer').css("width", `${width}%`)
                    $('#resendCode').hide()
                    if (width == 100) {
                        resendSmsCode(cardInfo).then().catch(err => console.log(err))
                        $('#loadingContainer').hide()
                        $('#resendCode').css("display", "block")
                    }
                }
            }
        }
    })


   
    $('#onPay').click(() => {
        const payTrans = {
            sessionId: `${sessionStorage.getItem('sessionId')}`,
            merchantId: `${sessionStorage.getItem('merchantId')}`,
            smsCode: `${111111}`
        }
        $('#codeSmsCard').hide()
        $('#loading').show()
        payTransaction(payTrans).then(res => {
            $('#loading').hide()
            $('#paymentSucess').show()
            setTimeout(() => {
                
                window.location = "http://www.youtube.com";
            }, 1000);

        }).catch(err => {
            $('#loading').hide()
            $('#paymentFailed').show()
        })
    })

})