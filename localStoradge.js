const addItemForm = document.querySelector('.add-items-forms')
const itemList = document.querySelector('.items-lists')
const items = JSON.parse(localStorage.getItem('item')) || [];

console.log(items)

function additem(event) {
    event.preventDefault()
    const text = (event.target.item.value)
    const item = {
        text: text,
        check: false
    }

    items.push(item)
    localStorage.setItem('item',JSON.stringify(items))
    this.reset()

    dispalayitem(items, itemList)

}

function dispalayitem(ingr, ingrlist) {
    ingrlist.innerHTML = ingr.map((el, index) => {
        return `
        <li>
        <input type="checkbox" id=${index}"item" data-index="${index}" ${el.checked ? 'checked' : ''} />
        <label for='item${index}'> ${el.text}</label></li>
        `
    }).join('')
    console.log(ingr, ingrlist)
}

addItemForm.addEventListener('submit', additem);

itemList.addEventListener('click', togleclick);

function togleclick(event) {

    if (!event.target.matches('input')) return;

    const element = event.target.dataset.index
    items[element].checked = !items[element].checked //знак чекбокса на противоположное
    localStorage.setItem('item',JSON.stringify(items))
    dispalayitem(items, itemList)
    console.log(event.target.dataset)
}

 dispalayitem(items, itemList);