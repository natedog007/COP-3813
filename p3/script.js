document.getElementById("calculateButton").onclick = function(){
    
    //Based on many attempts and research I had to convert the inputs from strings (default) into flaot values for all the function to work properly
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    const num3 = parseFloat(document.getElementById("number3").value) || 0;
    
    //Put inputs into array(Easier to work with arrays) 
    const numArray = [num1, num2, num3];

    //Puts the text into the html file through the innerHTML function along with my functions
    document.getElementById("max").innerHTML = "Max: " + calcMax(numArray);
    document.getElementById("min").innerHTML = "Min: " + calcMin(numArray);
    document.getElementById("median").innerHTML = "Median: " + calcMedian(numArray);
    document.getElementById("average").innerHTML = "Average: " + calcAverage(numArray);
    document.getElementById("range").innerHTML = "Range: " + calcRange(numArray);

    //This is for testing purposes
    console.log("Max:", calcMax(numArray));
    console.log("Max:", calcMin(numArray));
    console.log("Median:", calcMedian(numArray));
    console.log("Average:", calcAverage(numArray));
    console.log("Range:", calcRange(numArray));
}

//Most of these are self explanitory (I used built-in function for most of the project)

function calcMax(numArray){
    return Math.max(...numArray);
}

function calcMin(numArray){
    return Math.min(...numArray);
}

//Returns the middle element of the sorted array
function calcMedian(numArray){
    numArray.sort((a, b) => a - b);
    return numArray[1];
}

//Manually sums the array and divides it by its length
function calcAverage(numArray){
    let sum = 0;
    for (let i of numArray){
        sum += i;
    }
    return sum/numArray.length;
}


function calcRange(numArray){
    return calcMax(numArray) - calcMin(numArray);
}

