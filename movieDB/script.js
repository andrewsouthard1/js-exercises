var movieDB = [
	{
		name: "Fight Club",
		rating: 5,
		hasWatched: true
	},
	{
		name: "Pulp Fiction",
		rating: 5,
		hasWatched: true
	}
]

movieDB.forEach(function(movie){
	var result = "You have ";
	var starRating = " - " + movie.rating + " stars";
	if (movie.hasWatched){
		console.log(result + " watched " + movie.name + starRating)
	}
	else {
		console.log(result + " not watched" + movie.name + starRating)
	}
	
})