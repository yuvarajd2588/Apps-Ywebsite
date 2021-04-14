class Cftcalculator {

validateInput(leninp,widinp,htinp,lenunit,widunit,htunit){
    if(leninp <= 0){
        document.getElementById("leninp").style.borderColor="RED"
        document.getElementById("leninp").focus = true
        document.getElementById('lenerror').innerHTML = "Enter length Value"
        document.getElementById('lenerror').style.visibility = 'visible'
        document.getElementById('widerror').style.visibility = 'hidden'
        document.getElementById('hterror').style.visibility= 'hidden'
        //alert("Length must be filled out");
        return false // this prevents from being submitted
    }else if (widinp <= 0){
        document.getElementById("widinp").style.borderColor="RED"
        document.getElementById("widinp").focus = true
        document.getElementById('widerror').innerHTML = "Enter Width Value"
        document.getElementById('lenerror').style.visibility = 'hidden'
        document.getElementById('widerror').style.visibility = 'visible'
        document.getElementById('hterror').style.visibility= 'hidden'
        return false // this prevents from being submitted   
    } else if (htinp <= 0){
        document.getElementById("htinp").style.borderColor="RED"
        document.getElementById("htinp").focus = true
        document.getElementById('hterror').innerHTML = "Enter Width Value"
        document.getElementById('lenerror').style.visibility = 'hidden'
        document.getElementById('widerror').style.visibility = 'hidden'
        document.getElementById('hterror').style.visibility= 'visible'
        return false // this prevents from being submitted   
    }else{
        validinput = 1
        document.getElementById('lenerror').innerHTML = ''
        document.getElementById('widerror').innerHTML = ''
        document.getElementById('hterror').innerHTML = ''

        //Length input conversion
        if (lenunit == 'Foot'){
            conlen = this.convertFeetToInches(leninp)
        }else if (lenunit == 'Inches'){
            conlen = leninp
        }else if (lenunit == 'Meters'){
            conlen = this.convertMetersToInches(leninp)
        }else if (lenunit == 'Yards'){
            conlen = this.convertYardstoInches(leninp)
        }

        //Width input conversion
        if (widunit == 'Foot'){
            conwid = this.convertFeetToInches(widinp)
        }else if (widunit == 'Inches'){
            conwid = widinp
        }else if (widunit == 'Meters'){
            conwid = this.convertMetersToInches(widinp)
        }else if (widunit == 'Yards'){
            conwid = this.convertYardstoInches(widinp)
        }

        //Height input conversion
        if (htunit == 'Foot'){
            conht = this.convertFeetToInches(htinp)
        }else if (htunit == 'Inches'){
            conht = htinp
        }else if (htunit == 'Meters'){
            conht = this.convertMetersToInches(htinp)
        }else if (htunit == 'Yards'){
            conht = this.convertYardstoInches(htinp)
        }

        calculator.calculateResultAndDisplay()
    }
}

calculateResultAndDisplay(){
    if (validinput == 1){
        finalresult = (conlen * conwid * conht) / 1728
        console.log(finalresult,conlen,conwid,conht)
        document.getElementById('displayresult').value = "CFT(ft3) :" +finalresult
        document.getElementById('displayresult').style.color = 'RED'
        validinput = 0;
    }
}

convertFeetToInches(value){
    value = value * 12
    return value
}
convertMetersToInches(value){
    value = value * 12
    return value
}
convertYardstoInches(value){
    value = value * 12
    return value
}

Displayresult(){

}

clearFunction(){

}

}
var conlen, conwid, conht, finalresult, validinput = 0;
const calcbutton = document.querySelector('[calc-button]')
const clearbutton = document.querySelector('[clear-button]')

const lengthtextbox = document.getElementById('leninp')
const widthtextbox = document.getElementById('widinp')
const httextbox = document.getElementById('htinp')

const result = document.getElementById('displayresult')

const calculator = new Cftcalculator()

lengthtextbox.addEventListener('click',Text =>{
    console.log('Textbox Listener')
    document.getElementById("leninp").style.borderColor='BLACK'
})
widthtextbox.addEventListener('click',Text =>{
    console.log('Textbox Listener')
    document.getElementById("widinp").style.borderColor='BLACK'
})
httextbox.addEventListener('click',Text =>{
    console.log('Textbox Listener')
    document.getElementById("htinp").style.borderColor='BLACK'
})

   //Format left Link for Calculators
document.getElementById('link1').style.backgroundColor = '#E46A44'
document.getElementById('link2').style.backgroundColor = 'LIGHTGRAY'
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
    link.href = 'tmtcalc.html';
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

    //copyTextToClipboard('https://play.google.com/store/apps/details?id=calculator.cubicfeet.truck.truckcubicfeetcalculator')
    //document.execCommand('https://play.google.com/store/apps/details?id=calculator.cubicfeet.truck.truckcubicfeetcalculator')
}

//Button Listeners
calcbutton.addEventListener('click',button => {
    const leninp = document.getElementById('leninp').value
    const widinp = document.getElementById('widinp').value
    const htinp = document.getElementById('htinp').value
    const lenunit = document.getElementById('unitlen').value
    const widunit = document.getElementById('unitwid').value
    const htunit = document.getElementById('unitht').value
    calculator.validateInput(leninp,widinp,htinp,lenunit,widunit,htunit)
    calculator.Displayresult()

})

function clearFunction(){
    document.getElementById('leninp').value = ''
    document.getElementById('widinp').value = ''
    document.getElementById('htinp').value = ''
    document.getElementById('lenunit').value = ''
    document.getElementById('widunit').value = ''
    document.getElementById('htunit').value = ''

    document.getElementById('displayresult').value = ''

}

//Dropdown Event Listener to Clear result
const dropdownevent1 = document.getElementById('unitlen')
const dropdownevent2 = document.getElementById('unitwid')
const dropdownevent3 = document.getElementById('unitht')

dropdownevent1.addEventListener('click',Text =>{
    console.log('Dropdown listenser')
    document.getElementById("displayresult").value=''
})
dropdownevent2.addEventListener('click',Text =>{
    console.log('Dropdown listenser')
    document.getElementById("displayresult").value=''
})
dropdownevent3.addEventListener('click',Text =>{
    console.log('Dropdown listenser')
    document.getElementById("displayresult").value=''
})


