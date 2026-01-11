/*
let numero=[5,7,8,4,2]
numero.push(9)
numero.sort()
document.write(numero)
document.write(`O vetor tem ${numero.length} elementos`)
document.write(`<br>O valor armazenado no índice 3 é ${numero[3]}`)
*/


/*
let valores=[9,3,5,2,8]
document.write(valores)

for(let pos=0; pos<valores.length; pos++){
    document.write(` <br> o valor na posição ${pos} é ${valores[pos]}`)
}
*/
let valores=[9,3,5,2,8]
for(let pos in valores ){
    document.write(` <br> o valor na posição ${pos} é ${valores[pos]}`)
}