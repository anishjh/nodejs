const prompt = require('prompt-sync')()
const menu = require('./menu.json');

var fs = require('fs');
var totalPrice = 0.00;
var invalid = true;
var order = [];
let name = 'Bon';




while(invalid){
    //console.log(menu);
    Object.entries(menu).forEach(([id, Dish, Price]) => {
        console.log(`ID: ${Dish.id} - ${Dish.Dish} - €${Dish.Price}`);
    });
 


    var userInput = prompt("Type the number you want to order, if done ordering press 'n': ");
    if(userInput.valueOf() == 'n'){
       
        invalid = false
       
    }else if(userInput < menu.length && userInput >= 0){
        totalPrice += menu[userInput].Price;
        order += menu[userInput].Dish + "\n"
    }else{
        console.log("This is not a valid input.");
    }
    
    
    
}
numb = totalPrice.toFixed(2);

fs.writeFile('./data.txt',
   `Name: ${name}\n\nOrder:\n\n${order}\nTotalprice: €${numb }`
,()=>{
  console.log('Successfully saved');
})
console.log(order);

console.log(numb);


