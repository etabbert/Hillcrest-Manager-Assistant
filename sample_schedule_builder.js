/*
TO RUN:

in terminal with node js: node sample_schedule_builder.js

ALGORITHM: Always find a checker first (which I will define as index 0).

Once found, pop person out of the list

ORDER OF THE LIST MATTERS:

[Checker, Fields, Fields, Pizza, Grill, Grill, Homecooking, Burrito, Burrito, Dishroom, Dining, Dining]

*/


//Randomize List Content
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function checkType(input_type){
      let time = [];
    if (input_type == 'shift1'){
        time[0] = 600;
        time[1] = 0800;
        console.log("Time start " + time[0]);
    }
    else if (input_type == 'shift2'){
        time[0] = 0800;
        time[1] = 1000;
    }
    else if (input_type == 'shift3'){
        time[0] = 1000;
        time[1] = 1200;
    }
    else if (input_type == 'shift4'){
        time[0] = 1200;
        time[1] = 1400;
    }
    else if (input_type == 'shift5'){
        time[0] = 1500;
        time[1] = 1700;
    }
    else if (input_type == 'shift6'){
        time[0] = 1700;
        time[1] = 2000;
    }
    else{
        console.log("INVALID TYPE INPUT")
    }

    //Test
    console.log(time);
    return time;

  }


//Generate and shuffle list
async function randomizeList(){
    //Error handling
    if (document.getElementById('week_day').value == "") {
		document.getElementById('error').innerHTML = "No last name provided";
	} else {
		document.getElementById('error').innerHTML = "";
		lastname = document.getElementById('week_day').value;
	}

    //Testing getting html input
    console.log(document.getElementById('week_day').value);
    console.log(document.getElementById('shift_type').value);

    var input_day = document.getElementById('week_day').value;
    var input_type = document.getElementById('shift_type').value;

    let time = [];
    var start = "";
    var stop = "";
    if (input_day == "Monday"){
        //Use monday start stop
        start = "mondayStart";
        stop = "mondayStop";
        time = checkType(input_type);
    }
    else if (input_day == 'Tuesday'){
        //Use tuesday start stop
        start = "tuesdayStart";
        stop = "tuesdayStop";
        time = checkType(input_type);
    }
    else if (input_day == 'Wednesday'){
        //Use wednesday start stop
        start = "wednesdayStart";
        stop = "wednesdayStop";
        time = checkType(input_type);
    }
    else if (input_day == "Thursday"){
        //Use thursday start stop
        start = "thursdayStart";
        stop = "thursdayStop";
        time = checkType(input_type);
    }
    else if (input_day == "Friday"){
        //Use friday start stop
        start = "fridayStart";
        stop = "fridayStop";
        time = checkType(input_type);
    }
    else if (input_day == "Saturday"){
        //Use saturday start stop
        start = "saturdayStart";
        stop = "saturdayStop";
        time = checkType(input_type);
    }
    else if (input_day == "Sunday"){
        
        start = "sundayStart";
        stop = "sundayStop";
        time = checkType(input_type);
    }
    else{
        console.log("ERROR CHECKING GOES HERE");
    }


    let myResponse = await fetch("schedule.php", {
		method: 'POST',
		headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
		body: JSON.stringify({start: start, stop: stop, timeStart: time[0], timeStop: time[1] })
	});

    let result = await myResponse.json();
    let output = JSON.stringify(result);

    let employeeList = [];
    if (output == "[]") {
		document.getElementById('error').innerHTML = "No employee found that fits this criteria";
	}
    else{
        if ((typeof result.firstname) == "string"){
            employeeList.push(result.firstname)
            console.log(employeeList)
        }
        else{
            for(var i = 0; i < result.firstname.length; i++){
                employeeList.push(result.firstname[i]);
                console.log(employeeList);
            }
            shuffle(employeeList);
            console.log(employeeList);
        }
    }
	let daSchedule = [];
    //let daSchedule = generateSchedule(employeeList);

    console.log(daSchedule);

    return employeeList;
}

//Generate schedule for anytime
function generateSchedule(shuffledList){
    var checkerFound = false;

    let finalSchedule = [];

    //int
    var count = shuffledList.length;

    while (count > 0){
        var currentEmployee  = shuffledList[0];
        if (checkerFound == false){
            //Check if checker certified
            if (currentEmployee[1] == true){
                checkerFound = true;
                finalSchedule.push(currentEmployee[0]);
                shuffledList.shift();
            }
            //If not certified, add to end of list
            else{
                shuffledList.push(shuffledList[0]);
                shuffledList.shift();
                count = count+1;
            }
        }
        //Remove head
        else{
            finalSchedule.push(currentEmployee[0])
            shuffledList.shift();
        }
        count = count-1;
    }

    return finalSchedule
}


//run scheudle builder
function displayFormatter(){
    let finalSchedule = generateSchedule(randomizeList())
    let stations = ["Checker", "Pizza", "Pizza", "Burrito", "Grill", "Dishroom"]

    for (var i = 0; i < finalSchedule.length; i++){
        console.log(stations[i] + ": " + finalSchedule[i]);
    }


}



//displayFormatter()