function ValidarFormaCuenta1(){
    const nombre=document.Datos1.nombre.value.length;
    const gmail=document.Datos1.gmail.value.length;
    const comentario=document.Datos1.comentario.value.length;
    if (nombre==='' || nombre===0){
        document.getElementById("error_nombre").innerHTML='<font color=red> **Ingrese el nombre</font>';
        nombre.focus();
        return 0;
    }else{
    document.getElementById("error_nombre").innerHTML='';
    }
    if (gmail===0||(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ ).test(gmail)){
        document.getElementById("error_gmail").innerHTML='<font color=red> **Tiene que ingresar un Gmail valido</font>';
        gmail.focus();
        return 0;
    }else{
        document.getElementById("error_gmail").innerHTML='';
    }
    if((comentario==='' || comentario===0)){
        document.getElementById("error_texto").innerHTML='<font color=red> **Escriba su Reclamo u Problema</font>';
        comentario.focus();
        return 0;
    }else{
        document.getElementById("error_texto").innerHTML='';
    }
    alert("Su reclamo ha sido enviado con exito");
}
