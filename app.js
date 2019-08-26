function loadEvent() {
    document.querySelector('form').addEventListener('submit', submit);
    document.querySelector('.clear').addEventListener('click', clearAll);
}

function submit(e) {
    e.preventDefault();

    const inputItem = document.querySelector('.input-item');

    if(inputItem.value != '') {
        addItem(inputItem.value);
    }
}

function addItem(item) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `<span class="delete">x</span><input type="checkbox"><label>${item}</label`;
    ul.appendChild(li);
    document.querySelector('.task-list').style.display = 'block';

    document.querySelector('ul').addEventListener('click', taskAction);
}

function taskAction(e) {
    if(e.target.className == 'delete') {
        console.log(e);
        let remove = e.target.parentNode;
        let parentNode = remove.parentNode;

        parentNode.removeChild(remove);
    }

    else {
        const task = e.target.nextSibling;
        
        if(e.target.checked) {  
            task.style.textDecoration = 'line-through';
            task.style.color = '#ff6161';
        }

        else {
            task.style.textDecoration = 'none';
            task.style.color = '#0f222d';
        }
    }
}

function clearAll(){
    document.querySelector('ul').innerHTML = '';
}

loadEvent();