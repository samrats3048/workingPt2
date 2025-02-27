//^ this script is  c-(a+b)
//Random symbol array
let symbols = ["*", "/", "+", "-"];

//Random symbol 1
let randomIndex = Math.floor(Math.random() * symbols.length);
let randomSymbol = symbols[randomIndex];
console.log("randomSymbol1 is:", randomSymbol);

//Random symbol 2
let randomIndex2 = Math.floor(Math.random() * symbols.length);
let randomSymbol2 = symbols[randomIndex2];
console.log("randomSymbol2 is:", randomSymbol2);



//Crearer the random numbers
let a = Math.floor(Math.random() * 101);
console.log("a=", a);
let b = Math.floor(Math.random() * 101);
console.log("b=", b);
let c = Math.floor(Math.random() * 101);
console.log("c=", c);

//Initilize sums to avoid problems
// mostly w them 'claiming' they have not been intitilzed!!
let sum = 0;
let sum2 = 0;



//create a function (a b)

function equation(){
     //equation 1
    // Multply
    if (randomSymbol === "*") {
        sum = a * b;
    }
    // Divide
    else if (randomSymbol === "/") {
        if (b !== 0) {
        sum = a / b;
        } else {
        console.log("Division by zero detected in equation 1");
        sum = NaN; //to fix the this divison by zero
        }
    }
    // Add
    else if (randomSymbol === "+") {
        sum = a + b;
    }
    // Subtract
    else if (randomSymbol === "-") {
        sum = a - b;
    } else {
        console.log("Error in equation 1");
    }
}

function equation2() {
    if (randomSymbol2 === "*") {
      sum3 = c * sum;
    } else if (randomSymbol2 === "/") {
      if (c !== 0) {
        sum3 = c / sum;
      } else {
        console.log("Divison by Zero in equation 3");
        sum3 = NaN; //to fix the this divison by zero
      }
    } else if (randomSymbol2 === "+") {
      sum3 = c + sum;
    } else if (randomSymbol2 === "-") {
      sum3 = c - sum;
    } else {
      console.log("error in equestion 3");
    }
    if (!isNaN(sum3)) {
      sum3 = parseFloat(sum3.toFixed(2)); // Convert to number after fixing
    }
    //calling the function to display the equation
    display();
  }
  
//calling the functions
equation();
equation2();
//round central~

//the function to display
function display() {
  let output = document.getElementById("output");
  let html = "";
  // console.log(a, randomSymbol);
  html += `<p> ${c} ${randomSymbol} (${a} ${randomSymbol2} ${b}) = ?</p>`;
  output.innerHTML = html;
}

//create a function to check the user's guess
function checkGuess() {
  const guessInput = document.getElementById("guess");
  const feedback = document.getElementById("feedback");

  feedback.style.display = "block";
  const userGuess = Number(guessInput.value);
  console.log(userGuess);
  //check users guess
  if (isNaN(userGuess)) {
    feedback.innerHTML = "Please enter a valid number!";
    feedback.style.color = "orange";
  } else if (userGuess === sum3) {
    feedback.innerHTML = "Amazing! You got it right!!";
    feedback.style.color = "green";
  } else {
    console.log(feedback);
    feedback.innerHTML = `Whoops, incorect. Try Again `;
    feedback.style.color = "red";
  }
}

//create a function to reset the game
function resetGame() {
  //Random symbol 1
  randomIndex = Math.floor(Math.random() * symbols.length);
  randomSymbol = symbols[randomIndex];
  console.log("randomSymbol1 is:", randomSymbol);

  //Random symbol 2
  randomIndex2 = Math.floor(Math.random() * symbols.length);
  randomSymbol2 = symbols[randomIndex2];
  console.log("randomSymbol2 is:", randomSymbol2);


  //Crearer the random numbers
  a = Math.floor(Math.random() * 101);
  console.log("a=", a);
  b = Math.floor(Math.random() * 101);
  console.log("b=", b);
  c = Math.floor(Math.random() * 101);
  console.log("c=", c);


  //Initilize sums to avoid problems
  // mostly w them 'claiming' they have not been intitilzed!!
  sum = 0;
  sum3 = 0;

  // make guess box = ""
  document.getElementById("guess").value = "";
  //   feedback.display = "none"
  document.getElementById("feedback").style.display = "none";
  //    display div display = "none"
  document.getElementById("display").style.display = "none";

  //calling the functions
  equation();
  equation2();
  console.log("new game sum is:",sum3)
}


function explaination() {
  let display = document.getElementById("display");
  display.style.display = "block";
  let html = "";
  html += `<p>(${a} ${randomSymbol} ${b}) = ${sum}</p>`;
 
  html += `<p> (${c} ) ${randomSymbol2} (${a} ${randomSymbol} ${b} = ${sum}) </p>`;
  html += `<p>${c} ${randomSymbol2} ${sum} = ${sum3}</p>`;
  display.innerHTML = html;
}

//to check to see if the program is running right
//eq1 and sum 1
  console.log(a, randomSymbol, b, "=", sum);
  console.log("sum1=", sum);
  //e1 q1 and sum2
  console.log(c, randomSymbol2, sum,"=", sum3);
  console.log("sum3", sum3);
  //eq2 and sum3
  console.log(
    "(",c,")",randomSymbol2, "(",a,randomSymbol,b,"=",sum,")"
  );
  console.log("(", c, ")", randomSymbol2, "(", sum, ")", "=", sum3);
  console.log("sum3=", sum3);