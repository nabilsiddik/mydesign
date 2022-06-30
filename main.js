
// Date picker value placeholder
let date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let todayDate = String(date.getDate()).padStart(2,'0')
let datePattern = year + '-' + month + '-' + todayDate
document.getElementById('dateInput').value = datePattern





// nex page 
let nextPageClick = document.querySelector('#dashboard_two #dashboard_two_body .side-menu ul .next-page')
let prevPageClick = document.querySelector('#dashboard_two #dashboard_two_body .side-menu ul .prev-page')
let currentPage = document.querySelector('#dashboard_two #dashboard_two_body #dashboard_one')
let nextPage = document.querySelector('#dashboard_two #dashboard_two_body #dashboard_next')


nextPageClick.addEventListener('click', function(){
    nextPage.classList.add('appear')
    currentPage.classList.remove('appear')
    currentPage.classList.add('disappear')
})

prevPageClick.addEventListener('click', function(){
    currentPage.classList.remove('disappear')
    currentPage.classList.add('appear')
    nextPage.classList.remove('appear')
})

