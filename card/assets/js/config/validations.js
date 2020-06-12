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
    getSMSvalue()
    
    // $( "#formSub" ).click(function() {
    //     alert( "Handler for .click() called." );
    //   });
    



    cardNumber.on('keyup', (e) => {
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
        } else if (val[0] == '4') {
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




    // on submit
    $('#formSub').click(() => {
        var month = $('#selectMonth').val()
        var years = $('#ddlYears').val()


         var sli = years.slice(2)


         var cvcInput = $('#cvcInput')
         // cvcNumberValid(cvcInput)
         console.log(cvcInput)

         cvcNumberValid(cvcInput.val()).then(res => {

         }).catch(err => {
            //  err cvc not valid
            
         })

    
    
    })
        
    
//   sendSms()

})



// module.exports ={
//     cardNumberValid,
//     getSMSvalue
// }