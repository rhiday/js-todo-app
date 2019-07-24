function inputItem() {

    document.querySelector('.clear').addEventListener('click', clearAll);

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);

        const inputItem = document.querySelector('input');

        if(inputItem.value != '') {
            addItem(inputItem.value);
        }
    });
}

function addItem(item) {
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');
    li.innerHTML = `<input type="checkbox" /><label>${item}</label>`;
    ul.appendChild(li);
    document.querySelector('.task-list').style.display = 'block';
}

function clearAll() {
    document.querySelector('ul').innerHTML = '';
}

inputItem();