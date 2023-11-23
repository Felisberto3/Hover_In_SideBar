const touch = document.querySelector('.sidebar .header .barIcon')

touch.onclick = () => {
    document.querySelectorAll('.sidebar li span').style.display="none"
}