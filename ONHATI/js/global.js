var memuMobileElement = null;


var onWindowLoad = function() {
    memuMobileElement = document.getElementById('menu-mobile');
}

var onresize = function() {
    if(window.innerWidth > 1024) {
        memuMobileElement.classList.remove('open');
    }
}

var toggleMenuMobile = function() {
    if(memuMobileElement.classList.value.indexOf('open') >= 0) {
        memuMobileElement.classList.remove('open');
        return
    }

    memuMobileElement.classList.add('open');
}
