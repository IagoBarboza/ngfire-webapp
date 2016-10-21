if(!localStorage.uid){
	window.location.href="#/login";
}

if(localStorage.uid){
	window.location.href="#/home";
}