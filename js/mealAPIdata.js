async function randomMealsData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  let data = await response.json();
  let meal = data.meals[0];
  //console.log(meal);
  displayrandomRecipe(meal);
}
randomMealsData()
randomMealsData()
randomMealsData()

function displayrandomRecipe(data){
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
function findRandomRecipeIngredient(data){
  let ingredientSection = document.getElementById('ingredient-recipe');
  
  
}*/

//const searchBtn = document.querySelector('.btn');

//searchBtn.addEventListener("click")
//searchBtn.addEventListener("keyup")


//const urlIngredients ='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

//const urlRandomMeals='https://www.themealdb.com/api/json/v1/1/random.php';


// Meals by ingredient = https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
// Meal by name https://www.themealdb.com/api/json/v1/1/search.php?s=Chick-Fil-A%20Sandwich