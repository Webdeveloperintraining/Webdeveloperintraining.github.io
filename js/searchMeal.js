let ingredient = document.getElementById('ingredient');
const searchButton = document.querySelector('.sbtn');
const ingredientRecipeSection = document.getElementById('ingredient-recipe');

async function getRandomIngredientMeal() {
  let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.value}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  let data = await response.json();
  let meal = data.meals;
  if(meal !== null && ingredient.value !== ''){
    ingredientRecipeSection.innerHTML = '';
    let randomNumber = getRandomNumber(0, meal.length);
    getRecipeData(meal[randomNumber].strMeal);
  }if(meal === null || ingredient.value === ''){
    let message = "<h3>Sorry, I didn't find any recipe with that ingredient. </h3>";
    ingredientRecipeSection.innerHTML = message;
  }
}

function getRandomNumber(min, max) { 
  return Math.round(Math.random() * (max - min));
}

async function getRecipeData(mealName){
  let recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
  if (!recipe.ok) {
    throw new Error('Network response was not ok');
  }
  let data = await recipe.json();
  let meal = data.meals[0];
  displayRecipe(meal)
}

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
}


ingredient.addEventListener("keypress",(e) => {if (e.key === 'Enter') {getRandomIngredientMeal()}});

searchButton.addEventListener("click",getRandomIngredientMeal);