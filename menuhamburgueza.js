const hamburgeza = document.getElementById("hamburgeza");
const lista = document.getElementById("listabotones2")
const cierre = document.getElementById("cierre")

hamburgeza.addEventListener('click', ()=>{
    hamburgeza.style.display = 'none';
    cierre.style.display = 'flex';
    lista.style.display ='flex';
})

cierre.addEventListener('click', ()=>{
    lista.style.display ='none';
    cierre.style.display = 'none';
    hamburgeza.style.display = 'flex';
})