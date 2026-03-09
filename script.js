const canvas = document.getElementById("matrix")
const ctx = canvas.getContext("2d")

canvas.height = window.innerHeight
canvas.width = window.innerWidth

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const fontSize = 14
const columns = canvas.width / fontSize

const drops = []

for(let x = 0; x < columns; x++)
drops[x] = 1

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)"
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle = "#0f0"
ctx.font = fontSize + "px monospace"

for(let i=0;i<drops.length;i++){

let text = letters.charAt(Math.floor(Math.random()*letters.length))

ctx.fillText(text,i*fontSize,drops[i]*fontSize)

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i] = 0

drops[i]++

}

}

setInterval(draw,33)


const input = document.getElementById("cmd")
const terminal = document.getElementById("terminal")

input.addEventListener("keydown",function(e){

if(e.key === "Enter"){

let cmd = input.value
input.value = ""

let line = document.createElement("div")
line.innerHTML = "> " + cmd
terminal.appendChild(line)

let res = document.createElement("div")

if(cmd === "help"){
res.innerHTML = "Comandos: help | acessar | limpar | segredo"
}

else if(cmd === "acessar"){
res.innerHTML = "Acessando sistema..."
}

else if(cmd === "segredo"){
res.innerHTML = "Arquivo secreto encontrado"
}

else if(cmd === "limpar"){
location.reload()
return
}

else{
res.innerHTML = "Comando desconhecido"
}

terminal.appendChild(res)

window.scrollTo(0,document.body.scrollHeight)

}

})