var wrapper =  document.querySelector('#wrapper');
var clock = document.querySelector('#clock');
var chair = document.querySelector('#chair');
var chair2 = document.querySelector('#chair2');
var table = document.querySelector('#table');
var book = document.querySelector('#book');
var alice = document.querySelector('#alice');
var transicao2 = document.querySelector('#alice-bebendo');

wrapper.addEventListener('click', (event) => {

	if(event.target.classList.contains('ancora-inicio')) {
		wrapper.style = 'transform: translateY(0%)';
		clock.style = 'transform: translateY(25%) scale(0.5) rotate(15deg)';
		chair.style = 'transform: translateY(5%) scale(0.5) rotate(-15deg)';
		chair2.style = 'transform: translateY(155%) scale(0.5) rotate(-15deg)';
		book.style = 'transform:  translateY(95%) scale(0.5) rotate(-15deg)';
		table.style = 'transform: translateY(125%) scale(0.5) rotate(-15deg)';
		alice.style = 'transform: translateY(-30%) scale(0.4)';
	}

	if(event.target.classList.contains('ancora-grupo')) {
		wrapper.style = 'transform: translateY(-40%)';
		clock.style = 'transform: translateY(-30%) scale(0.5) rotate(30deg)';
		chair.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		chair2.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		book.style = 'transform: translateY(-30%) scale(0.5) rotate(30deg)';
		table.style = 'transform: translateY(-30%) scale(0.5) rotate(-30deg)';
		alice.style = 'transform: translateY(40%) scale(0.4)';
		transicao2.classList.remove('bebendo');
	}

	if(event.target.classList.contains('ancora-contato')) {
		wrapper.style = 'transform: translateY(-80%)';
		clock.style = 'transform: translateY(-30%) scale(0.5) rotate(30deg)';
		chair.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		chair2.style = 'transform: translateY(-30%) scale(0.5) rotate(-45deg)';
		book.style = 'transform: translateY(-30%) scale(0.5) rotate(30deg)';
		table.style = 'transform: translateY(-30%) scale(0.5) rotate(-30deg)';
		alice.style = 'transform: translateY(40%) scale(0.4)';
		transicao2.classList.add('bebendo');
	}

});