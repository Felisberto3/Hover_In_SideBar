const touch = document.querySelector('.sidebar .header .barIcon')

const spans = document.querySelectorAll('.sidebar span')
touch.onclick = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('sidebarClosed')

    const isSideBardCloset = sidebar.classList.contains('sidebarClosed')

    if (isSideBardCloset) {
        spans.forEach(span=> span.style.display="none") 
    }
    if (!isSideBardCloset) {
        spans.forEach(span=> span.style.display="block") 
    }
}
const icons = document.querySelectorAll('.sidebar li i')

icons.forEach((icon,index) => {
    icon.onmouseover=() =>{
        spans[index].style=`
        display:block
        margin-left: 10rem
        `
    }
});
