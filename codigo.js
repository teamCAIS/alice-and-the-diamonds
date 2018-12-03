var wrapper =  document.querySelector('#wrapper');
var clock = document.querySelector('#clock');
var chair = document.querySelector('#chair');
var alice = document.querySelector('#alice');

wrapper.addEventListener('click', (event) => {

	if(event.target.classList.contains('ancora-inicio')) {
		wrapper.style = 'transform: translateY(0%)';
	}

	if(event.target.classList.contains('ancora-grupo')) {
		wrapper.style = 'transform: translateY(-40%)';
		clock.style = 'transform: translateY(-30%) scale(0.5) rotate(30deg)';
		chair.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		alice.style = 'transform: translateY(150%) scale(0.5)';
	}

	if(event.target.classList.contains('ancora-contato')) {
		wrapper.style = 'transform: translateY(-80%)';
		clock.style = 'transform: translateY(-30%) scale(0.5) rotate(15deg)';
		chair.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		alice.style = 'transform: translateY(100%) scale(0.5)';
	}

});