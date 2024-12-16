btn = document.getElementById("btn").addEventListener('click', clicar)
var pont1 = 0 
var pont2 = 0 
var draw = 0





function clicar(){
    player1 = window.document.querySelector(".img1")
player2 =  window.document.querySelector(".img2")
 alenumber1 = Math.floor(Math.random() * (7 - 1) + 1)
alenumber2 = Math.floor(Math.random() * (7 - 1) + 1 )
res = window.document.getElementById("h1")

//Dado do Player 1
if (alenumber1 == 1){
    player1.src = "images/dado1.png"
} else if (alenumber1 == 2){
    player1.src = "images/dado2.png"
} else if (alenumber1 == 3){
    player1.src = "images/dado3.png"
} else if (alenumber1 == 4){
    player1.src = "images/dado4.png"
} else if (alenumber1 == 5){
    player1.src = "images/dado5.png"
} else {
    player1.src = "images/dado6.png"
} 
// Dado do Player 2
if (alenumber2 == 1){
    player2.src = "images/dado1.png"
} else if (alenumber2 == 2){
    player2.src = "images/dado2.png"
} else if (alenumber2 == 3){
    player2.src = "images/dado3.png"
} else if (alenumber2 == 4){
    player2.src = "images/dado4.png"
} else if (alenumber2 == 5){
    player2.src = "images/dado5.png"
} else {
    player2.src = "images/dado6.png"
}


// Resultado

if (alenumber1 > alenumber2){
    res.innerHTML = 'O Player 1 Venceu!'
    pont1 = pont1 + 1
    pl1.innerHTML = `Player1: ${pont1} pontos`
} else if (alenumber1 < alenumber2){
    res.innerHTML = 'O Player 2 Venceu!'
    pont2 = pont2 + 1
    pl2.innerHTML = `Player2: ${pont2} pontos`
} else {
    res.innerHTML = 'Empate'
    draw++
    emp.innerHTML = `Empates: ${draw} empates`
}
}




