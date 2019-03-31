
function getAPIdata() {
	
	fetch("https://uinames.com/api/?amount=100") //Dat er 100 beschikbare namen zijn. 

	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	.then(function(response) {
	console.log(response[1]);
	//De generator is al random, dus hoefde ik het verder niet zelf random te maken, zoals bij location.js.

    var nameList =  '<div class="nameList">';
		nameList +=   '<div class="name"> '+response[1].name+' </div>';
		nameList +=	 '<div class="surname"> '+ response[1].surname +' </div>';
		nameList +=	 '<div class="gender"> '+response[1].gender+' </div>';
		nameList +=	 '<div class="region"> '+response[1].region+' </div>';
		nameList += '</div>';

	document.getElementById("name").innerHTML=nameList;
	
	})
	
	.catch(function(error) {
		console.error('Request failed', error);
	});
}

getAPIdata();
