const nameWrap = document.getElementById('nameWrap');   
const imageWrap = document.getElementById('imageWrap');
const clickcount = document.getElementById('clickcount');

const main = {
  "Philippe": "cat.jpg",
  "Sondra": "catTwo.jpg",
  "Antoinne": "3.jpg",
  "Lulu": "4.jpg",
  "Coco": "5.jpg"
}

//Modulo Imagen

let p = document.createElement('p');
imageWrap.appendChild(p);
let image = document.createElement("img");
imageWrap.appendChild(image);
image.setAttribute("width", "304");
image.setAttribute("height", "228");



//Add all cat 

for (key in main) {
    let catButton = document.createElement('button');
    nameWrap.appendChild(catButton);
    catButton.innerText = key;
    catButton.style.fontSize = '20px';
    catButton.style.marginLeft = '10px';
    catButton.style.backgroundColor = '#FFEB3B';
    
    const divRed = document.createElement('p')
    clickcount.appendChild(divRed);
    divRed.style.fontSize = '15px';

    let counter = 1;
     
    catButton.addEventListener('click', function(event) {
        
        let item = event.target;
        p.innerHTML = `I introduce to you my cat ${item.textContent}`
        let objectKey =  item.innerText;        
        let src = main[objectKey];
        image.setAttribute("src", src);     
        console.log(objectKey)   


        divRed.innerText =  `${objectKey} ${counter++}  was clicking.`;

    })  
}


