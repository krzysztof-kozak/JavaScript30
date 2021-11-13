window.addEventListener("keypress", playSound);

const audioElements = document.querySelectorAll("audio");

function playSound({ keyCode }) {
	console.log(keyCode);
	const [audioElement] = [...audioElements].filter((el) => el.dataset.keyCode == keyCode);

	audioElement.currentTime = 0;
	audioElement.play();
}
