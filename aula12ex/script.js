
function carregar(){
var msg = document.getElementById('msg') 
var foto = document.getElementById('foto')
var data = new Date()
var hora= data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >=0 && hora <12){
    foto.innerHTML ='<img src="manha.png" alt="manha" width="240px;" height="200px;">'
    document.body.style.background='#aa956f'
} else if(hora >=12 && hora <=18){
    foto.innerHTML = '<img src="tarde.png" alt="tarde" width="240px;" height="200px;">'
     document.body.style.background='#a1705e'
} else{
    foto.innerHTML = '<img src="noite.png" alt="noite" width="240px;" height="200px;">'
     document.body.style.background='#1c2424'
}
}