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
    const test1 = ["Sebastian", true]
    const test2 = ["Ethan", true]
    const test3 = ["Andrea", true]
    const test4 = ["Nick", false]
    const test5 = ["Dan", false]
    const test6 = ["Kyle", true]

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

    if (input_day == "Monday"){
        //Use monday start stop
        checkType(input_type);
    }
    else if (input_day == 'Tuesday'){
        //Use tuesday start stop
        checkType(input_type);
    }
    else if (input_day == 'Wednesday'){
        //Use wednesday start stop
        checkType(input_type);
    }
    else if (input_day == "Thursday"){
        //Use thursday start stop
        checkType(input_type);
    }
    else if (input_day == "Friday"){
        //Use friday start stop
        checkType(input_type);
    }
    else if (input_day == "Saturday"){
        //Use saturday start stop
        checkType(input_type);
    }
    else if (input_day == "Sunday"){
        //Use sunday start stop

        /*

        SELECT * FROM employees WHERE sundayStart > x AND sundayStop < y

        */
        checkType(input_type);
    }
    else{
        console.log("ERROR CHECKING GOES HERE");
    }

    /*For php statement, general flow is mondayStart, mondayStop, etc

    - For the template: <weekday>(Start/Stop)
    \-> weekDay represents the <weekday>
    \-> shiftType represents the (Start/Stop)

    to pull:
    SELECT *
    FROM employees
    WHERE column_name BETWEEN value1 AND value2;

    NOTE: We can have separate cases for days of the week.
    Then within the week day, we have times. Is there an easier way
    of doing this?

    e.g

    if input is Monday
        if input is Breakfast
            pull all employees who work Monday Breakfast
        elif input is Lunch
            pull all employees who work Monday Lunch
        elif input is Dinner
            do something
    elif input is Tuesday...
    etc...

    FOR RARE CASES (people who's shifts start and stop at abnormal times)
    if start is after the usual start time, but ends either equal or before the stop time, put them in the list


    */

    //Here I can pull from the database instead of using these samples
    let randomizedList = [test1,test2,test3,test4,test5,test6]

    //Test Shuffle
    shuffle(randomizedList)
    //console.log(scheduleList)

    return randomizedList
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