
//ONE CAT

const one = document.getElementById('one');
const cat = new Image();
cat.src = 'cat.jpg'

one.appendChild(cat);
cat.style.height = '30vh';
cat.style.width = '41vw';

const name = one.children;
name[0].innerHTML = "Marko"


//TWO CAT 

const two = document.getElementById('two');
const catTwo = new Image();
catTwo.src = 'catTwo.jpg'

two.appendChild(catTwo);
catTwo.style.height = '30vh';
catTwo.style.width = '38vw';

const name2 = two.children;
name2[0].innerHTML = "Lukas"


let a = 1;
let text = document.createElement('p');
one.appendChild(text);

let b = 1;
let text2 = document.createElement('p');
two.appendChild(text2)



one.addEventListener('click', function(){
    text.innerHTML = `Cat one was clicked ${a++} times -`;
})

two.addEventListener('click', function(){
    text2.innerHTML = `- Cat two was clicked ${b++} times`;
})
