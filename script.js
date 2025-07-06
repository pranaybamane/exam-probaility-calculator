function calculate() {
	var name = document.getElementById("name").value;
    var gif = document.getElementById('resultGif');
	var result = document.getElementById("result");
	result.textContent = "";
	var btn = document.getElementById('calculate');
	btn.disabled = true;
	btn.textContent = 'Calculating...';
	setTimeout(function() {
		if (name.toLowerCase().includes('tejas') || name.toLowerCase().includes('omkar') || name.toLowerCase().includes('gauresh') ) {
            result.textContent = 'The probability of you passing is 100%,\n Congratulation you will pass with flying colors! ^.^';
            gif.src="https://media.tenor.com/YEyladI4_aYAAAAi/chibi-cat-mochi-cat.gif";
        } else if (name.toLowerCase().includes('aditya') || name.toLowerCase().includes('shubham') || name.toLowerCase().includes('ramya') ) {
            result.textContent = 'Why are you still searching when you already know you will top the exam -_-,\nCongratulations, You will top the exam! (^o^)';
            gif.src="https://media.tenor.com/2xsDm_DuCwsAAAAi/github-sticker.gif";
        } else if (name.toLowerCase().includes('bob') || name.toLowerCase().includes('abhishek') || name.toLowerCase().includes('sainath')) {
            result.textContent= 'The Probability of you passing is 99%, Hope you will pass :-)';
            gif.src="https://media.tenor.com/SxFrOynpwWUAAAAi/good-night-puttar-ji.gif";   

        } else if (name.toLowerCase().includes('pranay')) {
            result.textContent= 'It seems you are searching my name, hope I will pass :)';
            gif.src="https://media.tenor.com/0tkCPVxDt1kAAAAi/dudu.gif";
        } 
         else {
            result.textContent = 'Congrats ' + name + ', you will pass';
             gif.src="https://media1.tenor.com/m/PambsGd1-UkAAAAC/mochi-cat.gif";
        }
        gif.style.display = "block";
		btn.disabled = false;
		btn.textContent = 'Calculate';
	}, 2000);
}
