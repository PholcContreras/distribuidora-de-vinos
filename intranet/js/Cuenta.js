/* global nombre */
function ValidarEntero (valor){
    valor = parselnt (valor);
    if(isNaN (valor)) return "";
    else return valor;
}
function ValidarFormaCuenta(){
    const nombre=document.FormaCuenta1.nombre.value.length;
    // validando el nombre
    if (nombre==='' || nombre===0){
            document.getElementById("error_nombre").innerHTML='<font color=red> **Ingrese el nombre</font>';
            nombre.focus();
         return 0;
    }else{
        document.getElementById("error_nombre").innerHTML='';
    }
    const apellido = document.FormaCuenta1.apellido.value.length;
    // validando el apellido
    if (apellido==='' || apellido===0){
        document.getElementById("error_apellido").innerHTML='<font color=red> **Ingrese el apellido</font>';
            apellido.focus();
            return 0;
    }else{
        document.getElementById("error_apellido").innerHTML='';
    }
    const gmail =document.FormaCuenta1.gmail.value;
    // validando el correo
    if ( gmail.length===0||(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/ ).test(gmail.length)){
        document.getElementById("error_gmail").innerHTML='<font color=red> **Tiene que ingresar un Gmail valido</font>';
            gmail.focus();
            return 0;
    }else{
        document.getElementById("error_gmail").innerHTML='';
    }
    const pais=document.FormaCuenta2.pais.value.length;
    // validando el pais
    if (pais===''|| pais===0){
        document.getElementById("error_pais").innerHTML='<font color=red> **Ingrese un pais</font>';
            pais.focus();
            return 0;
    }else{
        document.getElementById("error_pais").innerHTML='';
    }
    const region=document.FormaCuenta2.region.value.length;
    // validando la region
    if (region==='' || region===0){
        document.getElementById("error_region").innerHTML='<font color=red> **Ingrese una region</font>';
            region.focus();
            return 0;
    }else{
        document.getElementById("error_region").innerHTML='';
    }
    const distrito=document.FormaCuenta2.distrito.value.length;
    // validando el distrito
    if (distrito==='' || distrito===0){
        document.getElementById("error_distrito").innerHTML='<font color=red> **Ingresar un Distrito</font>';
            distrito.focus();
            return 0;
    }else{
        document.getElementById("error_distrito").innerHTML='';
    }
    const direccion=document.FormaCuenta2.direccion.value.length;
    // validando el direccion
    if(direccion==='' || direccion===0){
        document.getElementById("error_direccion").innerHTML='<font color=red> **Ingresar una direccion</font>';
            gmail.focus();
            return 0;
    }else{
        document.getElementById("error_direccion").innerHTML='';
    }
    const tarjeta=document.FormaCuenta3.tarjeta.value.length;
    // validando el tarjeta
    tarjeta.value=tarjeta;
    if (tarjeta==='' || tarjeta===0){
        document.getElementById("error_tarjeta").innerHTML='<font color=red> **Ingresar un número de tarjeta válido</font>';
            tarjeta.focus();
            return 0;
    }else{
        document.getElementById("error_tarjeta").innerHTML='';
    }
    const afiliado=document.FormaCuenta3.afiliado.value.length;
    // validando afiliado
    afiliado.value=afiliado;
    if (afiliado==='' || afiliado===0){
        document.getElementById("error_afiliado").innerHTML='<font color=red> **Ingresar una fecha</font>';
            afiliado.focus();
            return 0;
    }else{
        document.getElementById("error_afiliado").innerHTML='';
    }
    const cvv=document.FormaCuenta3.cvv.value.length;
    // validando el cvv
    afiliado.value=cvv;
    if (cvv==='' || cvv===0){
        document.getElementById("error_cvv").innerHTML='<font color=red> **Ingresar su clave</font>';
            cvv.focus();
            return 0;
    }else{
        document.getElementById("error_cvv").innerHTML='';
    }
    alert("Información guardada");
}