 
 let num= document.querySelector('input#txtnum')
 let lista= document.querySelector('select#flista')
let finum= document.querySelector('div#res')
valor =[]
 
 
 function Adicionar(){
    let n = Number(num.value)

    if (n < 1 || n > 100 || valor.includes(n)) {
        window.alert('Número inválido ou já encontrado na lista!')
    } else {
        valor.push(n)
    }
    let item = document.createElement('option')
        item.innerHTML = `Valor ${n} adicionado`
        lista.appendChild(item)

        finum.innerHTML = ''
}
  
    function Finalizar(){
        if(valor.length==0){
            window.alert('Adicione valores antes de finalizar !')
        }
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0


for (let pos in valor) {
    soma += valor[pos]

    if (valor[pos] > maior)
        maior = valor[pos]

    if (valor[pos] < menor)
        menor = valor[pos]
}
let media = soma / total
finum.innerHTML = ''
finum.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
finum.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
finum.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
finum.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
finum.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`


    }

