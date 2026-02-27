function GerarTabuada(){
    let txtnum = Number(document.getElementById("txtnum").value)
    let msg = document.getElementById("msg")
    msg.innerHTML= "Calculando... <br>";
if (txtnum==0){
    window.alert("[ERRO] Digite um numero válido!")
}else{
    let num= txtnum;
    num= Number(txtnum);
   
   for( sub=0; sub<=1000; sub++){
    let res = num * sub;
    msg.innerHTML += `${num} x ${sub} = ${res} <br>`;
    
   }
}

}