//TODO ESTO ESTÁ EN LA PÁGINA "PRODUCTOS"//

let carrito = [];

const productos = [
    {id: 1, nombre: "PC GM CARABIDE I5", precio: 200000, img: "https://stylewatch.vtexassets.com/arquivos/ids/210434/image-e8ca1907d5ba46c9bea238ffe9075e90.jpg?v=637823368443430000"},
    {id: 2, nombre: "PC SP CG 9900", precio: 250000, img: "https://hard-digital.com.ar/public/files/Gabinete%20Sp%20Loulan%20Cg-9900-C%201%20Fans%20Rgb%20Negro%20Atx%20Mid%20Tower/3.jpg"},
    {id: 3, nombre: "PC SENTEY X10", precio: 300000, img: "https://http2.mlstatic.com/D_NQ_NP_866811-MLA46419489647_062021-O.webp"},
    {id: 4, nombre: "PC RTX 3070", precio: 500000, img: "https://m.media-amazon.com/images/I/7199HBS5vXL.jpg"},
    {id: 5, nombre: "PC INTEL CORE I7", precio: 700000, img: "https://http2.mlstatic.com/D_NQ_NP_758556-MLA31031635182_062019-O.webp"},
    {id: 6, nombre: "PC XTZ 4500", precio: 100000, img: "https://http2.mlstatic.com/D_NQ_NP_719815-MLA52746594276_122022-O.webp"},
    {id: 7, nombre: "PC K9 7700", precio: 200000, img: "https://www.wiki.tn/18486-large_mobi_default/pc-gamer-genome-7700-k9.jpg"},
    {id: 8, nombre: "PC INTEL CORE I5", precio: 400000, img: "https://http2.mlstatic.com/D_NQ_NP_639818-MLA48252674250_112021-O.webp"},
    {id: 9, nombre: "PC RTX 6140", precio: 300000, img: "https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.fravega.com%2Fp%2Fpc-gamer-gfast-x-300-i3-16gb-ram-480gb-ssd-gtx1660-win-11-990015476%2F&psig=AOvVaw3FibocpKnl29vXcFb4Yc8c&ust=1686958202388000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjugJW3xv8CFQAAAAAdAAAAABAJ"},
    {id: 10, nombre: "PC INTEL CORE I3", precio: 500000, img: "https://http2.mlstatic.com/D_NQ_NP_786057-MLA44517367551_012021-O.webp"},
    {id: 11, nombre: "Monitor Samsung 25 Odyssey", precio: 10000, img: "https://www.qloud.ar/SITES/IMG/scp-hardstore-10-2020/181_06-04-2023-10-04-50-samsung-odyssey-g4-25-inch-fhd-ips-240hz-1ms-gaming-monitor.jpg"},
    {id: 12, nombre: "Monitor Asus 22", precio: 15000, img: "https://mexx-img-2019.s3.amazonaws.com/Monitor-Led-22-Asus-Full-Hd-60Hz-1Ms-VP228HE-J_43212_2.jpeg"},
    {id: 13, nombre: "Monitor Gadnic 24", precio: 20000, img: "https://images.fravega.com/f500/ed2799546993d2087a7d15c47648f824.jpg"},
    {id: 14, nombre: "Monitor Ips LG 27", precio: 45000, img: "https://www.lg.com/ar/images/monitores/md05869116/gallery/medium01.jpg"},
    {id: 15, nombre: "Monitor Samsung 34 curvo", precio: 34000, img: "https://http2.mlstatic.com/D_NQ_NP_901620-MLA51058919767_082022-O.webp"},
    {id: 16, nombre: "Monitor Levelup 24", precio: 40000, img: "https://levelupworld.com/assets/img/dt/monitores/monitor_24-up4480/1.png"},
    {id: 17, nombre: "Monitor LG 27 HD", precio: 70000, img: "https://www.lg.com/es/images/monitores/md06034996/gallery/1100_01.jpg"},
    {id: 18, nombre: "Monitor Samsung 24 curvo", precio: 450000, img: "https://static.wixstatic.com/media/7d4695_b5f51d9169f0495a8118c824b2fa3aa9~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/7d4695_b5f51d9169f0495a8118c824b2fa3aa9~mv2.jpg"},
    {id: 19, nombre: "Monitor Curved Frameless 25", precio: 360000, img: "https://http2.mlstatic.com/D_NQ_NP_969769-MLA54984627560_052023-W.jpg"},
    {id: 20, nombre: "Monitor Samsung 55 curvo", precio: 560000, img: "https://samsungar.vtexassets.com/arquivos/ids/186219-800-auto?width=800&height=auto&aspect=true"},
    {id: 21, nombre: "Teclado Logitech RGB pro", precio: 20000, img: "https://logitechar.vtexassets.com/arquivos/ids/157662/920-009388_1.png?v=637388220605900000"},
    {id: 22, nombre: "Teclado Razer Mini", precio: 15000, img: "https://arwan.com.ar/wp-content/uploads/2023/04/nb_TECLADO-GAMER-RAZER-HUNTSMAN-MINI-LINEAR-RED_ver_4456e0b9e81b878e0fa07a595f36d549.jpeg"},
    {id: 23, nombre: "Teclado Slim Havit", precio: 8000, img: "https://http2.mlstatic.com/D_NQ_NP_755588-MLA46809690451_072021-O.webp"},
    {id: 24, nombre: "Teclado Logitech Prodigy", precio: 17000, img: "https://compusantafe.com.ar/productos/get-imagen/11722"},
    {id: 25, nombre: "Teclado Redragon Dark", precio: 25000, img: "https://http2.mlstatic.com/D_NQ_NP_880734-MLA44164197557_112020-O.webp"},
    {id: 26, nombre: "Mouse Havit", precio: 7000, img: "https://megatonedigital.vteximg.com.br/arquivos/ids/161160-1000-1000/142301_01.jpg?v=637830389792870000"},
    {id: 27, nombre: "Mouse Redragon Griffin", precio: 9000, img: "https://s3-sa-east-1.amazonaws.com/saasargentina/js5YAR90pHrt0Vvo5kCB/imagen"},
    {id: 28, nombre: "Mouse Asus", precio: 16000, img: "https://tiendas.contapyme.com.ar/clientes/goodgames/archivos/images/1/img_1284.jpg"},
    {id: 29, nombre: "Mouse T-dagger", precio: 9000, img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/474/949/products/sin-titulo-1-psd88-recuperado-recuperado21-882b48922859296b7416549160930358-640-0.jpg"},
    {id: 30, nombre: "Mouse Redragon Gainer", precio: 10000, img: "https://gorilagames.com/img/Public/1019-producto-redragon-mouse-gainer-9952.jpg"}
];

function constructoraProductos(producto) {
    function mostrarCarrito() {
        const carritoContainer = document.getElementById('carrito-container');
        carritoContainer.innerHTML = '';
      
        if (carrito.length === 0) {
          carritoContainer.textContent = 'El carrito está vacío.';
        } else {
          const carritoHTML = document.createElement('ul');
          carritoHTML.classList.add('carrito');

          carrito.forEach(producto => {
            const itemCarrito = document.createElement('li');
            itemCarrito.textContent = producto.nombre;
            carritoHTML.appendChild(itemCarrito);
          });
        
          carritoContainer.appendChild(carritoHTML);
        }

        if (carrito.length > 0) {
          carritoContainer.classList.add('carrito-visible');
        } else {
          carritoContainer.classList.remove('carrito-visible');
        }
      }
      
      
    const productCard = document.createElement('div');
    productCard.classList.add('productCard');
  
    const container = document.createElement('div');
    container.classList.add('container');
  
    const nombre = document.createElement('h3');
    nombre.textContent = producto.nombre;
    nombre.classList.add('productCard__tittle');
    container.appendChild(nombre);
  
    const imagen = document.createElement('img');
    imagen.src = producto.img;
    imagen.classList.add('productCard__img');
    productCard.appendChild(imagen);
  
    const precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;
    precio.classList.add('productCard__desc');
    container.appendChild(precio);
  
    productCard.appendChild(container);
  
    const botonComprar = document.createElement('button');
    botonComprar.textContent = 'Agregar al carrito';
    botonComprar.classList.add('productCard__btn');
    botonComprar.addEventListener('click', function() {
      carrito.push(producto);
      Swal.fire({
        title: 'Producto agregado al carrito!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      mostrarCarrito();
    });
    productCard.appendChild(botonComprar);
  
    const botonVerCarrito = document.createElement('button');
    botonVerCarrito.textContent = 'Ver Carrito';
    botonVerCarrito.classList.add('productCard__btn');
    botonVerCarrito.addEventListener('click', function() {
      const carritoContainer = document.getElementById('carrito-container');
      carritoContainer.classList.toggle('carrito-visible');
    });
    productCard.appendChild(botonVerCarrito);

    return productCard;
}
  
  const productosContainer = document.getElementById('productos-container');
  
    for (let i = 0; i < productos.length; i++) {
    const producto = productos[i];
    const productoHTML = constructoraProductos(producto);
    productosContainer.appendChild(productoHTML);
}
const obtenerDatos = () => {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  };
  obtenerDatos()
    .then(data => {
      console.log('Datos obtenidos:', data);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);
    });
  