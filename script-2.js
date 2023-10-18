const linkParaVoltar = document.getElementById('perfil-main')

document.addEventListener ('keyup', (event) => {
    if(event.code === 'Backspace') {
        linkParaVoltar .click() 
    }
    
})