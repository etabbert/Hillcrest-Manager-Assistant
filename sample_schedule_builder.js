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


//Generate and shuffle list
function randomizeList(){
    const test1 = ["Sebastian", true]
    const test2 = ["Ethan", true]
    const test3 = ["Andrea", true]
    const test4 = ["Nick", false]
    const test5 = ["Dan", false]
    const test6 = ["Kyle", true]

    let randomizedList = [test1,test2,test3,test4,test5,test6]

    //Test Shuffle
    shuffle(randomizedList)
    //console.log(scheduleList)

    return randomizedList
}

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



displayFormatter()