// const token = "";
// const smsCode = "";
// const transferId = "";
var merchantInfo;
var merchantLogo
// const {validCard} = require('./components/cardVal')







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
        console.log(obj.product)
        console.log(obj.product.merchantLogo)
        sessionStorage.setItem('merchantId',obj.product.merchantId)
        sessionStorage.setItem('sessionId',obj.sessionId)
        // document.getElementById("amount").value = obj.product.amount
        $('#merchantName').text(obj.product.merchantName)
        $('#priceTag').text(`${obj.product.amount} Rs`)
        // document.getElementById("merchantLogo").src = obj.product.merchantLogo;
        $('#merchantLogo').attr("src",`${obj.product.merchantLogo}`)
        sessionStorage.setItem('curreny',obj.product.currency)
        sessionStorage.setItem('originalOrderId',obj.product.orderId)
        sessionStorage.setItem('tid',obj.product.tid)
        sessionStorage.setItem('txnAmount',obj.product.amount)

        merchantInfo = obj;
    }
}

function closeIFrame() {
    var url = merchantInfo.product.callbackSucess;
    parent.postMessage({ value: url }, "*");
}

function timeOutCallback(){
    var url = merchantInfo.product.callbackTimeout;
    parent.postMessage({ value: url }, "*")
}

function callBackError() {
    var url = merchantInfo.product.callBackError;
    parent.postMessage({ value: url }, "*")
}

function closePopup(){
    var url = "close";
    parent.postMessage({ value: url }, "*")
}








function showModal() {
    $('#modal-form').modal('show');
}
function hideModal() {
    $('#modal-form').modal('hide');
}
