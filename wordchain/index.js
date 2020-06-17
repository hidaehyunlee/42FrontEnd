const btn = document.querySelector('#btn');

btn.addEventListener('enter', () => {
	const word = document.querySelector('#word').textContent;
	const input = document.querySelector('#input').value;
	const lastLetter = word.substr(-1);
	const firstLetter = input[0];
	const err = '글자를 입력하세요!'

	if (input){
		if (lastLetter === firstLetter){
			document.querySelector('#word').textContent = input;
			document.querySelector('#result').textContent = '정답!'
			document.querySelector('#input').value = '';
		}
		else {
			document.querySelector('#result').textContent = '땡!'
		}
	}
	else {
		alert(err);
	}
});
