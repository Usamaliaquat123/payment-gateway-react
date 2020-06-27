const cvcChecker = () => {
    var cvcVal = $('#cvcInput')

    if(errorState.cardcvc.err == true){
        cvcVal.css('background-size', '100% 1px, 100% 1px')
        cvcVal.css('outline', 'none')
    }else{
        cvcVal.css('background-size', '0 2px, 100% 1px')
        cvcVal.css('outline', '')
    }
}

const crdNumberChecker = () => {
    var crdVal = $('#cardNumber')
    if(errorState.cardNumber.err == true){
        crdVal.css('background-size', '100% 1px, 100% 1px')
        crdVal.css('outline', 'none')
    }else{
        crdVal.css('background-size', '0 2px, 100% 1px')
        crdVal.css('outline', '')
    }
}


const crdDateChecker = () => {
    var crdDate = $('#expDate')
    if(errorState.cardDate.err == true){
        crdDate.css('background-size', '100% 1px, 100% 1px')
        crdDate.css('outline', 'none')
    }else{
        crdDate.css('background-size', '0 2px, 100% 1px')
        crdDate.css('outline', '')
    }
}
const crdFirstName = () => {
    var fstName = $('#firstname')
    if(errorState.firstname.err == true){
        fstName.css('background-size', '100% 1px, 100% 1px')
        fstName.css('outline', 'none')
    }else{
        fstName.css('background-size', '0 2px, 100% 1px')
        fstName.css('outline', '')
    }
}
const crdLastname = () => {
    var lstName = $('#lastname')
    if(errorState.lastname.err == true){
        lstName.css('background-size', '100% 1px, 100% 1px')
        lstName.css('outline', 'none')
    }else{
        lstName.css('background-size', '0 2px, 100% 1px')
        lstName.css('outline', '')
    }
}


const emailChecker = () => {
    var email = $('#emailAddr')
    if(errorState.email.err == true){
        email.css('background-size', '100% 1px, 100% 1px')
        email.css('outline', 'none')
        
    }else{
        email.css('background-size', '0 2px, 100% 1px')
        email.css('outline', '')

    }
}


const phoneChecker = () => {
    var phNum = $('#phoneCode')
    if(errorState.phNumber.err == true){
        phNum.css('background-size', '100% 1px, 100% 1px')
        phNum.css('outline', 'none')
        
    }else{
        phNum.css('background-size', '0 2px, 100% 1px')
        phNum.css('outline', '')

    }   
}