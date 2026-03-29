var imagenes = [
  'assets/imagen-01.jpg',
  'assets/imagen-02.jpg',
  'assets/imagen-03.jpg',
  'assets/imagen-04.jpg',
  'assets/imagen-05.jpg',
  'assets/imagen-06.jpg',
  'assets/imagen-07.jpg',
  'assets/imagen-08.jpg',
  'assets/imagen-09.jpg',
  'assets/Retrato2Samuel.jpg',
  'assets/RetratoAnahi.JPG',
  'assets/RetratoLinda.jpg',
  'assets/RetratoPao.jpg',
  'assets/RetratoSam.JPG',
  'assets/RetratoUba.JPG',
  'retrato.com/media/personas/anahi/Anahí.jpg',
  'retrato.com/media/personas/anahi/Imagen1.jpg',
  'retrato.com/media/personas/anahi/Imagen2.jpg',
  'retrato.com/media/personas/anahi/Imagen3.jpg',
  'retrato.com/media/personas/anahi/Imagen4.jpg',
  'retrato.com/media/personas/anahi/Imagen5.jpg',
  'retrato.com/media/personas/anahi/Imagen6.jpg',
  'retrato.com/media/personas/anahi/retrato.jpg',
  'retrato.com/media/personas/blanca/fotoblanca1.jpg',
  'retrato.com/media/personas/blanca/fotoblanca2.jpg',
  'retrato.com/media/personas/blanca/fotoblanca3.jpg',
  'retrato.com/media/personas/blanca/fotoblanca4.jpg',
  'retrato.com/media/personas/blanca/fotoblanca5.jpg',
  'retrato.com/media/personas/blanca/fotoblanca6.jpg',
  'retrato.com/media/personas/blanca/fotoblanca7.jpg',
  'retrato.com/media/personas/blanca/fotoblanca8.jpg',
  'retrato.com/media/personas/blanca/retratoblanca.jpg',
  'retrato.com/media/personas/emilio/fotoE1.jpg',
  'retrato.com/media/personas/emilio/fotoE2.jpg',
  'retrato.com/media/personas/emilio/fotoE3.jpg',
  'retrato.com/media/personas/emilio/fotoE4.jpg',
  'retrato.com/media/personas/emilio/fotoE5.jpg',
  'retrato.com/media/personas/emilio/fotoE6.jpg',
  'retrato.com/media/personas/emilio/fotoE7.jpg',
  'retrato.com/media/personas/emilio/retratoemilio.jpg',
  'retrato.com/media/personas/linda/foto1.1.jpg',
  'retrato.com/media/personas/linda/foto1.2.jpg',
  'retrato.com/media/personas/linda/foto1.3.jpg',
  'retrato.com/media/personas/linda/foto1.4.jpg',
  'retrato.com/media/personas/linda/foto1.5.jpg',
  'retrato.com/media/personas/linda/foto1.6.jpg',
  'retrato.com/media/personas/linda/foto1.7.jpg',
  'retrato.com/media/personas/linda/foto1.8.jpg',
  'retrato.com/media/personas/linda/galeria_1.jpg',
  'retrato.com/media/personas/linda/galeria_2.jpg',
  'retrato.com/media/personas/oscar/fotooscar2.jpg',
  'retrato.com/media/personas/oscar/fotooscar3.jpg',
  'retrato.com/media/personas/oscar/fotooscar4.jpg',
  'retrato.com/media/personas/oscar/fotooscar5.jpg',
  'retrato.com/media/personas/oscar/fotooscar6.jpg',
  'retrato.com/media/personas/oscar/fotooscar7.jpg',
  'retrato.com/media/personas/oscar/retratooscar.jpg',
  'retrato.com/media/personas/paola/galeria_1.jpg',
  'retrato.com/media/personas/paola/galeria_2.jpg',
  'retrato.com/media/personas/paola/Imagen_galería1.jpg',
  'retrato.com/media/personas/paola/Imagen_galería2.jpg',
  'retrato.com/media/personas/paola/Imagen_galería3.jpg',
  'retrato.com/media/personas/paola/Imagen_galería4.jpg',
  'retrato.com/media/personas/paola/Imagen_galería5.jpg',
  'retrato.com/media/personas/paola/Imagen_galería6.jpg',
  'retrato.com/media/personas/paola/imagen_principal.jpg',
  'retrato.com/media/personas/paola/retrato.jpg',
  'retrato.com/media/personas/samuel/foto1.jpg',
  'retrato.com/media/personas/samuel/foto2.jpg',
  'retrato.com/media/personas/samuel/foto3.jpg',
  'retrato.com/media/personas/samuel/foto4.jpg',
  'retrato.com/media/personas/samuel/foto5.jpg',
  'retrato.com/media/personas/samuel/foto6.jpg',
  'retrato.com/media/personas/samuel/foto7.jpg',
  'retrato.com/media/personas/samuel/foto8.jpg',
  'retrato.com/media/personas/samuel/retrato1.jpg',
  'retrato.com/media/personas/samuel/retrato2.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU1.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU2.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU3.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU4.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU5.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU6.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU7.jpg',
  'retrato.com/media/personas/ubaldo/ImagenU8.jpg',
  'retrato.com/media/personas/ubaldo/retrato.jpg'
];
var piezas = document.querySelectorAll('.pieza');

function imagenAleatoria() {
  return imagenes[Math.floor(Math.random() * imagenes.length)];
}

function establecerImagen(pieza) {
  var img = pieza.querySelector('img');
  var nombre = imagenAleatoria();
  var lugar = pieza.getAttribute('data-pieza') || 'pieza-sin-nombre';

  img.src = nombre;
  var nombreArchivo = nombre.split('/').pop().replace(/\..*$/, '');
  img.alt = nombreArchivo + ' en ' + lugar;
  img.dataset.imagen = nombreArchivo.replace('imagen-', 'IMG-');
  pieza.classList.add('activa');
}

function activarPieza() {
  establecerImagen(this);
}

if (window.matchMedia('(hover: none), (pointer: coarse)').matches) {
  // Dispositivo táctil (móviles/tablets)
  for (var i = 0; i < piezas.length; i += 1) {
    piezas[i].querySelector('img').removeAttribute('src');
    piezas[i].addEventListener('click', activarPieza);
    piezas[i].addEventListener('focusin', activarPieza);
    establecerImagen(piezas[i]);
  }
} else {
  // Dispositivo con hover (laptops/escritorios)
  for (var i = 0; i < piezas.length; i += 1) {
    piezas[i].querySelector('img').removeAttribute('src');
    piezas[i].addEventListener('mouseenter', activarPieza);
    piezas[i].addEventListener('focusin', activarPieza);
  }
}