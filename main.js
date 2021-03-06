documentReady(() => {
    // Hide backup links if javascript is working
    document.getElementById("non-js-links").style.display = "none";
});

function documentReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function toggleNav(){
    // Toggling classes
    document.getElementById("navbar").classList.toggle("nav-open");
    let isOpen = document.getElementById("hamburger").classList.toggle("open");

    // Hiding obstructing stuff when nav is open
    navObstructFix(isOpen);
}

// Update obstructing on
window.addEventListener('resize', () => {
    let isOpen = document.getElementById("hamburger").classList.contains("open");

    // Hiding obstructing stuff when nav is open
    navObstructFix(isOpen);
});

function navObstructFix(isOpen){
    document.querySelectorAll('.nav-obstructing').forEach(e => {
        if(isOpen && window.matchMedia("(max-width: 900px)").matches){
            e.style.display = 'none';
            return;
        }
        e.style.display = 'inline';
    });
}