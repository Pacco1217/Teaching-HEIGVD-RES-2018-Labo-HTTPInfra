$(function(){
	function loadAnimals(){
		$.getJSON("/api/animals/", function(data){
			console.log(data);
			var message = "Il n'y a pas d'animaux !"
			if(data.length > 0){
				message = "Un nouvel animal : " + data[0].animal;
			}
			$("#animal").text(message);
		});
	};
	
	loadAnimals();
	setInterval( loadAnimals, 2000);
});
