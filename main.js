$(function(){

    $(".toggle").on("click", function(){

        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    });
});   

function submit(){
    var first_name_input = document.getElementById("first_name_input").value;
    var last_name_input = document.getElementById("last_name_input").value;
    var gender = document.getElementById("gender_input").value;
    var full_dob = document.getElementById("dob_input").value;

    if (first_name_input == "" || last_name_input == "" || gender == "" || full_dob=="") {
        alert("Please fill out all the input fields!");
    }
    else {
        console.log("Loading") 
        var dob_components = full_dob.split("-");
        var date = dob_components[2];
        var month = dob_components[1];
        var year = dob_components[0];
        console.log(date);
        console.log(month);
        console.log(year);
    }
} 
