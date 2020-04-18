let list = document.querySelector('ul');
let input = document.querySelector('input');
let btn = document.querySelector('button');

let addListItem = () => {
            // store contents of input in var
            let text = input.value;
            input.value = '';
        
            // create els to create a new list item
            let li = document.createElement('li');
            let span = document.createElement('span');
            let button = document.createElement('button');
        
        
            li.appendChild(span);
            span.textContent = text;
    
            li.appendChild(button);
            button.textContent = 'Delete';     
        
            list.appendChild(li);
    
            button.onclick = function(e) {
                list.removeChild(li);
            }
            input.focus();
}

btn.addEventListener('click', addListItem);