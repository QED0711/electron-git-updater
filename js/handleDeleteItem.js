
const handleDeleteItem = () => {
    const listItems = [...document.getElementsByClassName("remove-list-item")];

    listItems.forEach(item => {
        item.onclick = (e) => {
            e.target.parentNode.remove();
        }
    })
}

module.exports = handleDeleteItem;