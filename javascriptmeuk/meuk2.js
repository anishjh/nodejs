const prompt = require('prompt-sync')()
const menu = require('./menu.json');

var fs = require('fs');
var totalPrice = 0.00;
var invalid = true;
var order = [];
let name = 'Bon';

while(invalid){
    console.log(menu);

    var userInput = prompt("Type the number you want to order, if done ordering press 'n': ");
    if(userInput.valueOf() == 'n'){
       
        invalid = false
       
    }else if(userInput < menu.length || userInput > 0){
        totalPrice += menu[userInput].Price;
        order += menu[userInput].Dish
    }else{
        console.log("This is not a valid input.");
    }
    
    
    
}

fs.writeFile('./data.txt',
   `Name: ${name}\nOrder: ${order}\nTotalprice: ${totalPrice }`
,()=>{
  console.log('Successfully saved');
})
console.log(order);
console.log(totalPrice);
