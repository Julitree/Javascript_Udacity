
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

	const divRed = document.createElement('div')
		p.appendChild(divRed);
		divRed.style.height = '5vh';
		divRed.style.width = '10vw';
		divRed.style.background = '#9e2324';
		divRed.style.paddingLeft = '10px';
		divRed.style.marginTop = '30px';
		let numClicks = document.createElement('p');
		numClicks.style.fontSize = '20px';
		divRed.appendChild(numClicks);


	image.addEventListener('click', function() {
		if (typeof(Storage) !== "undefined") {
    	if (localStorage.clickcount) {
      	localStorage.clickcount = Number(localStorage.clickcount)+1;
    	} else {
      	localStorage.clickcount = 1;
    }
    	numClicks.innerText = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } 
	})

	
}


// one.addEventListener('click', function(){
//     text.innerHTML = `Cat one was clicked ${a++} times -`;
// })

// two.addEventListener('click', function(){
//     text2.innerHTML = `- Cat two was clicked ${b++} times`;
// })
