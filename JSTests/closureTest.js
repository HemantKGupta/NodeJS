/**
 * Created by hemant on 23/05/15.
 */
function test(first){

	var sl = "Mr.";

	function lastname(last){
		return sl + " " + first + " " + last;
	}

	return lastname;
}

var tester = test("Hemant");

console.log(tester("Gupta"));

