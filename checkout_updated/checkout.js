var object = {
    product: {
        callbackUrl: "",
        callbackTimeout: "",
        callbackSucess: ""
    }, basic: {}
};

const dev = "localhost"
const ser = "10.0.70.64"

var sessionId;
const baseUri = "https://gateway.paysyslabs.com"
const payCardUri = `http://${dev}:7000`

// 
const API_VERSION = "1.0.0"
const ACCESS_TOKEN = "Bearer 4c280096-0db9-44f3-8b4d-71747e630ea6"
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;






const callbackSucess = (url) => {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['product']['callbackSucess'] = url
            resolve({ url, status: 200 })
        } else {
            reject('Please give your valid sucess url')
        }
    })
}

const callbackUrl = (url) => {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['product']['callbackURL'] = url
            resolve({ url, status: 200 })
        } else {
            reject('Please give your valid callback url')
        }
    })
}

const callbackTimeout = (url) => {
    return new Promise((resolve, reject) => {
        var regex = new RegExp(expression);
        if (url.match(regex)) {
            object['product']['callbackTimeout'] = url
            resolve({ url, status: 200 })
        } else {
            reject('Please give your valid timeout url')
        }
    })
}




const configure = (inf) => {
    return new Promise((resolve, reject) => {
        console.log(inf)
        const dta = inf.product
        const bsc = inf.basic
        const data = {}


        // console.log()
        // console.log(dta.merchantID.toString())
        // if(typeof dta.merchantID == "number") {
        // }else{
        //     reject({status: 400, mess: "merchant ID is not valid"})
        // }
        

        if (dta.merchantID.toString().length != 15) {
            reject({ status: 400, mess: "merchant ID is not valid" })
        } else if (dta.TerminalID.toString().length != 8) {
            reject({ status: 400, mess: "Terminal id is not valid" })
        } else if (dta.orderID.toString().length != 8) {
            reject({ status: 400, mess: "Order id is not valid" })
        } else if (dta.currency.toString().length != 3) {
            reject({ status: 400, mess: "currency is not valid" })
        } else {




``

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
            // console.log(object)
            validateMerchant().then(res => {
                object['sessionId'] = res
                console.log(res)
                resolve({ object, status: 200 })
                showLightBox();
            }).catch(e => {
                reject(e)
            });
        }
    })


}

const validateMerchant = (e) => {
    return new Promise((resolve, reject) => {
        // console.log(object)
        if (object.product.callbackSucess == "") {
            reject({ status: 400, mess: "provide your callbackSucess url" })
        } else if (object.product.callbackTimeout == "") {
            reject({ status: 400, mess: "provide your callbackTimeout url" })
        } else if (object.product.callbackURL == "") {
            reject({ status: 400, mess: "provide your callback url" })
        } else {
            // resolve("asdsadasda")
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
                        resolve(response.data.sessionId)
                    }
                },
                error: () => {
                    console.log('Error!!');
                }
            })
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
