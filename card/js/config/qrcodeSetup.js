var qrcode = new QRCode("qrcode");

function makeCode () {      
    var elText = document.getElementById("text");
    
    if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
    }
    
    qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
    on("blur", function () {
        makeCode();
    }).
    on("keydown", function (e) {
        if (e.keyCode == 13) {
            makeCode();
        }
    });



    
function makeCode () {      
    
    var elText = "00020101021215314182058600049992010210742100010520407425303586540530.005802PK5915Test Merchant 56008Karachi 626001202020061518020230093005202020061518020230093007088913100163040d79";
    
    // if (!elText.value) {
    //     alert("Input a text");
    //     elText.focus();
    //     return;
    // }
    
    qrcode.makeCode(elText);
}