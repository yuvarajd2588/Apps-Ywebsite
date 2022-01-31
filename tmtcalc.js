class Cftcalculator {

    
}
    
    
    
    //Format left side Link for Calculators
document.getElementById('link1').style.backgroundColor = 'LIGHTGRAY'
document.getElementById('link2').style.backgroundColor = '#E46A44'
document.getElementById('link3').style.backgroundColor = 'LIGHTGRAY'

document.getElementById('link1').style.color = 'BLACK'
document.getElementById('link2').style.color = 'BLACK'
document.getElementById('link3').style.color = 'BLACK'

function cftcalc() {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = 'index.html';
    //link.setAttribute('async', ''); // make it async
    link.onload = function(e) {console.log('inside onLoad')};
    link.onerror = function(e) {console.log('inside onError')};
    document.head.appendChild(link);

    document.getElementById('link1').style.backgroundColor = '#E46A44'
    document.getElementById('link2').style.backgroundColor = 'LIGHTGRAY'
    document.getElementById('link3').style.backgroundColor = 'LIGHTGRAY'
}

function tmtcalc() {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = 'tmtcalc.html';
    //link.setAttribute('async', ''); // make it async
    link.onload = function(e) {console.log('inside onLoad')};
    link.onerror = function(e) {console.log('inside onError')};
    document.head.appendChild(link);

    document.getElementById('link1').style.backgroundColor = 'LIGHTGRAY'
    document.getElementById('link2').style.backgroundColor = '#E46A44'
    document.getElementById('link3').style.backgroundColor = 'LIGHTGRAY'
}

function tilecalc() {
    var link = document.createElement('link');
    link.rel = 'import';
    link.href = 'tilecalc.html';
    //link.setAttribute('async', ''); // make it async
    link.onload = function(e) {console.log('inside onLoad')};
    link.onerror = function(e) {console.log('inside onError')};
    document.head.appendChild(link);


    document.getElementById('link1').style.backgroundColor = 'LIGHTGRAY'
    document.getElementById('link2').style.backgroundColor = 'LIGHTGRAY'
    document.getElementById('link3').style.backgroundColor = '#E46A44'
}

function copyfunc(appno) {
    var app = appno
    console.log("after copy clicked")
    var textarea = document.createElement("textarea");
    if(app == 1){
        textarea.textContent = 'https://play.google.com/store/apps/details?id=calculator.cubicfeet.truck.truckcubicfeetcalculator'
    }else if(app == 2){
        textarea.textContent = 'https://play.google.com/store/apps/details?id=com.yuvaraj.tilecarpetvinylfloorwallareacalculator'
    }else if(app == 3){
        textarea.textContent = 'https://play.google.com/store/apps/details?id=estimator.sandfilling.tmt.steel.com.tmtsteelsandfillingestimator'
    }
    
    textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
        return document.execCommand("copy");  // Security exception may be thrown by some browsers.
    }
    catch (ex) {
        console.warn("Copy to clipboard failed.", ex);
        return false;
    }
    finally {
        document.body.removeChild(textarea);
    }
}


function submitContactForm(){
    const ctName = document.getElementById('contactName').value
    const ctEmail = document.getElementById('contactEmail').value
    const ctMobile = document.getElementById('contactMobile').value
    const ctQuery = document.getElementById('contactQuery').value
    var ctError = document.getElementById('contactError').value
    var contactValues = {
        "contactName"    : ctName,
        "contactEmail"     : ctEmail,
        "contactMobile"    : ctMobile,
        "contactQuery" : ctQuery
    };
    //Below ajax call is asyncronus. to make it sync change (async= false(!1). So call to backend will happen synchromusly.)
    $.ajax({
        url: "http://localhost:8080/contactform",
        type : "POST",
        data : JSON.stringify(contactValues),
        
        async: !1,
        crossDomain: true,
        contentType: 'application/json',
        success : function(contactResponse){    
            //Below line resets the form data to initial value. In our case it is blank
            $('#contactForm')[0].reset();
            document.getElementById('contactError').innerHTML = contactResponse
            document.getElementById("contactError").style.color ="RED"
            // $.each(contactResponse.Errors, function (key, value) {
            //     if (value != null) {
            //         $("#Err_" + key).html(value[value.length - 1].ErrorMessage);
            //     }
            // });
        },
        error : function(e) {
            var responseerrors = e.responseJSON;
            console.log("errors in ajax ==> "+e.responseText);
            alert(responseerrors.error);
            ctError = responseerrors.error + ". Information not sent. Please try again later";
            document.getElementById('contactError').innerHTML = ctError 
            document.getElementById("contactError").style.color ="RED"
        }
    });   
    
}


    
    
    
    
    