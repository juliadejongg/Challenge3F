function getAPIdata2() {

	fetch("https://www.triposo.com/api/20181213/location.json?countrycode=FR&tag_labels=city&count=10&fields=id,name,score,snippet&order_by=-score&account=W2JRVHHP&token=pcc6x5etpisjgy470anbqp1rcth0kqyv")
	
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response) {
	
	//Om de steden in de array random te laten zien, dat leek me leuker in combinatie met de random aliassen.
	var randomLocation = Math.floor((Math.random() * response.results.length -1) + 1);
    console.log(response.results[randomLocation]);

    var locationFrance =  '<div class="locationFrance">';
		locationFrance +=   '<div class="name"> '+response.results[randomLocation].name+' </div>';
        locationFrance +=	 '<div class="snippet"> '+ response.results[randomLocation].snippet +' </div>';
        locationFrance +=	 '<div class="score"> '+ Math.round(response.results[randomLocation].score * 10) / 10 +' </div>'; //1 decimaal achter de komma, is mooier dan 10 cijfers erachter. Dan is het ook niet duidelijk dat het over een rating gaat. 
		locationFrance += '</div>';

    document.getElementById("location").innerHTML=locationFrance;

	})
	
	.catch(function(error) {
		console.error('Request failed', error);
	});
}

getAPIdata2();


