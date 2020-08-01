function GenerateRandomPetie() {
	var rng = Math.floor((Math.random() * 10) + 2);
	var path = document.getElementById("petie");
	path.src = "../images/dog" + rng + ".jpg";	
}
