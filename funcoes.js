const moeda={
  0: {nome: "DÓLAR", valor: 5.8},
  1: {nome: "REAL", valor: 1},
  2: {nome: "EURO", valor: 6.6},
  3: {nome: "LIBRA", valor: 7.8},
  4: {nome:"IENE",valor: 0.05}
}
function converterMoeda(){
  let montante = document.getElementById("montante"); 
  let valorConvertido=document.getElementById("resultado");
  valorConvertido.value=montante.value*(moeda[(document.getElementById("seletor1").value)].valor/moeda[(document.getElementById("seletor2").value)].valor)
}
function trocaMoeda(){
let seletor1= document.getElementById("seletor1");
let seletor2=document.getElementById("seletor2");
let aux=seletor1.value;
seletor1.value=seletor2.value;
seletor2.value=aux;
converterMoeda();
}