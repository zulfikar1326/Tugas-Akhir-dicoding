let opsiMenu = document.getElementById('opsi')
let menuon = document.getElementById('container-sub-menu')

let menuBack = document.getElementById('back')

opsiMenu.addEventListener('click', function(){
    menuon.style.display = "flex"
})

menuBack.addEventListener('click', function() {
    menuon.style.display = "none"
})
