var object;
var sessionId;
const baseURI = "http://10.0.70.64:4999"
const payCardUri = "http://localhost:7000"




const configure = (inf) => {


    console.log(inf.dataInfo.merchantId.length)
    
    var data = {
        'amount': inf.dataInfo.amount,
        'orderId': inf.dataInfo.orderId,
        'currency': inf.dataInfo.currency,
        'phoneNo': inf.dataInfo.phoneNo,
        'operation': inf.dataInfo.operation,
        'description': inf.dataInfo.description,
        'merchantLogo': inf.dataInfo.merchantLogo,
        'merchantId': inf.dataInfo.merchantId,
        'merchantName': inf.dataInfo.merchantName,
        'callbackURL': inf.dataInfo.callbackURL
    }
    object = data;
    initialize();
}

const initialize = () => {
    $.ajax({
        url: `${baseURI}/api/v1/authenticate`,
        type: 'POST',
        contentType: 'application/json',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'X-Auth-Username': '797ec08a-0ebd-4e3c-a723-d092a51c2d34',
            'X-Auth-Password': '86e97e60-e6a8-4744-af08-48d33b2db885',
        },
        success:  (response) => {
            console.log('Response Code : ->' + response.responseCode);
            console.log('Response Desc : ->' + response.responseDescription);
            if (response.responseCode == "00") {
                token = response.data.token;
                //token save in object
                merchantConfigAPI(token);
            }
        },
        error:  () => {
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
        success:  (response) => {

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
