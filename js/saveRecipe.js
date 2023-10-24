function getMeal(mealName){
  let savedRecipes = [];
  if (getLocalStorage() === null || !savedRecipes.includes(mealName) && savedRecipes.length < 0){
  savedRecipes.push(mealName);
  localStorage.savedRecipes = JSON.stringify(savedRecipes);
  savedRecipes  = JSON.parse(localStorage.savedRecipes);
  //setLocalStorage('savedRecipes', savedRecipes[savedRecipes.length-1])
  }
  else{
    alert('sOMETHING WENT WRONG');
    //alert('That recipes is already in your Saved recipes scetion');
  }
  console.log(getLocalStorage())
}

function getLocalStorage(key='savedRecipes') {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/*
function displayRecipe(meal){
  //console.log(meal)
  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (meal["strIngredient" + i]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  let appendData = `<h2>Recipe including ${ingredient.value}</h2>
  <div class="recipes">
  <img class="bookmark" src="images/bookmark_icon.png" loading="lazy">
  <h3>${meal.strMeal}</h3>
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" loading="lazy">
  <p>Ingredients:</p>
  <ul>
    ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
  </ul>
  <p>Preparation:</p>
  <p>${meal.strInstructions}</p>
  <button type="button" class="sbtn toogle" onclick="getMeal(${meal.strMeal})"> Save Meal</button>
  </div>`
  ingredientRecipeSection.innerHTML += appendData;
}*/