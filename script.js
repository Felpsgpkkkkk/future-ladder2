const vel = document.getElementById("velocidade");
const inc = document.getElementById("inclinacao");
const dur = document.getElementById("duracao");


const vel_valor = document.getElementById("vel_valor");
const inc_valor = document.getElementById("inc_valor");
const dur_valor = document.getElementById("dur_valor");


const status = document.getElementById("status");
const energia = document.getElementById("energia");


const barra = document.getElementById("barraProgresso");
const bateria = document.getElementById("bateriaNivel");
const grafico = document.getElementById("grafico");


const salvar = document.getElementById("salvar");


vel.oninput = () => vel_valor.textContent = vel.value + " km/h";
inc.oninput = () => inc_valor.textContent = inc.value + "%";
dur.oninput = () => dur_valor.textContent = dur.value + " min";


function calcularEnergia(velocidade, duracao) {
const horas = duracao / 60;
const km = velocidade * horas;
return km * 12;
}


salvar.onclick = () => {
const energiaTotal = calcularEnergia(Number(vel.value), Number(dur.value));


status.textContent = `Esteira configurada para ${vel.value} km/h, ${inc.value}% de inclinação e ${dur.value} min.`;
energia.textContent = `Energia gerada: ${energiaTotal.toFixed(1)} Wh`;


barra.style.width = Math.min(energiaTotal, 100) + "%";
bateria.style.width = Math.min(energiaTotal, 100) + "%";

};
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("closed");
});