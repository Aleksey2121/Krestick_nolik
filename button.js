const btn=document.querySelectorAll('.btn');

btn.forEach(el=>{
    el.addEventListener('click', message);
})

function message(event){
  console.log( event.currentTarget.textContent + "Сам элемент где событие")

console.log(event.target.textContent + "Родительский обьект по которому событие - ")
event.stopPropagation()
}   
 console.log(btn)