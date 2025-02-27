//^lie this is for the first level? Idk im also confused
//^ this script should be a-b?

//Random symbol array
let symbols = ["*", "/", "+", "-"];

//Random symbol 1
let randomIndex = Math.floor(Math.random() * symbols.length);
let randomSymbol = symbols[randomIndex];
console.log("randomSymbol1 is:", randomSymbol);

//Crearer the random numbers
let a = Math.floor(Math.random() * 101);
console.log("a=", a);
let b = Math.floor(Math.random() * 101);
console.log("b=", b);

//Initilize sums to avoid problems
// mostly w them 'claiming' they have not been intitilzed!!
let sum = 0;

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
   if (!isNaN(sum)) {
    sum = parseFloat(sum.toFixed(2)); // Convert to number after fixing
  }
       //calling the function to display the equation
       display();
}

//calling the functions
equation();

//the function to display
function display() {
    let output = document.getElementById("output");
    let html = "";
    // console.log(a, randomSymbol);
    html += `<p>  ${a} ${randomSymbol} ${b} = ?</p>`;
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
    } else if (userGuess === sum) {
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
  
   
  
  
    //Crearer the random numbers
    a = Math.floor(Math.random() * 101);
    console.log("a=", a);
    b = Math.floor(Math.random() * 101);
    console.log("b=", b);
    
  
    //Initilize sums to avoid problems
    // mostly w them 'claiming' they have not been intitilzed!!
    sum = 0;
   
  
    // make guess box = ""
    document.getElementById("guess").value = "";
    //   feedback.display = "none"
    document.getElementById("feedback").style.display = "none";
    //    display div display = "none"
    document.getElementById("display").style.display = "none";
  
    //calling the functions
    equation();
   
    console.log("new game sum is:",sum)
  }
  

  function explaination() {
    let display = document.getElementById("display");
    display.style.display = "block";
    let html = "";
    html += `<p>(${a} ${randomSymbol} ${b}) = ${sum}</p>`;
    display.innerHTML = html;
  }

  //eq1 and sum 1
  console.log(a, randomSymbol, b, "=", sum);
  console.log("sum1=", sum);