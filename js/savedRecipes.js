function getRecipes(){
    JSON.parse(localStorage.getItem('savedRecipes')).forEach ( async element => {
        let recipe = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${element}`);
        if (!recipe.ok) {
          throw new Error('Network response was not ok');
        }
        let data = await recipe.json();
        let meal = data.meals[0];
        savedRecipesDisplay(meal)
    });
  }
getRecipes()

const saveMealSection = document.getElementById('saved-recipes');

function savedRecipesDisplay(meal){
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
  <img class="bookmark" src="images/bookmark_icon.png" loading="lazy">
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