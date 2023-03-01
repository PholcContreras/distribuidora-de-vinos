function Registrar(){
    var form1 = document.Datos1;
    var r = form1.ruc.value;
    var nom = form1.nombres.value;
    var ape = form1.apellidos.value;
    var dir = form1.direccion.value;
    var em = form1.email.value;
    var pass = form1.contraseña.value;
    if( r ==="" && nom ==="" && ape ==="" && dir ==="" && em ==="" && pass === ""){
        alert("Llenar todos los campos");
    }else if(r !=="" && nom ==="" && ape ==="" && dir ==="" && em ==="" && pass === ""){
        alert("Llenar los campos");
    }else if(r !=="" && nom !=="" && ape ==="" && dir ==="" && em ==="" && pass ===""){
        alert("Llenar los campos");
    }else if(r !=="" && nom !=="" && ape !=="" && dir ==="" && em ==="" && pass ===""){
        alert("Llenar los campos");
    }else if(r !=="" && nom !=="" && ape !=="" && dir !=="" && em ==="" && pass ===""){
        alert("Llenar los campos");
    }else if(r !=="" && nom !=="" && ape !=="" && dir !=="" && em !=="" && pass ===""){
        alert("Debe ingresar una contraseña");
    }else if(r ==="" && nom !=="" && ape !=="" && dir !=="" && em !=="" && pass !==""){
        alert("Debe ingresar un R.U.C.");
    }else{
        alert("Ya te encuentras en el sistema");
        location.href="InicioSesion.html";
    }
}