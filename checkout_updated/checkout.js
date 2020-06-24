var object = {product:{}, basic: {}};
var sessionId;
const baseUri = "https://gateway.paysyslabs.com"
const payCardUri = "http://localhost:7000"
const API_VERSION = "1.0.0" 
const ACCESS_TOKEN = "Bearer 4c280096-0db9-44f3-8b4d-71747e630ea6"
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;






const callbackSucess = (url) => {
    return new Promise((resolve, reject) =>{
        var regex = new RegExp(expression);
        if (url.match(regex)) {

            object['product']['callbackSucess'] = url
            resolve({url, status: 200})
        } else {
            reject('Please give your valid sucess url')
        }
    })
}

const callbackUrl = () => {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['callbackURL'] = url
            resolve({url, status: 200})
        } else {
            reject('Please give your valid callback url')
        }
    })
}

const callbackTimeout = () => {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['callbackTimeout'] = url
            resolve({url, status: 200})
        } else {
            reject('Please give your valid timeout url')
        }
    })
}




const configure = (inf) => {
    console.log(inf)
    const dta = inf.product
    const bsc = inf.basic
    const data = {}
    if (dta.merchantID.length == 15) {
        // if (dta.orderID.length == 8) {
        //     console.log( ('0' + dta.amount).slice(-2))
        //     data['product']['amount'] = ('0' + dta.amount).slice(-2)
        // } else {
        //     data['product']['amount'] = dta.amount
        // }
        // if (dta.amount.length == 1) { data['product']['amount'] = ('0' + dta.amount).slice(-2) } else { data['product']['amount'] = dta.amount }
        // ================= P R O D U C T  ========================
        object['product']['orderId'] = dta.orderID
        object['product']['currency'] = dta.currency
        object['product']['description'] = dta.description
        object['product']['merchantLogo'] = dta.merchantLogo
        object['product']['merchantId'] = dta.merchantID
        object['product']['amount'] = dta.amount
        object['product']['operationId'] = dta.operationId
        object['product']['merchantName'] = dta.merchantName
        object['product']['tid'] = dta.TerminalID
        // ================= B A S I C ==  I N F O ===================
        object['basic']['FirstName'] = bsc.FirstName
        object['basic']['LastName'] = bsc.LastName
        object['basic']['Address'] = bsc.Address
        object['basic']['MobileNumber'] = bsc.MobileNumber
        object['basic']['EmailAddress'] = bsc.EmailAddress
        // object['basic']['description'] = bsc.description

        // object = data;
        console.log(object)
        validateMerchant();
    } else {

    }

}

const validateMerchant = (e) => {
    console.log(object)

    var e = object.product
    $.ajax({
        url: `${baseUri}/validateMerchant/${API_VERSION}`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
        "amount": e.amount,
        "currency": e.currency,
        "description": e.description,
        "merchantId": e.merchantId,
        "operationId": e.operationId,
        "orderId": e.orderId,
        "tid": e.tid
        }),
        headers: {
            "Authorization": `${ACCESS_TOKEN}`
        },
        success: (response) => {
            console.log('Response Code : ->' + response.responseCode);
            console.log('Response Desc : ->' + response.responseDescription);
            if (response.responseCode == "00") {
                console.log(response)
                sess = response.data.sessionId;
                object['sessionId'] = sess
                showLightBox();
            }
        },
        error: () => {
            console.log('Error!!');
        }
    })
}

const merchantConfigAPI = token => {
    console.log(object);
    $.ajax({
        url: `${baseURI}/api/v1/ecommerce/validateMerchant`, //change
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "amount": "10",
            "currency": "586",
            "description": "10",
            "merchantId": "10",
            "merchantLogo": "10",
            "operationId": "10",
            "orderId": "10",
            "tid": "15211001"
        }),
        headers: {
            'X-Auth-Token': token
        },
        success: (response) => {

            console.log('Response Code : ->' + response.responseDescription);
            if (response.responseCode == "00") {
                showLightBox();
            }
        },
        error: () => {
            //console.log('Error!!');
        }
    })
}

const showLightBox = () => {
    var iframe = document.createElement("iframe"),
        src = `${payCardUri}/payment`; //java 
    iframe.setAttribute("id", "lightbox");
    iframe.onload = function () { sendData(); };
    document.getElementsByTagName('body')[0].appendChild(iframe), iframe.title = "Hosted Checkout", iframe.src = src, iframe.style.zIndex = 9999, iframe.style.display = "block !important", iframe.style.backgroundColor = "transparent", iframe.style.border = "0px none transparent", iframe.style.overflowX = "hidden", iframe.style.overflowY = "auto", iframe.style.visibility = "visible", iframe.style.margin = "0px", iframe.style.padding = "0px", iframe.style.position = "fixed", iframe.style.left = "0px", iframe.style.top = "0px", iframe.style.width = "100%", iframe.style.height = "100%";

}
const sendData = () => {
    const data = object;
    var iframe = document.getElementById("lightbox");
    iframe.contentWindow.postMessage({
        action: 'save',
        key: 'data',
        value: data
    }, '*')
}

var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

eventer(messageEvent, function (e) {
    $('#lightbox').remove();
    $(location).attr('href', e.data.value);
}, false);
