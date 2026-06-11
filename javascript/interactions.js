let menu_opened = false;

function invert_menu_status(){
    let menu = document.getElementById("header-section-mobile-links")
    console.log("test")

    if(menu_opened){
        menu.className = "closing"
    }
    else{
        menu.className = "opening"
    }
    menu_opened = !menu_opened
}

// let menu_button = document.getElementById("header-section-mobile-base-button")
// document.addEventListener("click", invert_menu_status)