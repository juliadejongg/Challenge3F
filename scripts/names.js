
function getAPIdata() {
	
	// get weather forecast
	fetch("https://uinames.com/api/?amount=100")

	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
    console.log(response[1]);

    
    var nameList =  '<div class="nameList">';
		nameList +=   '<div class="name"> '+response[1].name+' </div>';
		nameList +=	 '<div class="surname"> '+ response[1].surname +' </div>';
		nameList +=	 '<div class="gender"> '+response[1].gender+' </div>';
		nameList +=	 '<div class="region"> '+response[1].region+' </div>';
		nameList += '</div>';

    document.getElementById("name").innerHTML=nameList;


    
	})
	
	// catch error
	.catch(function(error) {
		console.error('Request failed', error);
	});
}

// init data stream
getAPIdata();
