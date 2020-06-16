window.onload = () => {
    var ddlYears = document.getElementById("ddlYears");
    var currentYear = (new Date()).getFullYear();
    
    var nextyrs = currentYear + 13
    for (var i = currentYear; i <= nextyrs; i++) {
        var option = document.createElement("OPTION");
        option.innerHTML = i;
        option.value = i;
        ddlYears.appendChild(option);
    }
};




