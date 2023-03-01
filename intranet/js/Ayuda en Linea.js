function envio(){
    const mensaje = document.getElementById('mensaje').value;
    if (mensaje==='' || mensaje===0){
        alert("No colocó mensaje");
        mensaje.focus();
        return 0;
    }else{
        alert("Mensaje enviado");
        document.getElementById('mensaje').value = '';
    }
}