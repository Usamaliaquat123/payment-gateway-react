var qrcode = new QRCode("qrcode");
var cardNumVal = 1
let errccqc = $('#errccqc')
// function makeCode () {      
//     var elText = document.getElementById("text");
    
//     if (!elText.value) {
//         alert("Input a text");
//         elText.focus();
//         return;
//     }
    
//     qrcode.makeCode(elText.value);
// }

// makeCode();

// $("#text").
//     on("blur", function () {
//         makeCode();
//     }).
//     on("keydown", function (e) {
//         if (e.keyCode == 13) {
//             makeCode();
//         }
//     });




$('document').ready(() => {
    $('#loadingContainerqrc').hide()
})


    
function makeCode (e,crdName) { 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: e,
        logo: `img/${crdName}.png`,
        logoWidth: 50,
        logoHeight: 50,
        logoBackgroundColor: 'transparent',
        logoBackgroundTransparent: false
    });
}
var cardNumberQRC = $('#cardNumberQRC')

$('document').ready(() => {
    cardNumberQRC.on('keyup',(e) => {
        cardNum = e.target.value.replace(/\-/g, '') 
        cardNum = cardNum.replace(/\s/g, '')
        if(cardNum == 16) {
            cardNumVal = 2
        }else{
            cardNumVal = 1
        }
    })
})


function genQRcode(e){
    console.log(cardNumVal)
    cardNum = cardNumberQRC.val().replace(/\-/g, '') 
    cardNum = cardNum.replace(/\s/g, '')


    console.log(cardNum.length)

    if(cardNum.length == 16){


        genCode(cardNum)
        errccqc.hide()
        cardNumberQRC.css('background-size', '0 2px, 100% 1px')
        cardNumberQRC.css('outline', '')

       
    }else{
        errccqc.show()
        cardNumberQRC.css('background-size', '100% 1px, 100% 1px')
        cardNumberQRC.css('outline', 'none')
    }
}



function validateQRc() {
    console.log('sadasssd')
    const dta = {
        amount: "30.00",
        currency: "586",
        description: "QR",
        merchantId: "010210742100010",
        operationId: "",
        orderId: "00112475",
        tid: "89131001"
    }
    $('#qrcodeloading').show()
    $('#paymentMethods').hide()

    validateMerchant(dta).then(res => {
        $('#qrcodeloading').hide()
        $('#qrcodeContainer').show()
        $('#qrcodeDisply').hide()
      
    }).catch(err => {
        $('#qrcodeloading').hide()
        $('#qrcodeContainer').hide()
        $('#paymentMethods').show()
    })
}


genCode = (e) => {
    const dta = {
        cardNumber : e,
        merId :  sessionStorage.getItem('merchantId'),
        sessionId : sessionStorage.getItem('sessionId')
    }
    $('#qrcodeloading').show()
    $('#qrcodeCardNum').hide()
    purchaseQRCapi(dta).then(res => {
        $('.acnameTag').text(`${res.merchantName}`)
        $('#qrcodeloading').hide()
        $('#qrcodeContainer').show()
        $('#qrcodeDisply').show()
        timer()
        var i = 0
        if (i == 0) {   
            i = 1;
            var width = 1;
            var id = setInterval(frame, 1200);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                    console.log('asda')
                } else {
                    width++;
                    $('#loadingContainerqrc').show()
                    $('#loadingContainerqrc').css("width", `${width}%`)
                    // $('#resendCode').hide()
                    if (width == 100) {
                        // resendSmsCode(cardInfo).then().catch(err => console.log(err))
                        $('#loadingContainerqrc').hide()
                        
                        // $('#resendCode').css("display", "block")
                    }
                }
            }
        }
        makeCode(res.qrString,'unionpay')

    }).catch(err => {
            $('#qrcodeDisply').hide()
            $('#qrcodeContainer').hide()
            $('#paymentMethods').show()

    })
}


