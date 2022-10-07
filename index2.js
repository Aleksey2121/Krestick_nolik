// // const pip = [
// //     { id: 1, name: 'aleks', age: 25 },
// //     { id: 2, name: 'ddd', age: 35 },
// //     { id: 3, name: 'ssss', age: 55 },
// //     { id: 4, name: 'ghhhhhh', age: 65 },
// // ]

// // for(let i=0;i<pip.length;i++){
// //     console.log(pip[i])
// // }

// // for (let p of pip) {
// //     console.log(p)
// // }

// // pip.forEach(function(person,index,pipR){
// //     console.log(pipR)

// // })

// // pip.forEach(peop=>console.log(peop.name))

// // const rr=pip.map(person=>{
// //     return `Привет ${person.name} тебе исполнилось - ${person.age}`
// // })

// // console.log(rr);

// // const a=pip.filter(per=>{
// //     return per.age<=55
// // })



// // const tt=pip.reduce((tot,person)=>{return tot+person.age},120)
// // console.log(tt)




// // const tt=pip.find(per=>per.age===25)
// // // console.log(tt)

// // function aa(a,b){
// //     return [
// //         a+b,
// //        undefined,
// //         a*b,
// //         a/b
// //     ]
// // }

// // // let [z,x='Вычитания нет',c,...v]=aa(2,4)
// // // console.log (`${z}, ${x},${c},${v}`)

// // let tt={
// //     name:"sdasd",
// //     age:25,
// //     ddd:{
// //         n:"sdasd",
// //         z:22
// //     }
// // }

// // function aa({name,age:s}){
// //     console.log(name + ' ' + s);
// // }

// // aa(tt);




// /////////////////////////////////////////////ОТРИСОВКА ЭЛЕМЕНТОВ

// //.....................создать документ с классом primer
// const div =document.createElement('div');
// div.classList.add('primer')
// let body=document.querySelector('body')
// body.appendChild(div)

// //.........................создать H1
// let h1=document.createElement('h1')
// h1.textContent="Привет мир джаваскрипт"
// console.log(h1)

// //добавить перед DIV

// div.insertAdjacentElement('beforebegin',h1) //вставить элемент

// ////отрисовать ul
// const ul = `
// <ul>один</ul>
// <ul>два</ul>
// <ul>три</ul>
// `

// div.innerHTML=ul;

// ///////Изображение

// let img= document.createElement('img')
// img.src='https://images.payhip.com/o_1bdv3pgs8d4u10pp1su91ag91c847.jpeg'
// img.width=240;
// img.classList.add('super');
// img.alt='СУПЕРМЕН'
// div.appendChild(img);

// /////////вставить не элемент а целый блок при помощи массива
// const ell=`
// <div class='pDiv'>
// <p>Параграф 1</p>
// <p>Параграф 2</p>
// </div>
// `

// const ullist=div.querySelector('ul');
// ullist.insertAdjacentHTML('beforebegin',ell) //вставить кусок разметки

// let pDiv=document.querySelector('.pDiv')
// pDiv.children[1].classList.add('text');
// pDiv.firstChild.remove();











// /////////////////////////////////////////////////////////////

// /////////Создать DIV  и вывести при помощи функции

// let divAvto=document.createElement('div')
// divAvto.classList.add('Avto');


// const mas=[
//     {name:'BMW', y:2020},
//     {name:'Lexus', y:2021},
//     {name:'Lada', y:1996},
// ]




// let fun=function(a,b){
//     return `
//                 <div class='Car'>
//                 <h2> BRAND- ${a}</h2>
//                 <p> Авто возврасат - ${b}</p>
//                 <button type='button' class='btn'>удалить</button>
//                 </div>
//     `
// }


// let myMas=mas.map(function(a){
//     return fun(a.name,a.y);
// }).join('')

// divAvto.innerHTML=myMas;

// div.insertAdjacentElement('beforebegin',divAvto)
// //////////////////////////////////////////////////////////

// /////////////////////Удаление элемента по ссылке
// const but=document.querySelectorAll('.btn')

// function udaltKnopk(e){
//    let cur=e.currentTarget;
//    cur.closest('.Avto').remove();
//    console.log(cur.parentElement)
// }
// but.forEach(el=>el.addEventListener('click',udaltKnopk))
// console.log(divAvto)   


// ////////////////////////////////////////////////////////////////////////








// ///////////////////////////событие всплытие и погружение

// // const btn=document.querySelectorAll('.btn');

// // btn.forEach(el=>{
// //     el.addEventListener('click', message);
// // })

// // function message(event){
// //   console.log( event.currentTarget.textContent + "Сам элемент где событие")

// // console.log(event.target.textContent + "Родительский обьект по которому событие - ")
// // event.stopPropagation()
// // }   
// //  console.log(btn)



////////////////////////////////////////    ЗАМЫКАНИЕ

// function vnesh(){
//     let vn="Я - Внешняя функция"

//     function vnutr(){
//         let vnut="Я - внутренняя функция"
//         console.log(vn)
//         console.log(vnut)
//     }
//     return vnutr;
// }

// let f=vnesh();
// f()

// --------------------------------------------------------------


// function igr(name){
// let count=0;
// return function(){
//     count++;
//     return (`${name} баллов - ${count}`)
// }
// }

// let ig1=igr("Андрей")
// let ig2=igr("Григорий")
