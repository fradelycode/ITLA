const productos=[]
class Producto{
    constructor(nombre, precio, year){
        this.nombre = nombre;
        this.precio = precio;
        this.year = year;
    }
}

class UI {
    agregarProducto(producto) {
        const lista = document.getElementById('lista');
        const elementos = document.createElement('div');
        elementos.innerHTML = `
        <article class="aja">
            <dl>
                <dt>Producto: ${producto.nombre}</dt>
                <dt>Precio: ${producto.precio}</dt>
                <dt>Year: ${producto.year}</dt>
            <hr>
        </article>
        </dl>
        `;
        lista.appendChild(elementos);
    }

    resetear(){
    document.getElementById('formulario').reset();
    }
}

//dom
document.getElementById('formulario')
.addEventListener('submit', function(event){
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const year = document.getElementById('year').value;

    const producto = new Producto(nombre, precio, year);
    productos.push(producto)
    console.log(producto)

    localStorage.setItem(`${producto.nombre}`, JSON.stringify(producto))

    console.log(JSON.parse(`${localStorage.getItem(`${producto.nombre}`)}`));

    const ui = new UI();
    
    for(var i=0; i<=10; i++){
        productos[i]
    }

    ui.agregarProducto(producto)

    ui.resetear(producto);

    event.preventDefault();
});

// Cuando se ha cargado el contenido DOM
// Recorrer todos los elementos en localStorage y
// Analízalos como JSON y renderízalos como HTML

document.addEventListener("DOMContentLoaded", function() {

// Los valores contendrán los productos.
    const values = []
// El almacenamiento local tiene pares de valores clave, usaremos
// las teclas para recorrer los elementos

    const keys = Object.keys(localStorage)

// Almacena los valores en la matriz de valores
    keys.forEach(key => values.unshift(localStorage.getItem(key)))

    values.forEach(value => {
        // Almacenamos el producto como una cadena JSON (en una sola línea)
        // Necesitamos convertir esta cadena en un objeto nuevamente
        // Eso es lo que hace JSON.parse
        
        const currentProduct = JSON.parse(value)
        const child = document.createElement('div')
        child.innerHTML = `
        <article class="aja">
            <dl>
                <dt>Producto:  ${currentProduct.nombre}</dt>
                <dt>Precio: ${currentProduct.precio}</dt>
                <dt>Year: ${currentProduct.year}</dt>
            </dl>
        </article>
        <hr>
        `
        document.getElementById('lista').appendChild(child);
    })

})