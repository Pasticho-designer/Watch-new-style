window.addEventListener('load', Tiempo);

function Tiempo() {
    let date = new Date();
    let dia = date.getDay();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let horario = hora >= 12 ? 'PM' : 'AM';
    let dias = ["SUN","MON","TUE","WEN","THU","FRI","SAT"];

    hora = hora <= 10 ? '0' + hora : hora;
    minutos = minutos <= 10 ? '0' + minutos : minutos;
    
    document.getElementById("dias").innerHTML = dias[dia];
    document.getElementById("horas").innerHTML = hora;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("horario").innerHTML = horario;

    setTimeout(Tiempo, 200);

}