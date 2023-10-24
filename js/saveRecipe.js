var savedRecipes = [];

function getMeal(mealName){
  if (!savedRecipes.includes(mealName)) {
    savedRecipes.push(mealName);
    localStorage.savedRecipes = JSON.stringify(savedRecipes);
    savedRecipes = JSON.parse(localStorage.savedRecipes);
    console.log(savedRecipes)
  }
  else{
    alert('This recipe is already in the saved recipes section');
  }
}

function getLocalStorage(key='savedRecipes') {
  return JSON.parse(localStorage.getItem(key));
}