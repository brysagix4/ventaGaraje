// Datos de los productos con categorías
const productos = [
    // Muebles
    {
        nombre: "Bicicleta Vintage",
        precio: "$150.000",
        descripcion: "Hermosa bicicleta vintage de los años 80, en excelente estado. Perfecta para paseos urbanos. Incluye canasta y timbre original.",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "302 830 7803"
    },
    {
        nombre: "Mesa de Madera",
        precio: "$80.000",
        descripcion: "Mesa de comedor de madera maciza, estilo rústico. Perfecta para espacios pequeños. Algunas marcas de uso que le dan carácter.",
        imagen: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "310 234 5678"
    },
    {
        nombre: "Sofá de Cuero",
        precio: "$350.000",
        descripcion: "Sofá de cuero genuino de tres plazas, muy cómodo y en excelente estado. Ideal para sala de estar.",
        imagen: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "320 345 6789"
    },
    {
        nombre: "Escritorio Moderno",
        precio: "$120.000",
        descripcion: "Escritorio de oficina moderno con cajones. Perfecto para trabajar desde casa. Color blanco, muy bien cuidado.",
        imagen: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "315 456 7890"
    },
    {
        nombre: "Silla Ergonómica",
        precio: "$95.000",
        descripcion: "Silla ergonómica de oficina con soporte lumbar. Ajustable en altura y muy cómoda para largas jornadas.",
        imagen: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "305 567 8901"
    },
    {
        nombre: "Estantería de Madera",
        precio: "$65.000",
        descripcion: "Estantería de 5 niveles en madera natural. Perfecta para libros y decoración. Muy resistente.",
        imagen: "https://images.unsplash.com/photo-1594620302200-9a762244a348?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "311 678 9012"
    },
    {
        nombre: "Mesa de Centro",
        precio: "$55.000",
        descripcion: "Mesa de centro de vidrio templado con base de metal. Moderna y elegante, perfecta para sala.",
        imagen: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "312 789 0123"
    },
    {
        nombre: "Cama Individual",
        precio: "$180.000",
        descripcion: "Cama individual con cabecera de madera. Incluye colchón en buen estado. Ideal para habitación de invitados.",
        imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "313 890 1234"
    },
    {
        nombre: "Mesa de Comedor",
        precio: "$200.000",
        descripcion: "Mesa de comedor extensible para 6-8 personas. Madera maciza, muy resistente y elegante.",
        imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "314 901 2345"
    },
    {
        nombre: "Armario de Pino",
        precio: "$140.000",
        descripcion: "Armario de pino de 3 puertas con espejo. Espacioso y funcional. Algunos detalles menores de uso.",
        imagen: "https://images.unsplash.com/photo-1601760561441-16420572c9e7?w=800&h=600&fit=crop",
        categoria: "Muebles",
        contacto: "316 012 3456"
    },
    
    // Electrónica
    {
        nombre: "Guitarra Acústica",
        precio: "$200.000",
        descripcion: "Guitarra acústica clásica, ideal para principiantes y músicos experimentados. Incluye estuche y cuerdas de repuesto.",
        imagen: "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "317 123 4567"
    },
    {
        nombre: "Cámara Antigua",
        precio: "$120.000",
        descripcion: "Cámara fotográfica analógica de colección. Funcional y en buen estado. Ideal para fotógrafos que buscan ese look vintage.",
        imagen: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "318 234 5678"
    },
    {
        nombre: "Televisor LED 32 pulgadas",
        precio: "$250.000",
        descripcion: "Televisor LED de 32 pulgadas, Full HD. Funciona perfectamente, incluye control remoto y cables.",
        imagen: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "319 345 6789"
    },
    {
        nombre: "Tablet Android",
        precio: "$180.000",
        descripcion: "Tablet Android de 10 pulgadas, 64GB. Incluye cargador y funda protectora. Excelente estado.",
        imagen: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "321 456 7890"
    },
    {
        nombre: "Auriculares Bluetooth",
        precio: "$45.000",
        descripcion: "Auriculares inalámbricos con cancelación de ruido. Batería de larga duración. Casi nuevos.",
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "322 567 8901"
    },
    {
        nombre: "Altavoz Bluetooth",
        precio: "$55.000",
        descripcion: "Altavoz portátil con Bluetooth, resistente al agua. Sonido de alta calidad y batería de 12 horas.",
        imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "323 678 9012"
    },
    {
        nombre: "Consola de Videojuegos",
        precio: "$300.000",
        descripcion: "Consola de videojuegos con 2 controles y 5 juegos incluidos. Funciona perfectamente.",
        imagen: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "324 789 0123"
    },
    {
        nombre: "Reproductor de Vinilos",
        precio: "$150.000",
        descripcion: "Tocadiscos vintage restaurado. Funciona perfectamente y tiene un sonido cálido y auténtico.",
        imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "325 890 1234"
    },
    {
        nombre: "Cámara Digital",
        precio: "$220.000",
        descripcion: "Cámara digital compacta de 20MP. Incluye tarjeta de memoria, batería y cargador. Excelente para viajes.",
        imagen: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "326 901 2345"
    },
    {
        nombre: "Monitor 24 pulgadas",
        precio: "$130.000",
        descripcion: "Monitor LED de 24 pulgadas, Full HD. Perfecto para oficina o gaming. Incluye cable HDMI.",
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&h=600&fit=crop",
        categoria: "Electrónica",
        contacto: "327 012 3456"
    },
    
    // Deportes
    {
        nombre: "Bicicleta de Montaña",
        precio: "$280.000",
        descripcion: "Bicicleta de montaña profesional, 21 velocidades. Suspensión delantera, frenos de disco. Muy bien mantenida.",
        imagen: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "328 123 4567"
    },
    {
        nombre: "Pesas Ajustables",
        precio: "$75.000",
        descripcion: "Set de pesas ajustables de 2.5kg a 20kg cada una. Incluye barra y discos. Perfecto para entrenar en casa.",
        imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "329 234 5678"
    },
    {
        nombre: "Pelota de Fútbol",
        precio: "$25.000",
        descripcion: "Pelota de fútbol oficial, tamaño 5. Material de alta calidad, muy resistente. Casi nueva.",
        imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "330 345 6789"
    },
    {
        nombre: "Raqueta de Tenis",
        precio: "$60.000",
        descripcion: "Raqueta de tenis profesional con cordaje nuevo. Incluye funda protectora. Excelente estado.",
        imagen: "https://images.unsplash.com/photo-1622163642999-7006f6a69d6e?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "331 456 7890"
    },
    {
        nombre: "Colchoneta de Yoga",
        precio: "$30.000",
        descripcion: "Colchoneta de yoga antideslizante, grosor 6mm. Incluye correa de transporte. Muy cómoda.",
        imagen: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "332 567 8901"
    },
    {
        nombre: "Mancuernas",
        precio: "$40.000",
        descripcion: "Par de mancuernas de 10kg cada una. Recubiertas de goma para proteger el suelo. Muy resistentes.",
        imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "333 678 9012"
    },
    {
        nombre: "Bicicleta Estática",
        precio: "$320.000",
        descripcion: "Bicicleta estática con pantalla digital. 8 niveles de resistencia. Perfecta para entrenar en casa.",
        imagen: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "334 789 0123"
    },
    {
        nombre: "Patines en Línea",
        precio: "$85.000",
        descripcion: "Patines en línea talla 40-42, ajustables. Incluyen protecciones de rodilla, codo y muñeca.",
        imagen: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "335 890 1234"
    },
    {
        nombre: "Tabla de Surf",
        precio: "$190.000",
        descripcion: "Tabla de surf de espuma, ideal para principiantes. Incluye leash y quilla. Muy estable.",
        imagen: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "336 901 2345"
    },
    {
        nombre: "Balón de Baloncesto",
        precio: "$35.000",
        descripcion: "Balón de baloncesto oficial, tamaño 7. Material de cuero sintético de alta calidad.",
        imagen: "https://images.unsplash.com/photo-1546519638-70e1e0bf0f1e?w=800&h=600&fit=crop",
        categoria: "Deportes",
        contacto: "337 012 3456"
    },
    
    // Hogar
    {
        nombre: "Lámpara de Pie",
        precio: "$45.000",
        descripcion: "Elegante lámpara de pie estilo industrial. Funciona perfectamente y tiene un diseño único que complementa cualquier decoración.",
        imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "338 123 4567"
    },
    {
        nombre: "Juego de Sartenes",
        precio: "$60.000",
        descripcion: "Set completo de sartenes antiadherentes de alta calidad. Incluye 3 tamaños diferentes. Perfecto estado, casi sin uso.",
        imagen: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "339 234 5678"
    },
    {
        nombre: "Máquina de Coser",
        precio: "$180.000",
        descripcion: "Máquina de coser antigua pero funcional. Perfecta para proyectos de costura. Incluye accesorios y manual de instrucciones.",
        imagen: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "340 345 6789"
    },
    {
        nombre: "Aspiradora Robot",
        precio: "$220.000",
        descripcion: "Aspiradora robot inteligente con mapeo de habitaciones. Se programa desde el móvil. Funciona perfectamente.",
        imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "341 456 7890"
    },
    {
        nombre: "Cafetera Express",
        precio: "$95.000",
        descripcion: "Cafetera express italiana, 4 tazas. Incluye filtro y portafiltro. Hace un café delicioso.",
        imagen: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "342 567 8901"
    },
    {
        nombre: "Batidora de Pie",
        precio: "$75.000",
        descripcion: "Batidora de pie profesional con 5 velocidades. Incluye todos los accesorios. Muy potente.",
        imagen: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "343 678 9012"
    },
    {
        nombre: "Plancha a Vapor",
        precio: "$50.000",
        descripcion: "Plancha a vapor con depósito de agua. Sistema anti-goteo y suela de cerámica. Muy eficiente.",
        imagen: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "344 789 0123"
    },
    {
        nombre: "Ventilador de Torre",
        precio: "$55.000",
        descripcion: "Ventilador de torre con 3 velocidades y oscilación. Control remoto incluido. Muy silencioso.",
        imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "345 890 1234"
    },
    {
        nombre: "Juego de Ollas",
        precio: "$85.000",
        descripcion: "Set completo de ollas de acero inoxidable. Incluye 5 piezas de diferentes tamaños. Muy resistentes.",
        imagen: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "346 901 2345"
    },
    {
        nombre: "Tostadora",
        precio: "$35.000",
        descripcion: "Tostadora de 2 ranuras con función de descongelado. Incluye bandeja para migas. Funciona perfectamente.",
        imagen: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=800&h=600&fit=crop",
        categoria: "Hogar",
        contacto: "347 012 3456"
    },
    
    // Arte y Decoración
    {
        nombre: "Libros Clásicos",
        precio: "$35.000",
        descripcion: "Colección de libros clásicos de literatura. Incluye obras de diferentes autores reconocidos. Algunos con ediciones especiales.",
        imagen: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "348 123 4567"
    },
    {
        nombre: "Cuadro Abstracto",
        precio: "$65.000",
        descripcion: "Cuadro abstracto enmarcado, 60x80cm. Colores vibrantes que dan vida a cualquier pared. Muy decorativo.",
        imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "349 234 5678"
    },
    {
        nombre: "Escultura de Metal",
        precio: "$120.000",
        descripcion: "Escultura de metal decorativa, estilo moderno. Perfecta para jardín o interior. Muy original.",
        imagen: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "350 345 6789"
    },
    {
        nombre: "Jarrón de Cerámica",
        precio: "$40.000",
        descripcion: "Jarrón de cerámica artesanal, diseño único. Perfecto para flores o como pieza decorativa.",
        imagen: "https://images.unsplash.com/photo-1578301978162-7aae4d755744?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "351 456 7890"
    },
    {
        nombre: "Espejo Decorativo",
        precio: "$55.000",
        descripcion: "Espejo decorativo con marco dorado, 50x70cm. Estilo vintage, muy elegante y funcional.",
        imagen: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "352 567 8901"
    },
    {
        nombre: "Alfombra Persa",
        precio: "$180.000",
        descripcion: "Alfombra persa auténtica, 2x3 metros. Colores tradicionales, muy bien conservada. Pieza única.",
        imagen: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "353 678 9012"
    },
    {
        nombre: "Candelabro Vintage",
        precio: "$45.000",
        descripcion: "Candelabro de metal con 5 brazos, estilo vintage. Perfecto para crear ambiente cálido y acogedor.",
        imagen: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "354 789 0123"
    },
    {
        nombre: "Reloj de Pared",
        precio: "$50.000",
        descripcion: "Reloj de pared decorativo, números romanos. Estilo clásico, funciona con batería. Muy elegante.",
        imagen: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "355 890 1234"
    },
    {
        nombre: "Plantas Decorativas",
        precio: "$30.000",
        descripcion: "Set de 3 macetas con plantas decorativas artificiales. No requieren mantenimiento. Muy realistas.",
        imagen: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "356 901 2345"
    },
    {
        nombre: "Lámpara de Techo",
        precio: "$75.000",
        descripcion: "Lámpara de techo colgante, diseño moderno. Iluminación LED incluida. Muy decorativa.",
        imagen: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=600&fit=crop",
        categoria: "Arte y Decoración",
        contacto: "357 012 3456"
    }
];

