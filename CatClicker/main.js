const div = document.querySelector('div');
const imagen = new Image()

imagen.src = 'cat.jpg';
div.appendChild(imagen);


let a = 1
let pElement = document.createElement('p');
div.appendChild(pElement);

div.addEventListener('click', function () {    
    pElement.innerHTML = `The image was clicked ${a++} times`;
})


console.log(div);