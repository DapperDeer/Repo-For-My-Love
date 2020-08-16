function GenerateRandomPetie() {
	var rng = getRandomIntInclusive(1, 11);
	var path = document.getElementById("petie");
	path.src = "../images/dog" + rng + ".jpg";	
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
