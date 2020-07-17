const nameWrap = document.getElementById('nameWrap');   
const imageWrap = document.getElementById('imageWrap');
// const buttonClicker = document.getElementById('buttonClicker');



let p = document.createElement('p');
imageWrap.appendChild(p);
let image = document.createElement("img");
imageWrap.appendChild(image);
image.setAttribute("width", "304");
image.setAttribute("height", "228");



let clickCount = document.createElement('p');
clickCount.innerText = 'esta es la cantidad';



const main = {
    "Philippe": "cat.jpg",
    "Sondra": "catTwo.jpg",
    "Antoinne": "3.jpg",
    "Lulu": "4.jpg",
    "Coco": "5.jpg"
}


ulItem = document.createElement('div');
nameWrap.appendChild(ulItem);

for (key in main) {
    let liItem = document.createElement('p');
    liItem.style.display = 'flex';
    liItem.style.width = '64vw'
    liItem.appendChild(clickCount);
    liItem.innerText = key;
    ulItem.appendChild(liItem);

    
    const divRed = document.createElement('div')
    liItem.appendChild(divRed);
    divRed.style.height = '7vh';
    divRed.style.width = '65%';
    divRed.style.background = '#9e2324';
    divRed.style.paddingLeft = '10px';
    divRed.style.marginLeft =  '58px';
    let numClicks = document.createElement('p');
    numClicks.style.fontSize = '20px';
    divRed.appendChild(numClicks);


     
    liItem.addEventListener('click', function(event) {
        
        let item = event.target;
        p.innerHTML = `I introduce to you my cat ${item.textContent}`
        let objectKey =  item.innerText;        
        let src = main[objectKey];
        image.setAttribute("src", src);     
        console.log(item)   


        let x = function() {
            if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
              localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
              localStorage.clickcount = 1;
        }
            numClicks.innerText = "You have clicked the button " + localStorage.clickcount + " time(s).";
      } 
        }

        x()
       
      
    })  
       
    // buttonClicker.style.display = 'block';

}

