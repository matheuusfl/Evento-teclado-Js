const navPerfil = document.getElementById("nav-perfil");
const   linkParaDadosPerfil = document.getElementById("link-perfil-dados")

document.addEventListener("keyup", (event)  => {
  console.log (event)
  
  if (event.code === 'Digit1') {
    navPerfil.style.display = "block"
    } if(event.code === 'Escape'){
      navPerfil.style.display = "none"
      linkParaDadosPerfil.click()
    } else {
      navPerfil.style.display = 'block'
    }
})