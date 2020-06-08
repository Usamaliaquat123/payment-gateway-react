var token = "";
var smsCode = "";
/*
$(document).ready(function () {
    $('#card-number').mask('0000-0000-0000-0000');
})
document.getElementById('card-number').addEventListener('input', function () {
    var text = this.value;

    if (text == "") {
        var mastercard = document.getElementById('mastercard');
        mastercard.style.opacity = "1";
        mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

        var visa = document.getElementById('visa');
        visa.style.opacity = "1";
        visa.style.filter = 'alpha(opacity=100)'; // IE fallback

        var unionpay = document.getElementById('unionpay');
        unionpay.style.opacity = "1";
        unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback
    }

    if (text[0] == '4') {
        var visa = document.getElementById('visa');
        visa.style.opacity = "1";
        visa.style.filter = 'alpha(opacity=100)'; // IE fallback

        var mastercard = document.getElementById('mastercard');
        mastercard.style.opacity = "0.1";
        mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

        var unionpay = document.getElementById('unionpay');
        unionpay.style.opacity = "0.1";
        unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback
    }
    if (text[0] == '5') {
        var mastercard = document.getElementById('mastercard');
        mastercard.style.opacity = "1";
        mastercard.style.filter = 'alpha(opacity=100)'; // IE fallback

        var visa = document.getElementById('visa');
        visa.style.opacity = "0.1";
        visa.style.filter = 'alpha(opacity=10)'; // IE fallback

        var unionpay = document.getElementById('unionpay');
        unionpay.style.opacity = "0.1";
        unionpay.style.filter = 'alpha(opacity=10)'; // IE fallback
    }
    if (text[0] == '6') {
        var unionpay = document.getElementById('unionpay');
        unionpay.style.opacity = "1";
        unionpay.style.filter = 'alpha(opacity=100)'; // IE fallback

        var mastercard = document.getElementById('mastercard');
        mastercard.style.opacity = "0.1";
        mastercard.style.filter = 'alpha(opacity=10)'; // IE fallback

        var visa = document.getElementById('visa');
        visa.style.opacity = "0.1";
        visa.style.filter = 'alpha(opacity=10)'; // IE fallback
    }


});
*/
function submitForm() {
    console.log('Merchant Id :' + document.getElementById("merchantId").value);
    console.log('Card Number :' + document.getElementById("card-number").value);
    console.log('Amount :' + document.getElementById("amountEnter").value);
    console.log('Expiry Year :' + document.getElementById("expiry-year").value);
    console.log('Expiry Month :' + document.getElementById("expiry-month").value);
    console.log('Security Code :' + document.getElementById("security-code").value);
    console.log('Card Holder :' + document.getElementById("card-holder").value);
    d = new Date();
    console.log('OrderId: ' + d.YYYYMMDDHHMMSS());
    console.log('Transaction Time: ' + d.YYYYMMDDHHMMSS());
    console.log('Currency Code: 586');
}

function modalOpen() {
    // debugger;
    console.log('modal open');
    console.log(document.getElementById("amountEnter").value);
    document.getElementById("amount-set").value = "$ " + document.getElementById("amountEnter").value
    //  $("#myModal").modal("toggle");

	document.getElementById("exampleModalLabel").innerHTML ="Test";
	$("#myModal").modal("toggle");
	
    /*$.ajax({
        url: 'http://localhost:5999/api/v1/authenticate',
        type: 'POST',
        contentType: 'application/json',
        headers: {
            // 'Access-Control-Allow-Origin': 'http://localhost:5999',
            // 'Access-Control-Allow-Credentials': 'true',
            'X-Auth-Username':'797ec08a-0ebd-4e3c-a723-d092a51c2d34',
            'X-Auth-Password':'86e97e60-e6a8-4744-af08-48d33b2db885',
        },
        success: function(response){
            console.log('Response Code : ->'+response.responseCode);
            console.log('Response Code : ->'+response.responseDescription);
            if(response.responseCode == "00"){
                token = response.data.token;
                console.log('Token : ->'+response.data.token);
                console.log(document.getElementById("exampleModalLabel").innerHTML);
                console.log(document.getElementById("merchantName").value);
                document.getElementById("exampleModalLabel").innerHTML =document.getElementById("merchantName").value
                $("#myModal").modal("toggle");
            }
        },
        error: function(){
            console.log('Error!!');
        }
    })*/
}

