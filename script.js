const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d12333559msh2a0e596fad3ecb9p15708ejsn7a79db35a8aa',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));