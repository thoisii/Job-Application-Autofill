
// autofill button on click - takes data from popup
// prepares to send to content.js through message request
document.getElementById("autofill").addEventListener("click", async () => {
    // pull data from popup
	await chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		//send to current tab
		chrome.tabs.sendMessage(tabs[0].id, {
			first: document.getElementById('first').value,
			last: document.getElementById('last').value,

			email: document.getElementById('email').value,
			tele: document.getElementById('tele').value,
			address: document.getElementById('address').value,
			city: document.getElementById('city').value,
			zipcode: document.getElementById('zipcode').value
		}, function(response) {
			console.log(response.status);
		});
	});
});



// save form data to storage
document.getElementById("save").addEventListener("click", () => {
	localStorage.setItem("first", document.getElementById('first').value,);
	localStorage.setItem("last", document.getElementById('last').value,);

	localStorage.setItem("email", document.getElementById('email').value,);
	localStorage.setItem("tele", document.getElementById('tele').value,);
	localStorage.setItem("address", document.getElementById('address').value,);
	localStorage.setItem("city", document.getElementById('city').value,);
	localStorage.setItem("zipcode", document.getElementById('zipcode').value,);

	console.log("Saved!");
});
// load storage data to form
document.getElementById("load").addEventListener("click", () => {

	document.getElementById('first').value = localStorage.getItem("first");
	document.getElementById('last').value = localStorage.getItem("last");

	document.getElementById('email').value = localStorage.getItem("email");
	document.getElementById('tele').value = localStorage.getItem("tele");
	document.getElementById('address').value = localStorage.getItem("address");
	document.getElementById('city').value = localStorage.getItem("city");
	document.getElementById('zipcode').value = localStorage.getItem("zipcode");

	console.log("Loaded!");
});

/*
document.getElementById("save").addEventListener("click", () => {
	chrome.storage.sync.set({
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		tele: document.getElementById('tele').value,
		address: document.getElementById('address').value,
		city: document.getElementById('city').value,
		zipcode: document.getElementById('zipcode').value
	}, function() {
		console.log("Saved!");
	});
});

document.getElementById("load").addEventListener("click", () => {
	chrome.storage.sync.get([
		'name',
		'email',
		'tele',
		'address',
		'city',
		'zipcode',
	], function(result) {
		document.getElementById('name').value = result.name;
		document.getElementById('email').value = result.email;
		document.getElementById('tele').value = result.tele;
		document.getElementById('address').value = result.address;
		document.getElementById('city').value = result.city;
		document.getElementById('zipcode').value = result.zipcode;
	});
});
*/