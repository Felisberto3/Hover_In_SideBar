const touch = document.querySelector('.sidebar .header .barIcon')

touch.onclick = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebarClosed')

    const spans = document.querySelectorAll('.sidebar span')
    const isSideBardCloset = sidebar.classList.contains('sidebarClosed')

    if (isSideBardCloset) {
        spans.forEach(span=> span.style.display="none") 
    }
    if (!isSideBardCloset) {
        spans.forEach(span=> span.style.display="block") 
    }
}
const touchIcon = document.querySelectorAll('.sidebar li i')

touchIcon.forEach(icon=>{
    // console.log(icon.);
})
