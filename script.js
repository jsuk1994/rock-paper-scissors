console.log("hello")

function getComputerChoice(){
    let randomNum = Math.random()
    if (randomNum <= 0.39){
    console.log("Rock")
    } else if(randomNum >= 0.40 && randomNum <= 0.79){
        console.log("Paper")
    } else {
        console.log("Scissors")
    }
}