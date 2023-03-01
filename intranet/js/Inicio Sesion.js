function Ingresar(){
    var form = document.Datos;
    var r = form.ruc.value;
    var pass = form.contraseña.value; 
    
    if(r === "" && pass === ""){
        alert("Llenar los campos");
    }else if(r !== "" && pass === ""){
        alert("Ingresar la contraseña");
    }else if(r === "" && pass !== ""){
        alert("Ingresar el usuario");
    }else{
        alert("Bienvenido a Viña Tintos");
        location.href="Pedido.html";
    }
}


