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








function showModal() {
    $('#modal-form').modal('show');
}
function hideModal() {
    $('#modal-form').modal('hide');
}
