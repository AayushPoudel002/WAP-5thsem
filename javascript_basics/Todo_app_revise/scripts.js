const FormInput = document.getElementById('container_add_note')
const NoteInput = document.getElementById('txt_add_note')
const notes = document.querySelector('.notes')


let counter = parseInt(localStorage.getItem('counter')) || 0


//Retrive values from local storge to UI after refresh
for(j=1;j<=counter;j++)
{
    let key = `user${j}`
    let value = localStorage.getItem(key)

    if(value)
    {
        addNoteToDOM(key,value)
        const isChecked = localStorage.getItem(`user${j}_checked`) === 'true';
        const container = notes.querySelector(`[data-key="user${j}"]`);
        const checkbox = container.querySelector('.checkbox');
        checkbox.checked = isChecked;
    }
}

notes.addEventListener('click',function(e){ //Functional Delete button
    if(e.target.classList.contains('btn_delete'))
    {
        console.log('delete clicked')
        
        const container = e.target.parentElement
        key = container.getAttribute('data-key')
        localStorage.removeItem(key)
        container.remove()
    }
})

notes.addEventListener('change',function(e){ //Function checkbox
    if(e.target.classList.contains('checkbox'))
    {
        const container = e.target.parentElement
        let key = container.getAttribute('data-key')

        localStorage.setItem(`${key}_checked`,e.target.checked)
    }
})

FormInput.addEventListener('submit',function(e){
    e.preventDefault()

    ++counter 
    console.log(counter)
    localStorage.setItem('counter',counter)

    localStorage.setItem(`user${counter}`,NoteInput.value)

    let key = `user${counter}`
    let value = NoteInput.value
    addNoteToDOM(key,value)
    NoteInput.value = ''
})




function addNoteToDOM(key, noteName) {
    notes.insertAdjacentHTML('beforeend', `
            <div class="container_new_note" data-key="${key}">
            <input class="checkbox" type="checkbox">  

            <div class="note_name_display">${noteName}</div>

            <button class="btn_delete">Delete</button>
            </div>

            
    `);
}