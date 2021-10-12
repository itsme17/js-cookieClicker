var score = 0;
var target = document.getElementById("score")
var target2 = document.getElementById("multiplierCostPrice")
var target3 = document.getElementById("multiplierUsedCounter")
var target4 = document.getElementById("autoClickerCostPrice")
var target5 = document.getElementById("bonusCostPrice")
var current = "default";
var multiplierCost = 20
var autoClickerCost = 30
var bonusCost = 40
var multiplierCount = 0
/* basic scores*/
target.innerHTML  = score;
target2.innerHTML  = multiplierCost;
target3.innerHTML  = multiplierCount;
target4.innerHTML = autoClickerCost;
target5.innerHTML = bonusCost;


function main() {
    if(current == "default"){
        score = score+1
    }
    if(current == "multiplier"){
        score = score+2
    }
    if (current =="auto-Clicker"){
        setInterval(() =>{
            score++
            displayScore()
        },1000)
    }
    if (current == "bonus"){
        score = score+200
        displayScore()
        setInterval(() =>{
            current = "default"
            displayScore()
        },10000)
    }
    displayScore()

}
function autoClicker(){
    if (score>=autoClickerCost){
        score = score - autoClickerCost;
        displayScore()
        autoClickerCost = autoClickerCost + 10
        target4.innerHTML  = autoClickerCost;
        current = "auto-Clicker"
    }
    else{
        var diffCookies = autoClickerCost-score
        alert("You need more cookies! "+"You need "+ diffCookies+" more cookies to buy this option.")
    }
}
function multiplier(){
    if (score>=multiplierCost){
        score = score - multiplierCost;
        displayScore()
        multiplierCost = multiplierCost + 10
        target2.innerHTML  = multiplierCost;
        current = "multiplier"
        multiplierCount++
        target3.innerHTML  = multiplierCount;
    }
    else{
        var diffCookies = multiplierCost-score
        alert("You need more cookies! "+"You need "+ diffCookies+" more cookies to buy this option.")
    }

}
function bonus(){
    if (score>=bonusCost){
        score = score - bonusCost;
        displayScore()
        bonusCost = bonusCost + 10
        target5.innerHTML  = bonusCost;
        current = "bonus"
    }
    else{
        var diffCookies = bonusCost-score
        alert("You need more cookies! "+"You need "+ diffCookies+" more cookies to buy this option.")
    }
}
function displayScore(){
    target.innerHTML  = score;
}


document.getElementById("cookieImg").addEventListener("click", main)
document.getElementById("multiply").addEventListener("click", multiplier)
document.getElementById("auto-clicker").addEventListener("click", autoClicker)
document.getElementById("bonus").addEventListener("click", bonus)
