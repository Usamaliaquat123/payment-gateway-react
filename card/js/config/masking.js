const masking = () => {
    return new Promise((resolve, reject) => {
        try {
            let cardNumber = $('#cardNumber')
            let cvcInput = $('#cvcInput')
            let expDate = $('#expDate')
            let phCode = $('#phoneCode')
            let cardNumberQRC = $('#cardNumberQRC')
            let verifyCode = $('#verifyCode')
            let verifyCode2 = $('#verifyCode2')
            let verifyCode3 = $('#verifyCode3')
            let verifyCode4 = $('#verifyCode4')
            let verifyCode5 = $('#verifyCode5')
            let verifyCode6 = $('#verifyCode6')
            cardNumber.mask('0000 - 0000 - 0000 - 0000');
            cardNumberQRC.mask('0000 - 0000 - 0000 - 0000');
            cvcInput.mask('000')
            phCode.mask('000-00000000000000000')
            expDate.mask('00 / 00')
            verifyCode.mask('0')
            verifyCode2.mask('0')
            verifyCode3.mask('0')
            verifyCode4.mask('0')
            verifyCode5.mask('0')
            verifyCode6.mask('0')
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}