function callbackFunction(xmlhttp) {
    // alert(xmlhttp.responseXML);
}

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
    alert(d.YYYYMMDDHHMMSS());
}

function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;

}

// function timer() {
//     document.getElementById('timerButton').style.display = 'none';
//     document.getElementById('countdown').style.display = 'block';
//     var timeleft = 60;
//     var downloadTimer = setInterval(function () {
//         if (timeleft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById('countdown').style.display = 'none';
//             document.getElementById('timerButton').style.display = 'block';
//         } else {
//             document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//         }
//         timeleft -= 1;
//     }, 1000);

//     d = new Date();
//     console.log("Token received from login :-> "+token);
//     $.ajax({
//         url: 'http://localhost:5999/api/v1/smsSending',
//         type: 'POST',
//         contentType: 'application/json',
//         data:{
//             cardExpiredDate: document.getElementById("expiry-month").value+document.getElementById("expiry-year").value,
//             cardNumber: document.getElementById("card-number").value.replace('-',''),
//             cardPin: document.getElementById("security-code").value,
//             channelType: "07",
//             currencyCode: "586",
//             merId: document.getElementById("merchantId").value,
//             orderId: d.YYYYMMDDHHMMSS(),
//             phoneNo: "923212406318",
//             txnAmount: document.getElementById("amountEnter").value,
//             txnTime:d.YYYYMMDDHHMMSS(),
//         },
//         headers: {
//             'X-Auth-Token':token
//         },
//         success: function(response){
//             console.log('Response Code : ->'+response.responseCode);
//             console.log('Response Code : ->'+response.responseDescription);
//             if(response.responseCode == "00"){
//                 token = response.getResponseHeader('x-auth-next-token');
//             }
//         },
//         error: function(){
//             console.log('Error!!');
//         }
//     })
// }

// async function fetchHtmlAsText(url, contentDiv) {
// 	console.log("contentDiv.innerHTML: " + contentDiv.innerHTML);
//     const response = await fetch(url);
//     contentDiv.innerHTML = await response.text();
// 	if (document.getElementById("amount-set") != null)
// 		document.getElementById("amount-set").value = "$ " + document.getElementById("amountEnter").value;
// 	$("#myModal").modal("toggle");
// }

function externalPageButton(){
    console.log('External Page Button');
	var iframe = document.createElement("iframe"),
	src = "http://10.0.115.108:7000/testControllerTwo";
	// iframe.addEventListener("unload", transactionConfirmation);
	iframe.setAttribute("id", "lightbox");
	document.getElementsByTagName('body')[0].appendChild(iframe), iframe.title = "Hosted Checkout", iframe.src = src, iframe.style.zIndex = 9999, iframe.style.display = "block !important", iframe.style.backgroundColor = "transparent", iframe.style.border = "0px none transparent", iframe.style.overflowX = "hidden", iframe.style.overflowY = "auto", iframe.style.visibility = "visible", iframe.style.margin = "0px", iframe.style.padding = "0px", iframe.style.position = "fixed", iframe.style.left = "0px", iframe.style.top = "0px", iframe.style.width = "100%", iframe.style.height = "100%";
}

// transactionConfirmation = function () {
// }

function closeIFrame(){
    $('#lightbox').remove();
	$(location).attr('href', e.data.value);
}

$('.li-modal').on('click', function(e){
    e.preventDefault();
    $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
  });