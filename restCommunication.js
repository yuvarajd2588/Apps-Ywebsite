function jsonCommunication(){
    var calcValues = {
        "length" : 144,
        "width" : 144,
        "height" : 12350
    };

    $.ajax({
        url: "http://localhost:8080/cftcalc",
        type : "POST",
        data : JSON.stringify(calcValues),
        dataType: 'json',
        contentType: 'application/json',
        success : function(result){
            if(result.status == "Done"){
                $("#postResultDiv").html("" + "Post Success!" + 
                                         " result : " + result.data.length);
            }else{
                $("postResultDiv").html("Error");
            }
            console.log(result);
        },
        error : function(e) {
            alert("Error !")
            console.log("Error: ", e);
        }
    });
}