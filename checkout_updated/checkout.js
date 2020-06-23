var object;
var sessionId;
const baseURI = "http://10.0.70.64:4999"
const payCardUri = "http://localhost:7000"
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;


// const checkout  = (basicInformation,) => {
//     return new Promise((resolve, reject) => {
        
//     })
// }

const callbackSucess = (url) => {
    return new Promise((resolve, reject) =>{
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['callbackSucess'] = url
            resolve({url, code: 200})
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
            resolve({url, code: 200})
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
            resolve({url, code: 200})
        } else {
            reject('Please give your valid timeout url')
        }
    })
}



const config = (data) => {
    return new Promise((resolve, reject) => {
        // console.log(inf.dataInfo.merchantId.length)
        const dta = inf.dataInfo
        const data = {}
        if (dta.merchantId.length == 15) {
            if (dta.orderId.length == 8) {
                data['amount'] = ('0' + dta.amount).slice(-2)
            } else {
                data['amount'] = dta.amount
            }
            if (dta.amount.length == 1) { data['amount'] = ('0' + dta.amount).slice(-2) } else { data['amount'] = dta.amount }
    
            data['orderId'] = dta.orderId
            data['currency'] = dta.currency
            data['description'] = dta.description
            data['merchantLogo'] = dta.merchantLogo
            data['merchantId'] = dta.merchantId
            data['operationId'] = dta.operationId
            data['merchantName'] = dta.merchantName
            data['tid'] = dta.tid
    
            object = data;
            console.log(object)
            validateMerchant();
        }    
    })
}

const configure = (inf) => {
    console.log(inf.dataInfo.merchantId.length)
    const dta = inf.dataInfo
    const data = {}
    if (dta.merchantId.length == 15) {
        if (dta.orderId.length == 8) {
            data['amount'] = ('0' + dta.amount).slice(-2)
        } else {
            data['amount'] = dta.amount
        }
        if (dta.amount.length == 1) { data['amount'] = ('0' + dta.amount).slice(-2) } else { data['amount'] = dta.amount }

        data['orderId'] = dta.orderId
        data['currency'] = dta.currency
        data['description'] = dta.description
        data['merchantLogo'] = dta.merchantLogo
        data['merchantId'] = dta.merchantId
        data['operationId'] = dta.operationId
        data['merchantName'] = dta.merchantName
        data['tid'] = dta.tid

        object = data;
        console.log(object)
        validateMerchant();
    } else {

    }

}

const validateMerchant = () => {
    console.log(object)
    $.ajax({
        url: `${baseURI}/api/v1/ecommerce/validateMerchant`,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "amount": object.amount,
            "currency": object.currency,
            "description": object.description,
            "merchantId": object.merchantId,
            "merchantLogo": object.merchantLogo,
            "operationId": object.operationId,
            "orderId": object.orderId,
            "tid": object.tid ,
            "callBackURL": ""
        }),
        headers: {
            "Authorization": "Basic Nzk3ZWMwOGEtMGViZC00ZTNjLWE3MjMtZDA5MmE1MWMyZDM0Ojg2ZTk3ZTYwLWU2YTgtNDc0NC1hZjA4LTQ4ZDMzYjJkYjg4NQ=="
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
