/**
 * Created by hemant on 23/05/15.
 */
function idCreator(people){

	var i ;
	var prefix = 10;

	for(i=0; i < people.length;i++){

		people[i]["id"] = function()
			{
				return prefix+i;
			}
	}

	return people;


}

var testPeople = [{"name":"a"}, {"name":"b"}, {"name":"c"}];

var tester =  idCreator(testPeople);

console.log(tester[0].id());


function idCreator2(people){

	var i ;
	var prefix = 10;

	for(i=0; i < people.length;i++){

	people[i]["id"] = function(j)
		{
		return function(){
			return prefix+j;
			}()
		}(i);
	}

	return people;


}

var testPeople2 = [{"name":"a"}, {"name":"b"}, {"name":"c"}];

var tester2 =  idCreator2(testPeople2);

console.log(tester2[1].id);
