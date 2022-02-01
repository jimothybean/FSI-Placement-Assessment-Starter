// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "William Anderson" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0;
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Ginger Bread event listener "+"
document.getElementById('add-gb').addEventListener('click', function() {
    ++gb;
    document.getElementById('qty-gb').innerHTML = gb;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

//Ginger Bread event listener "-"
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb>0){
        --gb;
        document.getElementById('qty-gb').innerHTML = gb;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }
})

//Chocolate chip event listener "+"
document.getElementById('add-cc').addEventListener('click', function() {
    ++cc;
    document.getElementById('qty-cc').innerHTML = cc;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

//Chocolate chip event listener "-"
document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc>0){
        --cc;
        document.getElementById('qty-cc').innerHTML = cc;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }
})

//Sugar Sprinkle event listener "+"
document.getElementById('add-sugar').addEventListener('click', function() {
    ++sugar;
    document.getElementById('qty-sugar').innerHTML = sugar;
    ++total
    document.getElementById('qty-total').innerHTML = total;
})

//Sugar Sprinkle event listener "-"
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar>0){
        --sugar;
        document.getElementById('qty-sugar').innerHTML = sugar;
        --total
        document.getElementById('qty-total').innerHTML = total;
    }
})