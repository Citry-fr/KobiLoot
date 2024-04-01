let button = document.getElementById('open-lootbox');
let main = document.getElementById('main');
let header = document.getElementById('header');
let body = document.querySelector('body');
let footer = document.querySelector('footer');

let audio = new Audio('./sound/never.mp3');
audio.volume = 0.3;

button.addEventListener('click', () => {
	audio.play();
	header.style.display = 'none';
	main.style.display = 'none';
	body.style.backgroundImage = 'url(images/ibok.png)';
	footer.style.color = 'purple';

	setInterval(function () {
		const emoji = document.createElement('img');
		emoji.src = './images/kobiXDDD.png'; // You can change the emoji here
		emoji.height = 60;
		emoji.classList.add('emoji');
		emoji.style.left = Math.random() * window.innerWidth + 'px';
		emoji.style.top = -Math.random() * 100 + 'px';
		document.body.appendChild(emoji);
	}, 200);
});
