localStorage.setItem('carrito', [
    { nombre: 'Cintas' },
    { nombre: 'Bicicletas' }
])

const carrito = localStorage.getItem( 'carrito' )
console.log( carrito )


localStorage.removeItem('Bicicletas')

localStorage.clear()