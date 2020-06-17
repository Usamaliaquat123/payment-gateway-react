const token = "";
const smsCode = "";
const transferId = "";
var merchantInfo;
// const {validCard} = require('./components/cardVal')






// Maksing var

// var input = document.querySelector("#phoneCode");
// // var country = document.querySelector('#selectMonth')


// function lettersOnly(inp){
//     var regex = /[^a-z]/gi;
//     inp.value = inp.value.replace(regex, "")
// }
// window.intlTelInput(input, {
//     initialCountry: "auto",
//     separateDialCode: true,
//     geoIpLookup: function (success, failure) {
//         $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
//             var countryCode = (resp && resp.country) ? resp.country : "";
//             success(countryCode);
//         });
//     },
// })








Date.prototype.YYYYMMDDHHMMSS = function () {
    var yyyy = this.getFullYear().toString();
    var MM = pad(this.getMonth() + 1, 2);
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2)
    var ss = pad(this.getSeconds(), 2)

    return yyyy + MM + dd + hh + mm + ss;
};

function getDate() {
    d = new Date();
}

function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

function timer() {
    document.getElementById('timerButton').style.display = 'none';
    document.getElementById('countdown').style.display = 'block';
    var timeleft = 60;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('timerButton').style.display = 'none';
            document.getElementById('resendButton').style.display = 'block';
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 1000);

    d = new Date();
    authentication();
}

// document.getElementById('payButton').onclick = function(){
// 	console.log('payButton');
//     enrollmentVerfication(transferId);
// }


window.addEventListener("message", messageHandler, false);
function messageHandler(event) {
    const { action, key, value } = event.data
    if (action == 'save') {
        var obj = value;
        document.getElementById("amount").value = obj.amount;
        document.getElementById("exampleModalLabel").innerHTML = obj.merchantName;
        document.getElementById("merchantLogo").src = obj.merchantLogo;

        merchantInfo = obj;
    }
}

function closeIFrame() {
    var url = merchantInfo.callbackURL;
    parent.postMessage({ value: url }, "*");
}


function smsSending() {
    debugger;
    console.log(merchantInfo);
    console.log(merchantInfo.phoneNo);
    console.log(document.getElementById("cardNumber").value.replace(/-/g, ''));
    console.log(document.getElementById("expiry-year").value + document.getElementById("expiry-month").value);
    $.ajax({
        url: 'http://localhost:5998/api/v1/inquiry/smsSending',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            cardExpiredDate: document.getElementById("expiry-year").value + document.getElementById("expiry-month").value,
            cardNumber: document.getElementById("cardNumber").value.replace(/-/g, ''),
            cardPin: document.getElementById("security-code").value,
            channelType: "07",
            currencyCode: merchantInfo.currency,
            merId: merchantInfo.merchantId,
            orderId: merchantInfo.orderId,
            phoneNo: merchantInfo.phoneNo,
            txnAmount: merchantInfo.amount,
            txnTime: d.YYYYMMDDHHMMSS(),
        }),
        headers: {
            'X-Auth-Token': token
        },
        success: function (response) {
            if (response.responseCode == "00") {
                transferId = response.data.transferId;
                console.log(response);
                document.getElementById("payButton").disabled = false;
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}

const authentication = () => {
    $.ajax({
        url: 'http://localhost:5998/api/v1/authenticate',
        type: 'POST',
        contentType: 'application/json',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'X-Auth-Username': '797ec08a-0ebd-4e3c-a723-d092a51c2d34',
            'X-Auth-Password': '86e97e60-e6a8-4744-af08-48d33b2db885',
        },
        success: function (response) {
            if (response.responseCode == "00") {
                token = response.data.token;
                debugger;
                console.log('Token : ->' + response.data.token);
                smsSending();
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}


const enrollmentVerfication = (transferId) => {
    console.log(transferId);
    debugger;
    $.ajax({
        url: 'http://localhost:5998/api/v1/inquiry/enrollmentVerification',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            smsVerifyCode: document.getElementById("smsCode").value,
            transferId: transferId
        }),
        headers: {
            'X-Auth-Token': token
        },
        success: function (response) {
            if (response.responseCode == "00") {
                console.log(response);
                //closeIFrame();
                document.getElementById("errorMessage").style.display = "block";
                document.getElementById("errorMessage").value = "Error";
            }
        },
        error: function () {
            document.getElementById("errorMessage").style.display = "block";
            document.getElementById("errorMessage").value = "Error";
        }
    })
}



function showModal() {
    $('#modal-form').modal('show');
}
function hideModal() {
    $('#modal-form').modal('hide');
}
