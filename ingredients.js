const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let index = 0;
while(index < ingredients.length){
  console.log(ingredients[index]);
  index++;
}

// Write a for loop that prints out the contents of ingredients:
for(let idx=0 ; idx<ingredients.length ; idx++){
  console.log(ingredients[idx]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let idx=ingredients.length-1 ; idx>=0 ; idx--){
  console.log(ingredients[idx]);
}