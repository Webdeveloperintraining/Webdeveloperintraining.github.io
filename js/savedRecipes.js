function getRecipes(){
  if (JSON.parse(localStorage.getItem('savedRecipes'))){
    JSON.parse(localStorage.getItem('savedRecipes')).forEach ( async element => {
        let recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${element}`);
        if (!recipe.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await recipe.json();
        let meal = data.meals[0];
        savedRecipesDisplay(meal)
        
    });
  }}
getRecipes()

const saveMealSection = document.getElementById('saved-recipes');

function savedRecipesDisplay(meal){
  document.querySelector('#saved-recipes h2').remove();
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

let appendData = `<div class="recipes">
  <span class='deleteBtn' onclick="removeRecipe('${meal.strMeal}')">&#10006;</span>
  <h3>${meal.strMeal}</h3>
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}" loading="lazy">
  <p>Ingredients:</p>
  <ul>
    ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
  </ul>
  <p>Preparation:</p>
  <p>${meal.strInstructions}</p>
  </div>`;

saveMealSection.innerHTML += appendData;
}

function removeRecipe(meal){
  let recipes = JSON.parse(localStorage.getItem('savedRecipes'));
  //console.log(recipes);
  let index = recipes.indexOf(meal);
  recipes.splice(index,1);
  localStorage.setItem('savedRecipes', JSON.stringify(recipes));
  location.reload();
}

const removeAll= document.querySelector('.clear');

removeAll.addEventListener('click',() => {
  
  
  let warning = confirm("WARNING \n Are you sure to remove all recipes?"); if (warning){ localStorage.clear(); location.reload();}})
