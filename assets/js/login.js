const btnInicio = document.getElementById('inicio'),
    btnRegistro = document.getElementById('registro'),
    registro = document.querySelector('.registrar'),
    inicio = document.querySelector('.iniciar');

btnInicio.addEventListener('click', (e) => {
    registro.classList.add("hide")
    inicio.classList.remove("hide")
});
btnRegistro.addEventListener('click', (e) => {
    inicio.classList.add("hide")
    registro.classList.remove("hide")
});

var images = ['peluqueria2.png', 'peluqueria3.png', 'peluqueria4.png'];
var index = 0;

function changeBackground() {
    document.body.style.backgroundImage = 'url(../../assets/img/' + images[index] + ')';
    index = (index + 1) % images.length; 
}

setInterval(changeBackground, 5000);