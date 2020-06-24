// const token = "";
// const smsCode = "";
// const transferId = "";
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








function timer() {
    var timeleft = 120;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            $('#countdown').hide()
        } else {
            document.getElementById("countdown").innerHTML = timeleft + " secs";
        }
        timeleft -= 1;
    }, 1000);
}




window.addEventListener("message", messageHandler, false);
function messageHandler(event) {
    const { action, key, value } = event.data
    if (action == 'save') {
        var obj = value;
        console.log(obj)
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
