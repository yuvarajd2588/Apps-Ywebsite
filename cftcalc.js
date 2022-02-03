class Cftcalculator {

validateInput(leninp,widinp,htinp,lenunit,widunit,htunit){
    var validLenInput = 1, validWidInput = 1, validHtInput = 1
    var lenDecValid = Number.isInteger(+leninp)
    var widDecValid = Number.isInteger(+widinp)
    var htDecValid = Number.isInteger(+htinp)
   
    if(leninp <=0 || !Number.isInteger(+leninp)){
        validLenInput = 0
        document.getElementById("leninp").style.borderColor="RED"
        document.getElementById("widinp").style.borderColor="BLACK"
        document.getElementById("htinp").style.borderColor="BLACK"
        document.getElementById("leninp").focus()
        document.getElementById("leninp").select()      
        document.getElementById('lenerror').style.visibility = 'visible'
        document.getElementById('widerror').style.visibility = 'hidden'
        document.getElementById('hterror').style.visibility= 'hidden'
        document.getElementById('displayresult').value = ""
        if (lenunit == 'Foot' && !Number.isInteger(+leninp)){
            document.getElementById('lenerror').innerHTML = "No Decimals(.) in Length for unit-Foot. Select Inches from Dropdown!!!"   
        }else if (leninp <= 0){
            document.getElementById('lenerror').innerHTML = "Enter length!!!"
        }else{
            document.getElementById('lenerror').style.visibility = 'hidden'  
            validLenInput = 1
        }
        //alert("Length must be filled out");
        //return false // this prevents from being submitted
    }
    if (validLenInput == 1 && (widinp <= 0 || !Number.isInteger(+widinp))){ 
        validWidInput = 0;      
        document.getElementById("widinp").style.borderColor="RED"
        document.getElementById("leninp").style.borderColor="BLACK"
        document.getElementById("htinp").style.borderColor="BLACK"
        document.getElementById("widinp").focus = true
        document.getElementById("widinp").select()
        document.getElementById('lenerror').style.visibility = 'hidden'
        document.getElementById('widerror').style.visibility = 'visible'
        document.getElementById('hterror').style.visibility= 'hidden'
        document.getElementById('displayresult').value = ""
        if (widunit == 'Foot' && !Number.isInteger(+widinp)){
            document.getElementById('widerror').innerHTML = "No Decimals(.) in Width. Select Inches from Dropdown!!!"   
        }else if (htinp <= 0){
            document.getElementById('widerror').innerHTML = "Enter Width!!!"
        }else{
            document.getElementById('widerror').style.visibility = 'hidden'  
            validWidInput = 1
        }
        //return false // this prevents from being submitted   
    }
    if ((validLenInput == 1 && validWidInput == 1) && (htinp <= 0 || !Number.isInteger(+htinp))){
        validHtInput = 0
        document.getElementById("htinp").style.borderColor="RED"
        document.getElementById("leninp").style.borderColor="BLACK"
        document.getElementById("widinp").style.borderColor="BLACK"
        document.getElementById("htinp").focus = true
        document.getElementById("htinp").select()
        document.getElementById('lenerror').style.visibility = 'hidden'
        document.getElementById('widerror').style.visibility = 'hidden'
        document.getElementById('hterror').style.visibility= 'visible'
        document.getElementById('displayresult').value = ""
        if (htunit == 'Foot' && !Number.isInteger(+htinp)){
            document.getElementById('hterror').innerHTML = "No Decimals(.) in Height. Select Inches from Dropdown!!!"   
        }else if (htinp <= 0){
            document.getElementById('hterror').innerHTML = "Enter Height!!!"
        }else{
            document.getElementById('widerror').style.visibility = 'hidden'  
            validHtInput = 1
        }
        //return false // this prevents from being submitted   
    }
    if(validLenInput == 1 && validWidInput == 1 && validHtInput == 1){
        validinput = 1
        document.getElementById('lenerror').innerHTML = ''
        document.getElementById('widerror').innerHTML = ''
        document.getElementById('hterror').innerHTML = ''
        document.getElementById("leninp").style.borderColor="BLACK"
        document.getElementById("widinp").style.borderColor="BLACK"
        document.getElementById("htinp").style.borderColor="BLACK"

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
        conlen = leninp
        conwid = widinp
        conht = htinp
        calculator.calculateResultAndDisplay()
    }
}

calculateResultAndDisplay(){
    if (validinput == 1){
        jsonCommunication();
        if(serverMsg == "Success"){
            document.getElementById('cftCalcError').innerHTML = " "; 
            document.getElementById('displayresult').value = " " +serverCFTresult
            document.getElementById('displayresult').style.color = 'RED'   
        }else if(serverMsg == "Failure"){
            document.getElementById('cftCalcError').innerHTML = serverErrMsg
            document.getElementById('cftCalcError').style.color = 'RED' 
            document.getElementById('displayresult').value = " "
        }
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
var conlen, conwid, conht, finalresult, validinput = 0
var ctResult
const calcbutton = document.querySelector('[calc-button]')
const clearbutton = document.querySelector('[clear-button]')

const lengthtextbox = document.getElementById('leninp')
const widthtextbox = document.getElementById('widinp')
const httextbox = document.getElementById('htinp')

const result = document.getElementById('displayresult')

//document.getElementById('unitlen').addEventListener("change", clearErrors(), false);
//const unitDropDown = document.getElementById('unitlen')

const calculator = new Cftcalculator()

let errorFromAjax, serverMsg, serverErrMsg, serverCFTresult;

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

function clearErrors(){
    document.getElementById('lenerror').innerHTML = ''
    document.getElementById('widerror').innerHTML = ''
    document.getElementById('hterror').innerHTML = ''
    document.getElementById('displayresult').value = ''
}

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

    const ddinch1 = document.getElementById('leninches').value
    const ddinch2 = document.getElementById('widinches').value
    const ddinch3 = document.getElementById('htinches').value

    clearErrors();
    calculator.validateInput(leninp,widinp,htinp,lenunit,widunit,htunit)
    calculator.Displayresult()

})

function clearFunction(){
    document.getElementById('leninp').value = ''
    document.getElementById('widinp').value = ''
    document.getElementById('htinp').value = ''
    document.getElementById('unitlen').selectedIndex = '0'
    document.getElementById('unitwid').selectedIndex = '0'
    document.getElementById('unitht').selectedIndex = '0'
    document.getElementById('leninches').selectedIndex = '0'
    document.getElementById('widinches').selectedIndex = '0'
    document.getElementById('htinches').selectedIndex = '0'
    document.getElementById('leninches').disabled = false
    document.getElementById('widinches').disabled = false
    document.getElementById('htinches').disabled = false
    document.getElementById("displayresult").value=''
    clearErrors();
}

//Dropdown Event Listener to Clear result
const dropdownevent1 = document.getElementById('unitlen')
const dropdownevent2 = document.getElementById('unitwid')
const dropdownevent3 = document.getElementById('unitht')
// Dropdown for Inches selection
const ddLenInches = document.getElementById('leninches')
const ddWidInches = document.getElementById('widinches')
const ddHtInches = document.getElementById('htinches')

dropdownevent1.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
    clearErrors();
    if(dropdownevent1.value != 'Foot'){
        ddLenInches.disabled = true
    }else{
        ddLenInches.disabled = false
    }
})
dropdownevent2.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
    clearErrors();
    if(dropdownevent2.value != 'Foot'){
        ddWidInches.disabled = true
    }else{
        ddWidInches.disabled = false
    }
})
dropdownevent3.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
    clearErrors();
    if(dropdownevent3.value != 'Foot'){
        ddHtInches.disabled = true
    }else{
        ddHtInches.disabled = false
    }
})
//Reset result if Inches dropdown changed
ddLenInches.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
})
ddWidInches.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
})
ddHtInches.addEventListener('change',Text =>{
    document.getElementById("displayresult").value=''
})

