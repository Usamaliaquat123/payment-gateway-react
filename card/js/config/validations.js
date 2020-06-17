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
            val1.on('keyup',(e) => {})
            val2.on('keyup',(e) => {})
            val3.on('keyup',(e) => {})
            val4.on('keyup',(e) => {})
            val5.on('keyup',(e) => {})
            val6.on('keyup',(e) => {})
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}

// firstname and lastname 
const mergeName = () => {
    return new Promise((resolve, reject) =>{
        var firstname = $('#FirstName').val()
        var lastname = $('#LastName').val()

        if(firstname != ""){
            if(lastname != ""){
                resolve(firstname + ' ' + lastname)
            }else{
                reject("401")
            }
        }else{
            reject("400")
        }
    })
}


// cvc number Validations

const cvcNumberValid = (n) => {
    return new Promise((resolve, reject) => {
        if(n.length == 3){
            resolve(true)
        }else{
            reject(false)
        }
    })
}



// Card Identifier
$(document).ready(function () {
    // debugger;
    masking()
    const cardNumber = $('#cardNumber')
    const expDate = $('#expDate')




    expDate.on('keyup',(e) => {
        if(e.target.value.length == 2){
            if(e.target.value < 12){
                console.log(e.target.value)
            }else{
               e.target.value  = ""
            }
        }
    })




    


    getSMSvalue()
    $("#phoneField").CcPicker();    



    cardNumber.on('keyup', (e) => {
        cardNum = e.target.value.replace(/\s/g,'')
        cardNum = e.target.value.replace(/\-/g, '')  
        if(cardNum.length != 16){
            console.log('sds')
            setTimeout(() => {
                cardNumber.css('background-size','100% 1px, 100% 1px')
                cardNumber.css('outline','none')
            }, 1000);
        }else{
            console.log('sds')
            setTimeout(() => {
                cardNumber.css('background-size','0 2px, 100% 1px')
                cardNumber.css('outline','')
            }, 1000);
        }
        const val = e.target.value
        if (val == "") {
            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "1";
            mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "1";
            visa.style.filter = 'alpha(opacity=100)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback
        } else if (val[0] == 5) {
            var visa = document.getElementById('visa');
            visa.style.opacity = "1";
            visa.style.filter = 'alpha(opacity=100)'; // IE fallback

            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "0.1";
            mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "0.1";
            unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == '5') {
            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "1";
            mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "0.1";
            visa.style.filter = 'alpha(opacity=10)'; // IE fallback

            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "0.1";
            unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else if (val[0] == '6') {
            var unionpay = document.getElementById('unionpay');
            unionpay.style.opacity = "1";
            unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

            var mastercard = document.getElementById('mastercard');
            mastercard.style.opacity = "0.1";
            mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

            var visa = document.getElementById('visa');
            visa.style.opacity = "0.1";
            visa.style.filter = 'alpha(opacity=10)'; // IE fallback
        } else {
            console.log('error')
        }


    })
// card digit filter and validations
    const cardDigitValid = (cardNum) => {        
        // console.log(carNum.length == 16)
        return new Promise((resolve, reject) => {
            cardNum = cardNum.replace(/\s/g,'')
            cardNum = cardNum.replace(/\-/g, '')  
            if(cardNum.length == 16){
                // console.log(cardNum)
                resolve(cardNum)
            }else{
                console.log("sdsds")
                reject(false)
            }
        })
    }

// date validation 



// Form submit
    $('#formSub').click(() => {
        var month = $('#selectMonth').val()
        var years = $('#ddlYears').val()
        var cardNum = $('#cardNumber').val()
        // cardNum.trim()
        mergeName().then(r => console.log(r))
        var sli = years.slice(2)
        
        var cvcInput = $('#cvcInput').val()
        // cvcNumberValid(cvcInput)
        
        cvcNumberValid(cvcInput).then(cvcVal => {
            cardDigitValid(cardNum).then(crdVal => {
                if (month.length != 2) month = '0' + month  
                
            }).catch(err => console.log(err))
         }).catch(err => console.log(err))
    })
        
    

})