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
                      <img class="bookmark" src="images/bookmark_icon.png" loading="lazy">
                      <h3>${data.strMeal}</h3>
                      <img src="${data.strMealThumb}" alt="${data.strMeal}" loading="lazy">
                      <p>Ingredients:</p>
                      <ul>
                        ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
                      </ul>
                      <p>Preparation:</p>
                      <p>${data.strInstructions}</p>
                      <button type="button" class="sbtn toogle" onclick="getMeal('${data.strMeal}')"> Save Meal</button>
                    </div>`
  randomSection.innerHTML += appendData;
}