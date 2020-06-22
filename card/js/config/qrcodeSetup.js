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



    
function makeCode (e) {      

    var elText = e;
    
    // if (!elText.value) {
    //     alert("Input a text");
    //     elText.focus();
    //     return;
    // }
    
    qrcode.makeCode(elText);
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
        console.log(err)
    })
}


genCode = (e) => {
    console.log(e)
    console.log(sessionStorage.getItem('merchantId'))
    console.log(sessionStorage.getItem('sessionId'))
    const dta = {
        cardNumber : e,
        merId :  sessionStorage.getItem('merchantId'),
        sessionId : sessionStorage.getItem('sessionId')
    }
    $('#qrcodeloading').show()
    $('#qrcodeCardNum').hide()
    purchaseQRCapi(dta).then(res => {
        
        $('#qrcodeloading').hide()
        $('#qrcodeContainer').show()
        $('#qrcodeDisply').show()
        console.log(res)

        makeCode(res.qrString)
        $('.acnameTag').text(`${res.merchantName}`)
    }).catch(err => console.log(err))
}

