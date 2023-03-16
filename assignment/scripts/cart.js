console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// gobal variable 
let basket = [];
const maxItems = 5;

// - Create a function called `addItem`. It should:
//  - take an input parameter for a string `item`
//  - add the new item to the global array `basket`. 
//  - return `true` indicating the item was added

//-----EXTRA------
// 3. Update the required `addItem` function to:
//  - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//  - If an item was added to the array, return `true`
//  - If there was no room and the item could not be added return `false`

console.log('--------In addItem function---------');

function addItem(item) {
    //add item into basket array and return true
    if (basket.length < maxItems) {
        basket.push(item);
        return true;
    }
    else {
        console.log('item cannot be added', false);
    }
}//end add Item
//add more items in basket
addItem('water');
addItem('candy');
addItem('salt');

//test output 
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

//test if more then five items can be added to basket
addItem('grapes');

//check if basket is full
console.log('is basket full', isFull(basket));
addItem('orange');

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

console.log('--------In empty function---------');

// - Create a function called `empty`. It should:
//  - reset the `basket` to an empty array

function empty() {
    basket = []; //reset to empty array
}
//test the empty function
console.log(`Basket is ${basket}`);
empty();
console.log(`Basket is ${basket}`);

console.log('--------In isFull function---------');

// 2. Create a function called isFull(). It should:
//  - return `false` if the basket contains *less* than max number of items
//  - return `true` otherwise (equal or more than maxItems)

function isFull(array) {
    if (array.length < maxItems) { //check if basket is less then max items
        return false;
    }// end if
    else {
        return true;
    }
}// end isFull

console.log('is basket full', isFull(basket));

//add items and list basket
addItem('Banana');
addItem('soap');
console.log(`Basket is ${basket}`);


