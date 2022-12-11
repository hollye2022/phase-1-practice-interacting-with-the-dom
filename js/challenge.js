



// const minus = document.getElementById("minus");
// const counter = document.getElementById("counter");
// minus.addEventListener("click", () => counter.textContent - 1 );

// const plus = document.getElementById("plus");
// minus.addEventListener("click", () => counter.textContent + 1 );

/*
0. Make a variable to store the counterInt number

1. Make a function to: 
 - increment the counterInt variable
 - set counter.textContent = counterInt
 - set another timeout to increment the counter again after 1 second
2. Use an initial setTimeout to call this function
*/

let counterElement = document.getElementById("counter");
let counterValue = 0;
let isRunning = true;

let pauseButton = document.getElementById("pause");
pauseButton.addEventListener('click', () => {
    if(isRunning){
        pauseButton.textContent = "resume";
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
    } else {
        console.log(pauseButton.textContent);
        pauseButton.textContent = "pause";
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    }
    isRunning = !isRunning;
    IncreaseTime();
})

function IncreaseTime(){
    if (isRunning) {
        setTimeout(() => {
            ++counterValue;
            console.log(`Counter value is ${counterValue}`)
            counterElement.textContent = counterValue;
            IncreaseTime();
        } , 1000);
    }
}

IncreaseTime();

document.getElementById("minus").addEventListener("click", minus);
 
function minus(){
    --counterValue;
    counterElement.textContent = counterValue;
    
}
 
document.getElementById("plus").addEventListener("click", plus);
 
function plus(){
    ++counterValue;
    counterElement.textContent = counterValue;
    
}

let heart = document.getElementById("heart");
heart.addEventListener("click", like);
 
function like(){
    let li = document.createElement("li");
    let ul = document.querySelector("ul");
    li.textContent = `${counterValue} has been liked 1 time` ;
    ul.append(li);  
    
}

let form = document.getElementById("comment-form");
form.addEventListener("submit", e => post(e))

function post(e) {
    e.preventDefault();
    let list = document.getElementById("list")
    let p = document.createElement("p")
    let inputBox = document.getElementById("comment-input");
    p.textContent = inputBox.value;
    list.append(p);
}

