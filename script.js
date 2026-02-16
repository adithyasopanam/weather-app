
$(document).ready(function () {
    let date=new Date();
        document.getElementById("current").innerHTML=date;
});
function fun(){
    let city=document.getElementById("city").value;
    if(city==""){
        alert("Please enter a city name");
        return false;
    }
    else{
        document.getElementById("output").innerHTML=city.toUpperCase();
        
    }
}
