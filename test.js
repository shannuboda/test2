function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/10143/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
		alert("You Are Succesfully done :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}