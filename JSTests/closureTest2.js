/**
 * Created by hemant on 23/05/15.
 */
function testID(){
	var id = 10;

	return {

		getID : function(){
			return id;
		},

		setID : function(val){
			id = val;
		}
	}

}

var tester = testID();
console.log(tester.getID());
tester.setID(5);
console.log(tester.getID());
