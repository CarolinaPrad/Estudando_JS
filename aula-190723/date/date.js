//Date -> Data é objeto que facilita o uso de data com JavaScript
let data = new Date(); // Criar um objeto com base no tempo do sistema
console.log(data.toLocaleDateString()); // Mostra a data no formato local
console.log(data.toLocaleTimeString()); // Mostra a hora no formato local
let agora = Date.now(); // o data/hora atual em milisegundos
let dezMin = 1000 * 60 * 10;
let daquiAPouco = agora + dezMin;
console.log(new Date (agora));
console.log(new Date(daquiAPouco));

console.log(new Date(2021, 12-1, 7));

const btn = document.querySelector("#enviar")
btn.addEventListener("click", () => {
    const dataCmpo = document.querySelector("#dataNasc");
    const valor = dataCampo.value;
    const vetorData
    
});