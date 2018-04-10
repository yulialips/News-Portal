document.addEventListener('DOMContentLoaded', function(event) {
   
let dropdown = document.getElementById('dropdown');
dropdown.addEventListener( "click" , function(event){
	// alert ('клик работает')
	dropdown.classList.remove('hide');
	dropdown.classList.add('show')
});

let hide = document.getElementByClassName('hide');
let body = document.getElementsByTagName('body')[0];
body.addEventListener( "click" , function(event){
	alert ('клик 2 работает')
})

});