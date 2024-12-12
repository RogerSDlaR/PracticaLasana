const Tiempo_Cocina = 40;   

function CalcularTiempoRestante(TiempoHorno) {  
    return Tiempo_Cocina - TiempoHorno;  
}  

function CalcularTiempoPreparacion(Capas) {  
    return Capas * 2;   
}  

function CalcularTiempoTotal(TiempoHorno, TiempoPreparacion) {  
    return TiempoHorno + TiempoPreparacion;  
}  

function ValidarEntrada(Capas, TiempoHorno) {  
    if (Capas <= 0 || TiempoHorno < 0 || Capas === "" || TiempoHorno === "") {   
        alert("Por favor, ingresa valores válidos. Los campos no pueden estar vacíos o ser negativos.");  
        return false;  
    }  
    return true;  
}  

document.getElementById("BtnCalcular").addEventListener("click", function () {  
    const Capas = document.getElementById("Capas").value;  
    const TiempoHorno = document.getElementById("TiempoHorno").value;  

    if (!ValidarEntrada(Capas, TiempoHorno)) {  
        return;  
    }  

    const TiempoRestante = CalcularTiempoRestante(Number(TiempoHorno));  
    const TiempoPreparacion = CalcularTiempoPreparacion(Number(Capas));  
    const TiempoTotal = CalcularTiempoTotal(Number(TiempoHorno), TiempoPreparacion);  

    document.getElementById("TiempoRestante").textContent = `Tiempo restante en el horno: ${TiempoRestante} minutos`;  
    document.getElementById("TiempoPreparacion").textContent = `Tiempo total de preparación: ${TiempoPreparacion} minutos`;  
    document.getElementById("TiempoTotal").textContent = `Tiempo total de trabajo: ${TiempoTotal} minutos`;  
});