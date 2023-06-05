let cliente;
let clienteStorage = localStorage.getItem("cliente");

if(cliente){
    cliente = clienteStorage;
    alert(`Bienvenido nuevamente ${cliente}`);
}else{
    let nombre = prompt("Ingrese su nombre");
    localStorage.setItem("cliente", nombre);
    alert(`Bienvenido por primera vez ${nombre}`);
};

let estructura = document.getElementsByTagName("main");
console.log(estructura);

const boton1 = document.getElementsById("botonNo");

boton1.addEventListener("click", () => {
    alert("Producto no disponible");
});

const boton2 = document.getElementsById("botonSi");

boton2.addEventListener("click", () => {
    alert("Producto disponible!");
});

//Este formulario está en la página "Envío"

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = e.target.children;

    if(!inputs[2].value.includes("@")){
        alert("Incluya el @ para validar su mail");
    }
});
const productos = [
    {id: 1, nombre: "PC Armada Ryzen 5 4600G 8gb RAM", precio: 200000},
    {id: 2, nombre: "PC Armada Ryzen 5 5600G 16gb RAM" , precio: 250000},
    {id: 3, nombre: "PC Armada Ryzen 7 5600G 16 gb RAM", precio: 300000},
    {id: 4, nombre: "Pantalla LG 20 pulgadas", precio: 50000},
    {id: 5, nombre: "Pantalla Samsung 22 pulgadas", precio: 70000},
    {id: 6, nombre: "Pantalla Samsung 25 pulgadas curvo", precio: 100000},
    {id: 7, nombre: "RAM 16gb", precio: 20000},
    {id: 8, nombre: "RAM 32gb", precio: 40000},
    {id: 9, nombre: "Teclado Logitech RGB", precio: 30000},
    {id: 10, nombre: "Teclado Redragon mecánico RGB", precio: 50000},
    {id: 11, nombre: "Mouse Redragon", precio: 10000},
    {id: 12, nombre: "Mouse Logitech", precio: 15000},
    {id: 13, nombre: "Mouse Genius", precio: 2000},
    {id: 14, nombre: "Auriculares Redragon RGB", precio: 45000},
    {id: 15, nombre: "Auriculares Samsung", precio: 34000},
    {id: 16, nombre: "Auriculares Logitech", precio: 40000},
    {id: 17, nombre: "Auriculares Redragon inalambricos", precio: 70000},
    {id: 18, nombre: "Notebook HP", precio: 450000},
    {id: 19, nombre: "Notebook Lenovo", precio: 360000},
    {id: 20, nombre: "Notebook Apple White", precio: 560000},
];

localStorage.setItem("productosStorage", JSON.stringify(productos));
console.log(localStorage);