// @author Suhana

// Cleaning code == Done 
// Organizing code == Done

var button = document.querySelector('button');
var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');
var heading = document.querySelector('h1');


button.addEventListener("click", function() {
	var random1 = Math.random() * 6;
	random1 = Math.floor(random1+1);

	var random2 = Math.random() * 6;
	random2 = Math.floor(random2+1);

	var image1Path = 'images/dice'+random1+'.png';
	var image2Path = 'images/dice'+random2+'.png';

	image1.setAttribute('src', image1Path);
	image2.setAttribute('src', image2Path);

	if (random1 > random2) {
		heading.innerHTML = 'Player 1 wins!';	
	}
	else if (random1 == random2) {
		heading.innerHTML = 'Its a tie!';	
	}
	else {
		heading.innerHTML = 'Player 2 wins!';	
	}
});