
function Contar(){
    let inicio = Number(document.getElementById("txtinicio").value)
    let fim = Number(document.getElementById("txtfim").value)
    let passo = Number(document.getElementById("txtpasso").value)

    let msg = document.getElementById("msg")
    msg.innerHTML = "Contando:";
     if (inicio==0|| fim==0||passo <=0)
        {
           window.alert("[ERRO] Faltam dados!");
        }else{
          msg.innerHTML="Contando: <br>";
          let i= inicio;
          let f= fim;
          let p=passo;
       if (p<=0){
            window.alert("Passo inválido! Considerando PASSO 1");
            p=1;
            if (i>f){
                 for(let c=i; c<=f; c+=p){
            msg.innerHTML += `${c} \u{1F449}`;
          }
          }else{
            for(let c=i; c>=f; c-=p){
            msg.innerHTML += `${c} \u{1F449}`;
          }
         
          msg.innerHTML += `\u{1F3C1}`;
            }
          }
        }
}