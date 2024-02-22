function cambiarClase(elementoClic, categoria) {
    // Obtén la lista de elementos li dentro de la clase catalog-list
    var listaItems = document.querySelectorAll('.catalog-list li');

    // Itera sobre la lista y elimina la clase catalog-selected-true y establece catalog-selected-false
    listaItems.forEach(function(item) {
      item.querySelector('a').classList.remove('catalog-selected-true');
      item.querySelector('a').classList.add('catalog-selected-false');
    });

    // Establece la clase catalog-selected-true al elemento clickeado
    elementoClic.classList.remove('catalog-selected-false');
    elementoClic.classList.add('catalog-selected-true');

    filtrarImagenesPorCategoria(categoria);
  }

  function filtrarImagenesPorCategoria(categoria) {
    // Obtén todas las imágenes dentro de la clase photo-card
    var imagenes = document.querySelectorAll('.photo-card img');

    // Itera sobre las imágenes y muestra/oculta según la categoría seleccionada
    imagenes.forEach(function(imagen) {
      var rutaImagen = imagen.src;
      var perteneceACategoria = rutaImagen.includes('/' + categoria + '/');
      
      if (perteneceACategoria) {
        imagen.style.display = 'block';  // Muestra la imagen
      } else {
        imagen.style.display = 'none';   // Oculta la imagen
      }
    });
  }

  
  
    // Definir las carpetas y las imágenes
    const carpetas = ['retratos', 'eventos', 'productos'];
    const cantidadImagenesPorCarpeta = {
      retratos: 238,
      eventos: 657,
      productos: 401
    };

    // Obtener las columnas
    const columnas = [
      document.getElementById('column1'),
      document.getElementById('column2'),
      document.getElementById('column3')
    ];

    // Función para distribuir las imágenes sin repetición
    function distribuirImagenes() {
      const totalColumnas = columnas.length;

      for (const carpeta of carpetas) {
        for (let i = 1; i <= cantidadImagenesPorCarpeta[carpeta]; i++) {
          const imgIndex = i % totalColumnas;
          const imagen = `${carpeta}${i}.jpg`;

          const imgElement = document.createElement('img');
          imgElement.src = `img/${carpeta}/${imagen}`;

        // Agregar el atributo loading='lazy'
        imgElement.setAttribute('loading', 'lazy');

          columnas[imgIndex].appendChild(imgElement);
        }
      }
    }

    // Llamar a la función para iniciar la distribución
    distribuirImagenes();
  





    document.addEventListener("DOMContentLoaded", function() {
        var contenedor = document.getElementById("contenedor");
      
        contenedor.addEventListener("wheel", function(e) {
          // Evita que la página principal se desplace cuando llegas al final del contenedor
          if (e.deltaY > 0 && contenedor.scrollHeight - contenedor.scrollTop === contenedor.clientHeight) {
            e.preventDefault();
          } else if (e.deltaY < 0 && contenedor.scrollTop === 0) {
            e.preventDefault();
          }
        });
      });



      function expand() {
        var list = document.getElementById('list-expanded');
        if (list.style.display === 'none' || list.style.display === '') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }
    }

    

var todosnav = document.getElementById('todosnav');
var todos = document.getElementById('todos');
var fotoproductosnav = document.getElementById('fotoproductosnav');
var fotoproductos = document.getElementById('fotoproductos');
var retratosnav = document.getElementById('retratosnav');
var eventosnav = document.getElementById('eventosnav');
var eventos = document.getElementById('eventos');

todosnav.addEventListener('click', function(){
    todos.click();
    expand();
});

fotoproductosnav.addEventListener('click', function(){
    fotoproductos.click();
    expand();
});

retratosnav.addEventListener('click', function(){
    retratos.click();
    expand();
});

eventosnav.addEventListener('click', function(){
    eventos.click();
    expand();
});
