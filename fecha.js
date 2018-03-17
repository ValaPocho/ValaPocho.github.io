var fecha = new Date();
var mes = [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre"]

var irfecha = "Hoy es "+ fecha.getDate() +" de "+ mes[fecha.getMonth()] +" de "+ fecha.getFullYear() +" a las "+ fecha.getHours() +":"+ fecha.getMinutes();

document.write("<p>" + irfecha + "</p>");