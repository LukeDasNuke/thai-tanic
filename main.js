function toggleNav(){
    // Toggling classes
    document.getElementById("navbar").classList.toggle("nav-open");
    let isOpen = document.getElementById("hamburger").classList.toggle("open");

    // Hiding obstructing stuff when nav is open
    document.querySelectorAll('.nav-obstructing').forEach(e => {
        if(isOpen && window.matchMedia("(max-width: 750px)").matches){
            e.style.opacity = '0';
            return;
        }
        e.style.opacity = '1';
    });
}

window.addEventListener('resize', () => {
    let isOpen = document.getElementById("hamburger").classList.contains("open");

    document.querySelectorAll('.nav-obstructing').forEach(e => {
        if(isOpen && window.matchMedia("(max-width: 750px)").matches){
            e.style.opacity = '0';
            return;
        }
        e.style.opacity = '1';
    });
});

// Fade in body
document.body.onload = () =>{
    document.body.style.opacity = '1';
}