const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

// Loop through each item to attach drag events
items.forEach(item => {
    // When dragging starts, add the dragging class after a short delay
    item.addEventListener("dragstart", () => {
        setTimeout(() => item.classList.add("dragging"), 0);
    });

    // Remove dragging class when dragging ends
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

// Function to handle drag and drop sorting
const initSortableList = (e) => {
    e.preventDefault();
    
    const draggingItem = document.querySelector(".dragging");
    
    // Get all items except the one being dragged, and convert the NodeList to an array
    const siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];

    // Find the sibling after which the dragging item should be placed
    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    // Insert the dragging item before the found sibling, or append at the end if no sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}

// Attach dragover and dragenter events to the sortable list
sortableList.addEventListener("dragover", initSortableList);
sortableList.addEventListener("dragenter", (e) => e.preventDefault());
