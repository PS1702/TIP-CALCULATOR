// Custom function

function calculateTip(){

    // Store data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // Quick validation

    if(billAmount === "" || serviceQuality == 0){
        window.alert("Please enter some value to get this baby up and running!")
    }

    // Check to see if numpeople input is empty or lessthan or equal to 0

    if(numPeople === "" || numPeople<=1){
        numPeople=1;
        document.getElementById("each").style.display="none";
    }else{
        document.getElementById("each").style.display="block";        
    }

    // Do some maths

    total = (billAmount * serviceQuality)/numPeople;
    total = Math.round(total*100)/100;
    total = total.toFixed(2);

    // Display the tip

    document.getElementById("totalTip").style.display = "block"
    document.getElementById("tip").innerHTML = total
}

// Hide the tip amount on load

document.getElementById("totalTip").style.display="none"
document.getElementById("each").style.display="none"

// Clicking the button calls our custom function

document.getElementById("calculate").onclick=function(){calculateTip();};