// Mobile and desktop side menu
let desktopMenuIcon = document.querySelector('#dashboard_two .dashboard-two-header .header-left .menu-icon')
let mobileMenuIcon = document.querySelector('#dashboard_two .dashboard-two-header .header-left .mobile-menu-icon')
let slideMenu = document.querySelector('#dashboard_two #dashboard_two_body .side-menu')

mobileMenuIcon.addEventListener('click', function(){
    slideMenu.classList.toggle('show')
})

desktopMenuIcon.addEventListener('click', function(){
    slideMenu.classList.toggle('hide')
})
