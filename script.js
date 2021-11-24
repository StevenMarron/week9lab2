// RPS JS
// Rock=0 Paper=1 Scissors=2

// I couldn't figure out how to get it to play only 3 times, instead the computer loops and enters the user guess three times and outputs the final round out as the result

			
function game(input){
	
	for(i=0;i<=2;i++){
		let userInput=input;
		console.log(userInput);
		var randomNum=Math.floor(Math.random()*3);
		console.log(randomNum);
	
		if (userInput==randomNum){
			document.getElementById("Result").innerHTML="Draw!";
		}
		else if (userInput==0 && randomNum==1){
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Paper!";
		}
		else if (userInput==0 && randomNum==2){
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Scissors!";
			i=3;
		}
		else if (userInput==1 && randomNum==0){
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Rock";
			i=3;
		}
		else if (userInput==1 && randomNum==2){
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Scissors!";
		}
		else if (userInput==2 && randomNum==0){
			document.getElementById("Result").innerHTML="You Lost! Your opponent guessed Rock!";
		}
		else	{
			document.getElementById("Result").innerHTML="You Win! Your opponent guessed Paper!";
			i=3;
		}
	}
}