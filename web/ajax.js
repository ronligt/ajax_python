$("#testForm").submit(function(event){
    event.preventDefault();
    $.ajax({
        method: 'GET',
        url: 'cgi-bin/testcgi.py',
        data: $("#testForm").serialize(),
        success: function(data){
	    $("#testReturn").html(data.testData)
        },
        error: function(data){
            alert("Error!")
        }
    })
})
