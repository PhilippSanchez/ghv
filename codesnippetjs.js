
//Show Side Menu Click Outside

let showSideMenu = () => {
 

    let sideMenuActive = document.getElementById('sideMenu').style.display

    if (sideMenuActive !== 'flex') {
        document.getElementById('sideMenu').style.display = 'flex'
        document.getElementById('sideMenu-overlay').style.display = 'block'
        document.getElementById('sideMenu-h1').innerText = '➡︎'
    } else {

        document.getElementById('sideMenu-overlay').addEventListener('click', function(e) {

            document.getElementById('sideMenu').style.display = 'none'
            document.getElementById('sideMenu-overlay').style.display = 'none'
            document.getElementById('sideMenu-h1').innerText = '⬅︎'
        })

    }
}
