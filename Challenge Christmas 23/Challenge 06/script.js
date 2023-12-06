let items = document.querySelectorAll(".item");

items.forEach((el) => {
    el.addEventListener("click", function() {
        if (el.classList.contains('item-added')) {
            el.classList.remove('item-added');
        } else {
            el.classList.add('item-added');
        }
    })
})