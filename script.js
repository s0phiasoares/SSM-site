// MATRIX BACKGROUND

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = [];

for(let i = 0; i < columns; i++){
drops[i] = 1;
}

function draw(){
ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#0f0";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

const text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
drops[i] = 0;

drops[i]++;
}
}

setInterval(draw,33);


// TERMINAL

const input = document.getElementById("command");
const output = document.getElementById("output");

if(input){

input.addEventListener("keydown",function(e){

if(e.key === "Enter"){

const cmd = input.value;

output.innerHTML += "<div>> "+cmd+"</div>";

if(cmd === "hack"){

output.innerHTML += "<div>Iniciando ataque...</div>";
output.innerHTML += "<div>Quebrando firewall...</div>";
output.innerHTML += "<div>Acesso concedido ✔</div>";

}

else if(cmd === "scan"){

output.innerHTML += "<div>Escaneando rede...</div>";
output.innerHTML += "<div>IP encontrado: 192.168.0.1</div>";

}

else if(cmd === "clear"){

output.innerHTML = "";

}

else{

output.innerHTML += "<div>Comando desconhecido</div>";

}

input.value="";

}

});

}