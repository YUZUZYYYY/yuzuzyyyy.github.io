function filterCategory(filterSelection, filterBy){
    /*filter selection is category
    filter by is thing to match*/
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        if(listItem.dataset[filterSelection] === filterBy){
            listItem.style.display = "flex";
        } else {
            listItem.style.display = "none";
        }
    }
}
/*Create an array from the html collection that have the classname of 'RecipeCardWrapper'*/
/*Show and hide items based on the array*/

function filterAll(){
    let itemsToFilter = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of itemsToFilter){
        listItem.style.display = "flex";
    }
}