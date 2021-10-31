//Test and debug this palindrome project; to run the code you need to invoke/call/execute the palindrome arrow function
//Unfortunately, the developer did not adopt any clear standards in their code and now its your job to reformat, test and debug the project
//Suggested Task Order:
//1. Run the code to see the current state
//2. Make a copy of the current code base; perhaps just duplicate the index page.
//3. Restructure the code so that it follows clear and readable standards
//4. Run the code to see if there are any new errors
//5. Debug the code so it confirms when a word is a palindrome; syntax and symantic problems may exist
//6. If not already done, adopt a better naming convention
//7. Improve the user's experience by helping them understand what they need to do
//8. Refactor the code so the project ignores case (for example Rotor is a palindrome).
//9. Compare your experience with your peers – what was easy, challenging etc, what the main issues was, how should the program have been designed, commented, etc? 


//this is my 4th function or 3rd - not sure
function myfunction3(somevalue) {
var wsome = 
""; for(
mycount = somevalue.length; mycount > 0; mycount--) {
wsome += somevalue[mycount] //this adds stuff 
;
//some space


}
if(somevalue == wsome) { return true; }
return true;
				}

//this function is really useful but caused me no end of problems 
		function gottostArtSomeWHER() {
var something = myfunction1();if(myfunction3(something) == true) // if true
{


		console.log ("yep its a palindrome"); //your word was a palindrome
	} else {

		//output to the console to tell the user the work was not a palindrome
		console.log("nah its not a palindrome");
	}
}

function myfunction1() { //I thought this would be a good why to initialise my variables
var w = prompt();
return v



}
//to run my program just invoke this function 'palindrome()' - the program works well
const palindrome = () => { gottostArtSomeWHER(); }