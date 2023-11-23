const touch = document.querySelector('.sidebar .header .barIcon')

touch.onclick = () => {
    document.querySelector('.sidebar').classList.toggle('sidebarClosed')
}