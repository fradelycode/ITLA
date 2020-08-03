const productos = [];
let total = 0;

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

            </dl>
        </article>
        `;
        lista.appendChild(elementos);
    }

    mostrarResultado(total) {
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `
        <article class="aja">
            <dl>
                <dt>Total: ${total}</dt>
            </dl>
        </article>
        `;
    }

    resetear() {
      document.getElementById('texto').reset();
    }
}

const nombreDeProductoInput = document.getElementById('texto');

function agregar() {
  const nombreDeProducto = nombreDeProductoInput.value;
  const producto = JSON.parse(localStorage.getItem(nombreDeProducto));

  productos.push(producto);
  total += Number(producto.precio);

  console.log(producto)
  const ui = new UI();
  ui.agregarProducto(producto);
}

function terminar() {
  document.getElementById('resultado');


  const ui = new UI();
  ui.mostrarResultado(total);
}
