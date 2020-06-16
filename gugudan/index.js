document.querySelector('#click').addEventListener('click', () => {
	const first = document.querySelector('#first').value;
	const second = document.querySelector('#second').value;
	var err = '숫자를 입력하세요!';

	if (first){
		if (second){
			document.querySelector('#result').textContent = first * second;
		}
		else {
			alert(err);
		}
	}
	else {
		alert(err);
	}
});
