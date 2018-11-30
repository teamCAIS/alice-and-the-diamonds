var wrapper =  document.querySelector('#wrapper');


wrapper.addEventListener('click', (event) => {

	if(event.target.classList.contains('ancora-inicio')) {
		wrapper.style = 'transform: translateY(0%)';
	}

	if(event.target.classList.contains('ancora-grupo')) {
		wrapper.style = 'transform: translateY(-40%)';
	}

	if(event.target.classList.contains('ancora-contato')) {
		wrapper.style = 'transform: translateY(-80%)';
	}

});