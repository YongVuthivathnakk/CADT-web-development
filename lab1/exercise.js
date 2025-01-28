// ***Main***






    // Challenge 1
let start1 = document.getElementById("start1");
let output1 = document.getElementById("output1");

start1.onclick = function() {
    let widthValue = prompt("Enter the width: ");
    let heightValue = prompt("Enter the height: ");
    output1.innerHTML = challenge1(widthValue, heightValue);
}


    // Challenge 2

let start2 = document.getElementById("start2");
let output2 = document.getElementById("output2");

start2.onclick = function() {
    let arraySize = prompt("Enter the array size: ");
    let array = [];
    for(let i = 0; i < arraySize; i += 1) {
        array[i] = prompt(`Enter the value of element ${i + 1}: `);
    }
    output2.textContent = challenge2(array);
}

    // Challenge 3
let start3 = document.getElementById("start3");
let output3 = document.getElementById("output3");

start3.onclick = function() {
    let gradeSize = prompt("Enter the size of the array to store the grade: ");
    let gradeArray = [];
    for(let i = 0; i < gradeSize; i += 1) {
        gradeArray[i] = prompt(`Enter the grade of element ${i + 1}: `); // when prompt all the element will be string or char
    }
    let gradeNumArray = gradeArray.map(Number); // convert to number
    output3.textContent = challenge3(gradeNumArray, gradeSize);
}

    
    // Challenge 4

let start4 = document.getElementById("start4");
let output4 = document.getElementById("output4");

start4.onclick = function () {
    let myString = prompt("Enter a sentence: ");
    let myChar = prompt("Enter a character: ");
    output4.textContent = challenge4(myString, myChar);
}

    //Challenge 5
let start5 = document.getElementById("start5");
let output5 = document.getElementById("output5");

start5.onclick = function () {
    let myText = prompt("Enter a paragraph: ");
    output5.textContent = challenge5(myText);
}

    //Challenge 6
let start6 = document.getElementById("start6");
let output6 = document.getElementById("output6");

start6.onclick = function () {
    let numberOfVotes = prompt("Enter the number of votes: ");
    let arrayOfVotes = [];
    for(let i = 0; i < numberOfVotes; i += 1) {
        arrayOfVotes[i] = prompt("Enter the candidates (character must be CAPITALIZED): ");
    }
    output6.textContent = challenge6(arrayOfVotes); 
}





// ***Functions***

// Challenge 1
// TODO: Draw a rectangle in the console using stars.
function challenge1(width, height) {
    let result = '';
    for(let i = 1; i <= height; i++ ) {
        for(let j = 1; j <= width; j++) {
            result += '*';
        }
        result += "\n";
    }
    result = result.replace(/\n/g, '<br>');
    return result;
};

// Challenge 2
// TODO: Reverse any array.
function challenge2(array) {
    let tempArray = [];
    let myLength = array.length;
    for(let i = (myLength - 1); i >= 0; i --) {
        tempArray.push(array[i]);
    }
    return tempArray;
};


// Challenge 3
// TODO: Calculate the average grade of a list of student.
function challenge3(arrayGrade, size) {
    let result = 0; // set to double
    let counter = 0;
    Number(arrayGrade);

    if(arrayGrade.length === 0){ // Check the length of the array
        result = 0;
    } else {
        for(let i = 0; i < size; i++) {
            result += arrayGrade[i];
            counter += 1;
        }
        result = result / counter;
    } 
    return result;
};


// Challenge 4
// TODO: Write a function to count how many times a character appears in a string.
function challenge4(text, char) {
    let counter = 0;
    for(let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            counter += 1;
        }
    }

    // Output and grammar check
    if(counter < 2) {
        return `The letter "${char}" has appeared ${counter} time.`;
    } else {
        return `The letter "${char}" has appeared ${counter} times.`;
    }
};

// Challenge 5
// TODO: Count the numbers of words in a sentence

function challenge5(text) {
    text = text.trim();
    let counter = text.split(" ").length;
    return `Your word count is: ${counter}`;
};


// Challenge 6
// Simulate a voting system for three candidates (A/B/C)
function challenge6(arrayOfVotes) { 
    let a = 0;
    let b = 0;
    let c = 0;
    if(arrayOfVotes.length == 0) {
        console.log("There are not any vote yet.");
        return;
    }

    for(let i = 0; i < arrayOfVotes.length; i ++) {
        if(arrayOfVotes[i] === 'A') {
            a += 1;
        } else if (arrayOfVotes[i] === 'B') {
            b += 1;
        } else if (arrayOfVotes[i] === 'C') {
            c += 1;
        }
    }



    if (a === b && a === c && b === c) {
        return "A B and C are equal.";
    } else if(a === b) {
        return "A and B are both winners.";
    } else if(a === c) {
        return "A and C are both winners.";
    } else if(a > b && a > c) {
        return "A is the winner.";
    } else if (b > a && b > c) {
        return "B is the winner.";
    } else if (c > a && c > b) {
        return "C is the winner.";
    }
};




