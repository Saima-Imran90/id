function ischeck() {
    var num = document.getElementById('evenodd').value;
    if(num%2===0){

        document.getElementById("msg").innerHTML="<b> <h1> Wow! u found,the "+num+" is an Even Number </h1> </b>";
}else{
document.getElementById("msg").innerHTML="<b> <h1> oh! u didn't find,the "+num+" is Odd </h1> </b>";
}if (num==="") {
    document.getElementById("msg").innerHTML="";

}

}

