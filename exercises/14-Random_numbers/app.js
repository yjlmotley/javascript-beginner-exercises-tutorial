function getRandomInt()
{
	let randomNumber = Math.random();
	let randomInteger = Math.floor(randomNumber * 10) + 1;
	return randomInteger;
}


console.log(getRandomInt());
