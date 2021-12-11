const arr = new Array()

const arr1 = []

const equipos = [ 'MultiGyms', 'Bicicletas', 'Cintas' ]

const clientes = [
    { nombre: 'Cliente 1', edad: 30 }, 
    { nombre: 'Cliente 2', edad: 20 }, 
]



console.log( equipos )

equipos.forEach( ( elemento, indice, array ) => {
} )

equipos.push( 'MultiGyms' )


equipos.unshift( 'Bicicletas' )

console.log( equipos )

equipos.pop()

console.log( equipos )

equipos.splice( 1, 2)
console.log(equipos)

console.log(equipos.indexOf('melon'))

console.log( equipos.toString() )

console.log( equipos.join(';'))

const accesorios = [ 'accesorio 1', 'accesorio 2']

console.log( equipos.concat(accesorios) )