document.addEventListener('click', function (e) { // with the code inside this function we are controlling what happens when the 'hamburger' element is clicked (ps. the hamburger is displayed only at specific screen width)
    let open_nav = document.querySelector('.nav-wrapper');
    let close_nav = document.querySelector('.display-nav');
    let nav_ul = document.querySelector('.nav-ul');
    let hamburger = document.querySelector('.fa-bars');
    let hamburger_mobile_clicked = document.querySelector('.display-hamburger');

    if (e.target.classList.contains('fa-bars')) {
        if (hamburger_mobile_clicked == null) {
            // if the user clicks the hamburger, the menu is going to be popped up. But then, 
            // because the menu has been opened, if the screen gets expanded (the width gets larger) 
            // the hamburger still needs to be displayed, that's why we are adding this class to the class list of hamburger
            hamburger.classList.add('display-hamburger');
        }

        if (open_nav != null && nav_ul != null) { //opening the navbar
            open_nav.classList.remove('nav-wrapper');
            open_nav.classList.add('display-nav');
            open_nav.classList.add('display-nav-mobile');
            open_nav.style.animation = 'nav-appear 0.4s forwards';
            nav_ul.classList.add('nav-ul-mobile');
        }

        else if (open_nav == null && nav_ul != null) { //closing the navbar
            if (close_nav != null) {
                close_nav.classList.add('nav-wrapper');
                close_nav.classList.remove('display-nav');
                close_nav.classList.remove('display-nav-mobile');
                nav_ul.classList.remove('nav-ul-mobile');
            }
            if (hamburger_mobile_clicked != null) {
                hamburger.classList.remove('display-hamburger');
            }
        }
    }

    else if (e.target.classList.contains('anchor')) {
        if (close_nav != null) {
            close_nav.classList.add('nav-wrapper');
            close_nav.classList.remove('display-nav');
            close_nav.classList.remove('display-nav-mobile');
            nav_ul.classList.remove('nav-ul-mobile');
        }
        if (hamburger_mobile_clicked != null) {
            hamburger.classList.remove('display-hamburger');
        }
    }
});