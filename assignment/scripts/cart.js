console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// gobal variable set to basket
let basket = [];

// - Create a function called `addItem`. It should:
//  - take an input parameter for a string `item`
//  - add the new item to the global array `basket`. 
//  - return `true` indicating the item was added
console.log('--------In addItem function---------');

function addItem(item) {
    //add item into basket array and return true
    basket.push(item);
    return true;
}//end add Item
console.log('add salt in basket', addItem('salt'));
//add more items in basket
addItem('water');
addItem('candy');

console.log('--------In listItems function---------');

//  - Create a function called `listItems`. It should:
//  - loop over the items in the `basket` array
//  - console.log each individual item on a new line
function listItems() {
    for (i = 0; i < basket.length; i++) {
        console.log('Item in basket ', basket[i]);
    }//end for
}//end listItem

//call listItem
listItems();


