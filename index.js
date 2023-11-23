const sideBarIcon = document.querySelector('.sidebar .header .barIcon')
const sidebar = document.querySelector('.sidebar ')
sideBarIcon.onclick =()=> {
    sidebar.classList.toggle('sidebarClosed')
}