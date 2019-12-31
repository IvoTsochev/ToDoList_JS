document.body.addEventListener('click', deleteItem);

//deleting the list element
function deleteItem(e) {
    if ( e.target.parentElement.classList.contains('delete-item')) {
        console.log('delete imte');
        e.target.parentElement.parentElement.remove();
    }
}