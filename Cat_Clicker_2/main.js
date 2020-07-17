
//ONE CAT

const one = document.querySelector('.container');
const  urlCat = {
	"Philippe": "cat.jpg",
    "Sondra": "3.jpg",
};

for(cat in urlCat){
	const p = document.createElement('p');
	p.innerText = cat;
	one.appendChild(p);

	const urlGet = urlCat[cat];
	const image = document.createElement('img');
	one.appendChild(image);
	image.setAttribute("width", "304");
	image.setAttribute("height", "228");
	image.setAttribute('src',urlGet);

	
}



// const name = one.children;
// name[0].innerHTML = "Marko"


//TWO CAT 


// const catTwo = new Image();
// catTwo.src = 'catTwo.jpg'

// two.appendChild(catTwo);
// catTwo.style.height = '30vh';
// catTwo.style.width = '38vw';

// const name2 = two.children;
// name2[0].innerHTML = "Lukas"


// let a = 1;
// let text = document.createElement('p');
// one.appendChild(text);

// let b = 1;
// let text2 = document.createElement('p');
// two.appendChild(text2)



// one.addEventListener('click', function(){
//     text.innerHTML = `Cat one was clicked ${a++} times -`;
// })

// two.addEventListener('click', function(){
//     text2.innerHTML = `- Cat two was clicked ${b++} times`;
// })
