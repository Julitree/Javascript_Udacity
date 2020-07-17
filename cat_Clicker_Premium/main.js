const nameWrap = document.getElementById('nameWrap');   
const imageWrap = document.getElementById('imageWrap');
const buttonClicker = document.getElementById('buttonClicker');


let image = document.createElement("img");
let p = document.createElement('p');
imageWrap.appendChild(p);
imageWrap.appendChild(image);
image.setAttribute("width", "304");
image.setAttribute("height", "228");


const main = {
    "Philippe": "cat.jpg",
    "Sondra": "catTwo.jpg",
    "Antoinne": "3.jpg",
    "Lulu": "4.jpg",
    "Coco": "5.jpg"
}


ulItem = document.createElement('ul');
nameWrap.appendChild(ulItem);

for (key in main) {
    let liItem = document.createElement('li');
    liItem.innerText = key
    ulItem.appendChild(liItem) 

     
    liItem.addEventListener('click', function(event) {
        
        let item = event.target;
        p.innerHTML = `I introduce to you my cat ${item.textContent}`
        let objectKey =  item.innerText;        
        let src = main[objectKey];
        image.setAttribute("src", src);        
      
    })  
       
    buttonClicker.style.display = 'block';

}

