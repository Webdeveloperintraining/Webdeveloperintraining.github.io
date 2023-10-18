async function randomMealsData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  let data = await response.json();
  let meal = data.meals[0];
  displayRandomRecipe(meal);
}
randomMealsData()
randomMealsData()
randomMealsData()

function displayRandomRecipe(data){
  let randomSection = document.querySelector('#random-recipes');

  let ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (data["strIngredient" + i]) {
      ingredients.push(
        `${data[`strIngredient${i}`]} - ${data[`strMeasure${i}`]}`
      );
    } else {
      break;
    }
  }
  let appendData = `<div class="recipes">
                      <h3>${data.strMeal}</h3>
                      <img src="${data.strMealThumb}" alt="${data.strMeal}">
                      <p>Ingredients:</p>
                      <ul>
                        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
                      </ul>
                      <p>Preparation:</p>
                      <p>${data.strInstructions}</p>
                    </div>`
  randomSection.innerHTML += appendData;
}

/*
const search = document.getElementById('searchMeal');


const recipeTemplate = document.querySelector('[ingredient-recipe]');
async function randomIngredientMealData() {
  //const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${}`);
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=C`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  let data = await response.json();
  let meal = data.meals;

  const title= recipeTemplate.content.children[0];
  
  if (meal === null) {
    title.innerHTML = "Sorry :C, I didn't find a recipe with that ingredient"
    recipeTemplate.append(title);
  }
}
  console.log(meal);

  
  title.textContent = `Here's a recipe that includes ${} :`;
  data.strMeal
  let header = ; 
  let =
  let =

randomIngredientMealData();

search.addEventListener("click",randomIngredientMealData())
search.addEventListener("keyup",randomIngredientMealData())

const urlIngredients ='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const urlRandomMeals='https://www.themealdb.com/api/json/v1/1/random.php';

 Meals by ingredient = https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
Meal by name https://www.themealdb.com/api/json/v1/1/search.php?s=Chick-Fil-A%20Sandwich
*/