let nombre = prompt("Como es tu Nombre?")
let edad = prompt("Como es tu Edad?")
edad = Number(edad)

//console.log(nombre, typeoff nombre);
//console.log(edad, typeoff edad);

if (edad < 18) {
    alert("usted no puede acceder a este sitio")
    throw new Error("es menor")
} 

else{
    alert("Bienvenido")
}

