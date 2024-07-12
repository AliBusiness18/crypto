const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk');
xhr.setRequestHeader('x-rapidapi-key', 'c904d0e6cdmshe1d6500a84a211bp16f9e9jsn01e64cd7610d');
xhr.setRequestHeader('x-rapidapi-host', 'cryptocurrency-news2.p.rapidapi.com');

xhr.send(data);