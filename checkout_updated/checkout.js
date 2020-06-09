var obj;
var sessionId;
const baseURI = "http://10.0.70.64:4999"
const payCardUri = "http://localhost:7000"




const configure = (inf) => {

    const dta = inf.dataInfo
    const data = {}
    if (dta.merchantId.length != 15) {
        console.log('Invalid Merchant id')
    } else {
        
    }

    var data = {
        // 'amount': dta.amount,
        // 'orderId': dta.orderId,
        // 'currency': dta.currency,
        // 'phoneNo': dta.phoneNo,
        // 'operation': dta.operation,
        // 'description': dta.description,
        // 'merchantLogo': dta.merchantLogo,
        // 'merchantId': dta.merchantId,
        // 'merchantName': dta.merchantName,
        // 'callbackURL': dta.callbackURL



        "orderId": dta.orderId,
        "merchantId": dta.merchantId, //merchantID
        "amount": dta.amount,
        "currency": dta.currency,
        "description": dta.description,
        "merchantLogo": dta.merchantLogo,
        "merchantName": dta.merchantName,
        "operationId": dta.operationId,
        "tid": dta.tid
    }


    parseInt(dta.amount)
    console.log(typeof dta.amount)


    obj = data;
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
        success: (response) => {
            console.log(response)
            console.log('Response Code : ->' + response.responseCode);
            console.log('Response Desc : ->' + response.responseDescription);
            if (response.responseCode == "00") {
                token = response.data.token;
                //token save in object
                merchantConfigAPI(token);
            }
        },
        error: () => {
            console.log('Error!!');
        }
    })
}

const merchantConfigAPI = (token) => {
    console.log(obj);
    $.ajax({
        url: `${baseURI}/api/v1/ecommerce/validateMerchant`, //change
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            "amount": "35",
            "currency": "586",
            "description": "Purchase",
            "merchantId": "010210742100010", //merchantID
            "merchantLogo": "",
            "operationId": "",
            "orderId": "00001440",
            "tid": "152110012" //terminalID
        }),
        headers: {
            'X-Auth-Token': token
        },
        success: (response) => {
            console.log(response);

            console.log('Response Code : ->' + response.responseDescription);
            if (response.responseCode == "00") {
                // showLightBox();
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
