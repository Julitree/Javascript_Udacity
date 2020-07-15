const nameWrap = document.getElementById('nameWrap');   
const imageWrap = document.getElementById('imageWrap')

const main = {
    "Philippe": "cat.jpg",
    "Sondra": "catTwo.jpg",
    "Antoinne": "3.jpg",
    "Lulu": "4.jpg",
    "coco": "5.jpg"
}


ulItem = document.createElement('ul');
nameWrap.appendChild(ulItem);

for (key in main) {
    let liItem = document.createElement('li');
    liItem.innerText = key
    ulItem.appendChild(liItem)
    
    liItem.addEventListener('click', function(event) {
        let item = event.target;
        let objectKey =  item.innerText
        let foto = main[objectKey];
        console.log('"' + objectKey + '":' + '"' + main[objectKey] + '"')
        
     
        
        
        var image = document.createElement("IMG");
        image.setAttribute("src", foto);
        imageWrap.appendChild(image)
        image.setAttribute("width", "304");
        image .setAttribute("height", "228");

        
    })
}

