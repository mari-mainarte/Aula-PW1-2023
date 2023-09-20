//function nome da função(){
// conteúdo da função
//}

function criaObjeto(){
   usuario = {
    nome: document.getElementById("frmnome").value,
    idade: document.getElementById("frmidade").value,
    time: document.getElementById("frmtime").value
   }
   console.log(usuario)
}