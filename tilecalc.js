class Cftcalculator {

    
}



   //Format left side Link for Calculators
document.getElementById('link1').style.backgroundColor = 'LIGHTGRAY'
document.getElementById('link2').style.backgroundColor = 'LIGHTGRAY'
document.getElementById('link3').style.backgroundColor = '#E46A44'

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