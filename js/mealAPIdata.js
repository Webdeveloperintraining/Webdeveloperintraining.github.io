async function fetchData() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  // Do something with the data
  console.log(data);
}

fetchData();

const urlIngredients ='https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const urlRandomMeals='https://www.themealdb.com/api/json/v1/1/random.php';
