const nameWrap = document.getElementById('nameWrap');   
const imagWrap = document.getElementById('imagWrap')
const main = [
    {
        "name": "Philippe",
        "src": "cat.jpg"
    },
    {
        "name": "Sondra",
        "src": "catTwo.jpg"
    },
    {
        "name": "Antoinne",
        "src": "3.jpg"
    },
    {
        "name": "Lulu",
        "src": "4.jpg"
    },
    {
        "name": "coco",
        "src": "5.jpg"
    }
]

// nameWrap
ulItem = document.createElement('ul')
nameWrap.appendChild(ulItem)

for (cat of main) {
    let liItem = document.createElement('li')
    liItem.innerText = cat.name
    ulItem.appendChild(liItem)
    ulItem.addEventListener('click', function(event) {
        imagWrap.style.background = 'black';
        imagWrap.style.height = '10vh';
        imagWrap.style.width = '40vw';
    })
}