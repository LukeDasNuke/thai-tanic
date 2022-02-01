let navToggled = false;

function toggleNav(){
    navToggled = !navToggled;

    if(navToggled){
        document.getElementById("nav").style.width = "300px";
    }else{
        document.getElementById("nav").style.width = "60px";
    }    
}