// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file

var routes = {
	'':				'index.html',
	'/':			'index.html',
	'signin_link':	'signin.html',
	'about_link':	'about.html',
	'mission_link':	'mission.html',
};

	
async function router() {
	console.log("window.location.hash = "+window.location.hash);
	
	var innerElement = '';
	var link = location.hash;
	var count = (link.split("/").length - 1);
	
	if(count > 1) {
		innerElement = link.split("/")[2];
		link = '#/' + link.split("/")[1];
	}
	
	link = link.slice(1);
	var route = routes[link];
	console.log("route = "+route);
	if(route) loadPage(route);
}

router();


async function loadPage(page) {
	console.log("hello");//page);
  // fetch the page, use await
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  element.innerHTML = content;
  // set innerHTML of the element
  // your code goes here
}


window.addEventListener('hashchange', router);