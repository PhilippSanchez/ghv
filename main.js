

let showMenu = () => {

    let burger = document.getElementById('burger-menu')
    let menu = document.getElementById('mobileMenu')

    menu.style.display = 'block';
    burger.setAttribute('onclick', 'hideMenu()')
}

let hideMenu = () => {

    let burger = document.getElementById('burger-menu')
    let menu = document.getElementById('mobileMenu')

    menu.style.display = 'none';
    burger.setAttribute('onclick', 'showMenu()')

}