function jsonCommunication(){
    // Dropdown for Inches selection
    const coninch1 = document.getElementById('leninches').value
    const coninch2 = document.getElementById('widinches').value
    const coninche3 = document.getElementById('htinches').value
    //Dropdown Event Listener to Clear result
    const conUnit1 = document.getElementById('unitlen').value
    const conUnit2 = document.getElementById('unitwid').value
    const conUnit3 = document.getElementById('unitht').value
    //Error Fields
    const lenError = document.getElementById('lenerror').value
    const widError = document.getElementById('widerror').value
    const htError = document.getElementById('hterror').value

    const backendResult = document.getElementById('displayresult').value
    
    var calcValues = {
        "length"    : conlen,
        "width"     : conwid,
        "height"    : conht,
        "ddinch1" : coninch1,
        "ddinch2" : coninch2,
        "ddinch3"  : coninche3,
        "lengthUnit"   : conUnit1,
        "widthUnit"   : conUnit2,
        "heightUnit"    : conUnit3,
        "lenError"  : lenError,
        "widError"  : widError,
        "htError"   : htError,
        "backendresult"    : backendResult
    };
    // var uName="appsY.comcftcalcCall";
    // var passwrd="abcdefghi";

    //Below ajax call is syncronus(async= false(!1). So call to backend will happen synchromusly.)
    $.ajax({
        //url: "http://localhost:8080/cftcalc",
        url: "https://apps-y-restapi-for-calculation.uc.r.appspot.com/cftcalc",
        type : "POST",
        data : JSON.stringify(calcValues),
        dataType: 'json',
        headers: {"Authorization": "Basic xxxx"},
        async: !1,  
        crossDomain: true,
        contentType: 'application/json',
        success : function(resultFromBackend){
            //$('#result').html("");
            //var jsonObj = JSON.parse(resultFromBackend);
            var jsonObj = resultFromBackend;
            //$('#result').html("Message:- " + jsonObj.message +"</br>Eoor Message:- " + jsonObj.errorMessage  +
              //                "</br>cft Result:- " + jsonObj.cftResult);
            serverMsg = jsonObj.message;
            serverErrMsg = jsonObj.errorMessage;
            serverCFTresult = jsonObj.cftResult;
            errorFromAjax = "N";
        },
        error : function(e) {
            errorFromAjax = "Y";
            var errors = e.responseJSON;
            document.getElementById('cftCalcError').innerHTML = errors;
            console.log("Error from responseJson: ", errors);
        }
    });
    
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
    //var username = "abc@gmail.com";
    //var password = "xxxxxx";  //actually whatever we gives it works. All it needed was headers in the ajax. Otherwise spring code throws error saying no header was available.
    //Below ajax call is asyncronus. to make it sync change (async= false(!1). So call to backend will happen synchromusly.)
    $.ajax({
        //url: "http://localhost:8080/contactform",
        url: "https://apps-y-restapi-for-calculation.uc.r.appspot.com/contactform",
        type : "POST",
        data : JSON.stringify(contactValues),    
        async: !1,
        crossDomain: true,
        //headers: {'Authorization': "Basic " + btoa(username+ ":" + password)},
        headers: {"Authorization": "Basic xxxx"},
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
            //  alert(responseerrors.error);
            //ctError = responseerrors.error + ". Information not sent. Please try again later";
            ctError = e.responseText;
            if(ctError == null){
                ctError = "Information not sent. Please try again later";
            }            
            document.getElementById('contactError').innerHTML = ctError 
            document.getElementById("contactError").style.color ="RED"
        }
    });   
    
}
