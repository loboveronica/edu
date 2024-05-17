document.addEventListener('DOMContentLoaded', function () {
    var navbarList = document.querySelector('.name');
    var sidebarRight = document.querySelector('.sidebar-right');

    navbarList.addEventListener('click', function () {
        sidebarRight.classList.toggle('active');
    });
});

function openPerformancePage() {
    window.location.href = '../../../indicators/indicators.html';

}

