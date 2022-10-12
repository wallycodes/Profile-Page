// Name Change******************************************
var headerName = document.querySelector(".headerFont");
// console.log(headerName);

    function changeName(){
    headerName.innerHTML = "Waldimir Perez";
    }

// Remove/Hide Connection Request******************************************
var profile = document.querySelector(".profileCheck");
// console.log(profile);

    function hide(){
        profile.remove();
    }

var profile2 = document.querySelector(".profileCheck2");

    function hide2(){
        profile2.remove();
    }

//connection Request Amount Variables******************************************
var connectionRequestAmount = 2;
var request = document.querySelector(".number");
// console.log(request);


// Your connections******************************************

var currentNumber = 500;
var connections = document.querySelector(".number2");
// console.log(connections);

function less(){
    connections.innerHTML = currentNumber-1;
    currentNumber = currentNumber -1; 
    //connection Request Amount Logic
    request.innerHTML= connectionRequestAmount - 1; 
    connectionRequestAmount = connectionRequestAmount -1;
}

function more(){   
    connections.innerHTML = currentNumber + 1;
    currentNumber = currentNumber +1; 
    //connection Request Amount Logic
    request.innerHTML= connectionRequestAmount - 1; 
    connectionRequestAmount = connectionRequestAmount -1;
}