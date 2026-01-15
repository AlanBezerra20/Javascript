 function Adicionar(){
let num = []
num.push(Number(document.getElementById('txtnum').value))
let select = document.getElementById('fim')
let finum = document.createElement('finum')

if(num < 1 || num >100 || num===0){
    window.alert("Número inválido ! TENTE NOVAMENTE.")
} else{
    finum.text=`Valor ${num}adicionado.`
  
}




}