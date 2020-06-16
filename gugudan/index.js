document.querySelector('#click').addEventListener('click', () => {
	const first = document.querySelector('#first').value;
	const second = document.querySelector('#second').value;

	document.querySelector('#result').textContent = first * second;
});
