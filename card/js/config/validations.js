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
        optional: true,
        err: true
    },
    street: {
        val: '',
        optional: true,
        err: true
    },
    city: {
        val: '',
        optional: true,
        err: true
    },
    phNumber: {
        val: '',
        optional : true,
        err: true
    },
    email: {
        val: '',
        optional: true,
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






// Card Identifier
$(document).ready(function () {
    // Validate 

    const merchantInfo = {
        "amount": "30.00",
        "currency": "586",
        "description": "QR",
        "merchantId": "010210742100012",
        "operationId": "",
        "orderId": "00112475",
        "tid": "00121001"
    }
    
    validateMerchant(merchantInfo).then(res => {
        console.log(res)
    }).catch(err => console.log(err))

    $('#btnEmailPhoneProceed').click(() => {
        console.log('asds')
        console.log('asd')
        if((errorState.email.err == false) && (errorState.phNumber.err == false)){
            $('#emailAndPhone').hide();
            $('#paymentMethods').show()
        }else{
            phoneChecker()
            emailChecker()
        }
    })
    const phNumber = $('#phoneCode')
    phNumber.on('keyup',(e) => {
        if(e.target.value == ""){
            console.log('not match')
            errorState.phNumber.val = ""
            errorState.phNumber.err = true
        }else{  
            
            console.log('match')
            errorState.phNumber.val = e.target.value
            errorState.phNumber.optional = false
            errorState.phNumber.err = false
        }
    })
    const emailAddr = $('#emailAddr')
    emailAddr.on('keyup',(e) => {
        var mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(e.target.value)
       
        if (e.target.value.match(mailformat)) {
            console.log('match')
            errorState.email.val = e.target.value
            errorState.email.err = false
            emailAddr.css('background-size', '0 2px, 100% 1px')
            emailAddr.css('outline', '')
        }
        else {
            console.log('not match')
            errorState.email.err = true
            emailAddr.css('background-size', '100% 1px, 100% 1px')
            emailAddr.css('outline', 'none')
        }
        if(e.target.value == ""){
            console.log('not match')
            errorState.email.err = true
            emailAddr.css('background-size', '0 2px, 100% 1px')
            emailAddr.css('outline', '')
        }
    })
    







    // debugger;
    masking()
    const cardNumber = $('#cardNumber')
    const expDate = $('#expDate')
    const cvcNumber = $('#cvcInput')
    // const emailAddr = $('#emailAddr')
    const firstname = $('#firstname')
    const lastname = $('#lastname')
    // const phNumber = $('#phNumber')
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
            errorState.firstname.val = ""
            errorState.firstname.err = true
        }else{
  errorState.firstname.val == e.target.value
            errorState.firstname.err = false
        }
    })  
    // lastname
    lastname.on('keyup',(e) => {
        if (e.target.value == "") {
             errorState.lastname.val = ""
            errorState.lastname.err = true
        }else{
            errorState.lastname.val = e.target.value
            errorState.lastname.err = false
        }
    })
    // phoneNumber
    
    // Country
    
    // city





    console.log(city.val())
    city.on('keyup',(e) => {
        if(e.target.value == ""){
            errorState.city.val = ""
            errorState.city.err = true
        }else{  
            errorState.city.val = e.target.value
            errorState.city.optional = false
            errorState.city.err = false
        }
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

    // const init = {
    //     "amount": "30.00",
    //     "currency": "586",
    //     "description": "Ecommerce",
    //     "merchantId": "010210742100010",
    //     "operationId": "",
    //     "orderId": "01112475",
    //     "tid": "15211001"
    // }


    console.log(sessionStorage.getItem('sessionId'))

    cardNumber.on('keyup', (e) => {
        cardNum = e.target.value.replace(/\s/g, '')
        console.log(cardNum)
        if (cardNum.length == 19) {
            errorState.cardNumber.val = e.target.value
            errorState.cardNumber.err = e
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
        }
        //  else if (val[0] == 5) {
        //     errorState.cardNumber.err = false
        //     var visa = document.getElementById('visa');
        //     visa.style.opacity = "1";
        //     visa.style.filter = 'alpha(opacity=100)'; // IE fallback

        //     var mastercard = document.getElementById('mastercard');
        //     mastercard.style.opacity = "0.1";
        //     mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var unionpay = document.getElementById('unionpay');
        //     unionpay.style.opacity = "0.1";
        //     unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var paypak = document.getElementById('paypak');
        //     paypak.style.opacity = "0.1";
        //     paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        // } else if (val[0] == '5') {
        //     errorState.cardNumber.err = false
        //     var mastercard = document.getElementById('mastercard');
        //     mastercard.style.opacity = "1";
        //     mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

        //     var visa = document.getElementById('visa');
        //     visa.style.opacity = "0.1";
        //     visa.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var unionpay = document.getElementById('unionpay');
        //     unionpay.style.opacity = "0.1";
        //     unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var paypak = document.getElementById('paypak');
        //     paypak.style.opacity = "0.1";
        //     paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        // }
         else if (val[0] == '6') {
            errorState.cardNumber.err = false
            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

            // var mastercard = document.getElementById('mastercard');
            // mastercard.style.opacity = "0.1";
            // mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            // var visa = document.getElementById('visa');
            // visa.style.opacity = "0.1";
            // visa.style.filter = 'alpha(opacity=10)'; // IE fallback

            // var paypak = document.getElementById('paypak');
            // paypak.style.opacity = "0.1";
            // paypak.style.filter = 'alpha(opacity=10)'; // IE fallback
        // }
        //  else if (val[0] == '2') {
        //     errorState.cardNumber.err = false
        //     var paypak = document.getElementById('paypak');
        //     paypak.style.opacity = "1";
        //     paypak.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var unionpay = document.getElementById('unionpay');
        //     unionpay.style.opacity = "0.1";
        //     unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

        //     var mastercard = document.getElementById('mastercard');
        //     mastercard.style.opacity = "0.1";
        //     mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

        //     var visa = document.getElementById('visa');
        //     visa.style.opacity = "0.1";
        //     visa.style.filter = 'alpha(opacity=10)'; // IE fallback
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



        console.log(errorState)
        if((errorState.cardNumber.err == false) && (errorState.cardDate.err == false) && (errorState.cardcvc.err == false) && (errorState.firstname.err == false) && (errorState.lastname.err == false)){
             // SEND SMS CODED
             $('#cardContainer').hide()
             $('#loadng').show()
           
            //  var crdDate = errorState.cardDate.val.replace(/\//g, '')
            //  console.log(crdDate )
             const cardInfocrd = {
                cardExpiredDate: "3312",
                cardName: errorState.firstname.val + ' ' + errorState.lastname.val,
                cardNumber: errorState.cardNumber.val,
                cardPin: errorState.cardcvc.val,
                merchantId: sessionStorage.getItem('merchantId'), //SHOULD BE SAME AS VALIDATE MERCHANT REQUEST
                sessionId: sessionStorage.getItem('sessionId')
             }

            console.log(cardInfocrd)
        (cardInfocrd).then(res => {
            $('#codeSmsCard').show()
            $('#loadng').hide()   
            var i = 0
            if (i == 0) {
                i = 1;
                var width = 1;
                var id = setInterval(frame, 120);
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
                            // reCode(cardInfo).then().catch(err => console.log(err))
                            $('#loadingContainer').hide()
                            $('#resendCode').css("display", "block")
                        }
                    }
                }
            }






    }).catch(err => {
        $('#loadng').hide()
        $('#paymentFailed').show()
    })
            return true 
        }else{
            cvcChecker()
            crdDateChecker()
            crdNumberChecker()
            crdFirstName()
            crdLastname()



            return false

        }

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





        // var month = $('#selectMonth').val()
        // var years = $('#ddlYears').val()
        // var cardNum = $('#cardNumber').val()
        // const formData = {}
        // console.log(localStorage.getItem('sessionId'))
        // check card Number

        // formValid(errorState.cardNumber.err,cardNumber)
        // formValid(errorState.cardcvc.err,cvcNumber)
       
        
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
        // if (errorState.firstname.err == true) {
        //     firstname.css('background-size', '100% 1px, 100% 1px')
        //     firstname.css('outline', 'none')
        // } else {
        //     firstname.css('background-size', '0 2px, 100% 1px')
        //     firstname.css('outline', '')
        // }
        // // check lname
        // if (errorState.lastname.err == true) {
        //     lastname.css('background-size', '100% 1px, 100% 1px')
        //     lastname.css('outline', 'none')
        // } else {
        //     lastname.css('background-size', '0 2px, 100% 1px')
        //     lastname.css('outline', '')
        // }



       
        // $('#cardContainer').hide()
        // $('#loading').show()


       
    })



    $('#loadingContainer').hide()





    // RESEND CODE
    $('#resendCode').click(() => {
        console.log(Math.floor(1200 / 60))
        var i = 0
        if (i == 0) {
            i = 1;
            var width = 1;
            var id = setInterval(frame, 1200);
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
                        reCode(cardInfo).then().catch(err => console.log(err))
                        $('#loadingContainer').hide()
                        $('#resendCode').css("display", "block")
                    }
                }
            }
        }

        var timeleft = 120;
        var downloadTimer = setInterval(function () {
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                $('#countdown').hide()
            } else {
                // document.getElementById("timerText").innerHTML = timeleft + " secs";
                document.getElementById("timerText").innerHTML = Math.floor(timeleft / 60);
            }
            timeleft -= 1;
        }, 1000);
       
    })


   







    // Final step of card
    $('#onPay').click(() => {
        

        let verifyCode = $('#verifyCode')
        let verifyCode2 = $('#verifyCode2')
        let verifyCode3 = $('#verifyCode3')
        let verifyCode4 = $('#verifyCode4')
        let verifyCode5 = $('#verifyCode5')
        let verifyCode6 = $('#verifyCode6')
        if((verifyCode.val().length == 1)   && (verifyCode2.val().length == 1) &&
        (verifyCode3.val().length == 1) && (verifyCode4.val().length == 1) && 
        (verifyCode5.val().length == 1) && (verifyCode6.val().length == 1)){
            const smsCC = verifyCode.val() + verifyCode2.val() + verifyCode3.val() + verifyCode4.val() + verifyCode5.val()+ verifyCode6.val()
           console.log(smsCC)
            const payTrans = {
                sessionId: `${sessionStorage.getItem('sessionId')}`,
                merchantId: `${sessionStorage.getItem('merchantId')}`,
                smsCode: `${smsCC}`
            }
            $('#codeSmsCard').hide()
            $('#loadng').show()
    
            setTimeout(() => {
            
                $('#loadng').hide()
                $('#paymentSucess').show()


                setTimeout(() => {
                    window.location = merchantInfo.product.callbackSucess;
                },4000)
            }, 2000);
            // payTransaction(payTrans).then(res => {
            //     setTimeout(() => {
                    
            //         window.location = "http://www.youtube.com";
            //     }, 1000);s
            // }).catch(err => {
            //     $('#loading').hide()
            //     $('#paymentFailed').show()
            // })
            return true
        }else{
            return false
        }
  
    })

})