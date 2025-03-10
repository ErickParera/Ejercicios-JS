let miListaDePendientes = ["Breaking Bad", "Stranger Things", "El Señor de los Anillos", "Harry Potter"];
let nuevaPelicula = prompt("Ingrese una nueva película o serie:");
miListaDePendientes.push(nuevaPelicula);
miListaDePendientes[1] = "Dark"; // Cambiamos la segunda serie
console.log(miListaDePendientes);
