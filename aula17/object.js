const produto={
    nome: 'Caneta',
    qtd:10,
    comprar: function(n){
        console.log(this)
       if(n>this.qtd){
        return'Quantidade insuficiente'
       }
       
    }
}  