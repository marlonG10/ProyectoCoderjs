let miVariableStr = '1';

console.log(typeof miVariableStr);

miVariableNumb = 1;

 console.log(typeof miVariableNumb);

 console.log(miVariableStr + miVariableNumb)

 console.log('Hola ' + 'cómo estas?')


nombre = prompt('como te llamas?')

console.log(nombre.toUpperCase())

if (!nombre) {
    throw new Error('la manqueaste!')

} else {
// object wrapper
    console.log(nombre.toUpperCase())
    console.log(nombre[0])

    console.log(nombre)
}