// Variables globales
let productosFiltrados = productos;
let paginaActual = 1;
const productosPorPagina = 15;

// Función para crear el HTML de un producto
function crearProductoHTML(producto) {
    // Escapar comillas simples en los valores para evitar errores en el onclick
    const imagenEscapada = producto.imagen.replace(/'/g, "\\'");
    const nombreEscapado = producto.nombre.replace(/'/g, "\\'");
    const precioEscapado = producto.precio.replace(/'/g, "\\'");
    const descripcionEscapada = producto.descripcion.replace(/'/g, "\\'");
    
    // Obtener contacto del producto
    const contacto = producto.contacto;
    const contactoLimpio = contacto.replace(/\s/g, ""); // Quitar espacios para WhatsApp
    const mensajeWhatsApp = encodeURIComponent(`Hola, estoy interesado en: ${producto.nombre} - ${producto.precio}`);
    const urlWhatsApp = `https://wa.me/57${contactoLimpio}?text=${mensajeWhatsApp}`;
    
    return `
        <div class="producto" onclick="abrirModal('${imagenEscapada}', '${nombreEscapado}', '${precioEscapado}', '${descripcionEscapada}')">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <div class="producto-info">
                <span class="producto-categoria">${producto.categoria}</span>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <div class="producto-contacto" onclick="event.stopPropagation();">
                    <span class="contacto-texto">📞 ${contacto}</span>
                    <a href="${urlWhatsApp}" target="_blank" class="whatsapp-icon" title="Contactar por WhatsApp">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width="24" height="24">
                    </a>
                </div>
                <p class="producto-descripcion">${producto.descripcion}</p>
            </div>
        </div>
    `;
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    if (categoria === "todas") {
        productosFiltrados = productos;
    } else {
        productosFiltrados = productos.filter(producto => producto.categoria === categoria);
    }
    paginaActual = 1; // Resetear a la primera página al filtrar
    mostrarProductos();
}

// Función para calcular el número total de páginas
function obtenerTotalPaginas() {
    return Math.ceil(productosFiltrados.length / productosPorPagina);
}

// Función para obtener los productos de la página actual
function obtenerProductosPagina() {
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    return productosFiltrados.slice(inicio, fin);
}

// Función para mostrar los productos en la página actual
function mostrarProductos() {
    const container = document.getElementById('productosContainer');
    const productosPagina = obtenerProductosPagina();
    
    if (productosPagina.length === 0) {
        container.innerHTML = '<p class="sin-productos">No hay productos disponibles en esta categoría.</p>';
    } else {
        container.innerHTML = productosPagina.map(producto => crearProductoHTML(producto)).join('');
    }
    
    actualizarPaginacion();
}

// Función para crear los botones de paginación
function actualizarPaginacion() {
    const container = document.getElementById('paginacionContainer');
    const totalPaginas = obtenerTotalPaginas();
    
    if (totalPaginas <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = '<div class="paginacion">';
    
    // Botón Anterior
    if (paginaActual > 1) {
        html += `<button class="btn-pagina" onclick="cambiarPagina(${paginaActual - 1})">« Anterior</button>`;
    } else {
        html += `<button class="btn-pagina disabled" disabled>« Anterior</button>`;
    }
    
    // Números de página
    const maxPaginasVisibles = 5;
    let inicio = Math.max(1, paginaActual - Math.floor(maxPaginasVisibles / 2));
    let fin = Math.min(totalPaginas, inicio + maxPaginasVisibles - 1);
    
    if (fin - inicio < maxPaginasVisibles - 1) {
        inicio = Math.max(1, fin - maxPaginasVisibles + 1);
    }
    
    if (inicio > 1) {
        html += `<button class="btn-pagina" onclick="cambiarPagina(1)">1</button>`;
        if (inicio > 2) {
            html += `<span class="puntos">...</span>`;
        }
    }
    
    for (let i = inicio; i <= fin; i++) {
        if (i === paginaActual) {
            html += `<button class="btn-pagina active">${i}</button>`;
        } else {
            html += `<button class="btn-pagina" onclick="cambiarPagina(${i})">${i}</button>`;
        }
    }
    
    if (fin < totalPaginas) {
        if (fin < totalPaginas - 1) {
            html += `<span class="puntos">...</span>`;
        }
        html += `<button class="btn-pagina" onclick="cambiarPagina(${totalPaginas})">${totalPaginas}</button>`;
    }
    
    // Botón Siguiente
    if (paginaActual < totalPaginas) {
        html += `<button class="btn-pagina" onclick="cambiarPagina(${paginaActual + 1})">Siguiente »</button>`;
    } else {
        html += `<button class="btn-pagina disabled" disabled>Siguiente »</button>`;
    }
    
    html += '</div>';
    html += `<p class="info-pagina">Página ${paginaActual} de ${totalPaginas} (${productosFiltrados.length} productos)</p>`;
    
    container.innerHTML = html;
}

// Función para cambiar de página
function cambiarPagina(nuevaPagina) {
    paginaActual = nuevaPagina;
    mostrarProductos();
    // Scroll suave hacia arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para abrir el modal con la imagen ampliada
function abrirModal(imagen, nombre, precio, descripcion) {
    const modal = document.getElementById('modal');
    const imagenModal = document.getElementById('imagenModal');
    const nombreModal = document.getElementById('nombreModal');
    const precioModal = document.getElementById('precioModal');
    const descripcionModal = document.getElementById('descripcionModal');

    imagenModal.src = imagen;
    imagenModal.alt = nombre;
    nombreModal.textContent = nombre;
    precioModal.textContent = precio;
    descripcionModal.textContent = descripcion;

    modal.classList.add('mostrar');
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('mostrar');
    document.body.style.overflow = 'auto';
}

// Función para toggle del menú móvil
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Cerrar menú al hacer click en un enlace
function cerrarMenu() {
    const navMenu = document.getElementById('navMenu');
    const navToggle = document.getElementById('navToggle');
    
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    mostrarProductos();

    // Toggle del menú móvil
    const navToggle = document.getElementById('navToggle');
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer click en los enlaces
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });

    // Filtro de categorías
    document.getElementById('filtroCategoria').addEventListener('change', function(e) {
        filtrarProductos(e.target.value);
    });

    // Cerrar modal al hacer click en la X
    document.getElementById('cerrarModal').addEventListener('click', cerrarModal);

    // Cerrar modal al hacer click fuera de la imagen
    document.getElementById('modal').addEventListener('click', function(e) {
        if (e.target === this) {
            cerrarModal();
        }
    });

    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
});
