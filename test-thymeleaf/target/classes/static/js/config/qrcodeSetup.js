var qrcode = new QRCode("qrcode");
var cardNumVal = 1
let errccqc = $('#errccqc')
const payCardUri = "http://10.0.70.64:7000"

$('document').ready(() => {
    $('#loadingContainerqrc').hide()
})


    
function makeCode (e,crdName) { 
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: e,
        logo: `${payCardUri}/img/${crdName}.png`,
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

validateQRc = () => {
    $('#qrcodeloading').show()
    $('#paymentMethods').hide()

        const dta = {
            cardNumber : '6222821234560017',
            merId :  sessionStorage.getItem('merchantId'),
            sessionId : sessionStorage.getItem('sessionId')
        }   
        purchaseQRCapi(dta).then(res => {
            $('#qrcodeloading').hide()
            $('#qrcodeContainer').show()
            $('#qrcodeDisply').show()
            $('.acnameTag').text(`${res.merchantName}`)
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
                            $('#loadingContainerqrc').hide()
                        }
                    }
                }
            }
            makeCode(res.qrString,'unionpay')
    
        }).catch(err => {
            $('#qrcodeloading').hide()
                $('#qrcodeDisply').hide()
                $('#qrcodeContainer').hide()
                $('#paymentMethods').show()
    
        })
}


