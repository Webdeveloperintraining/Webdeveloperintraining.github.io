function getMeal(mealName) {
  // Parse any JSON previously stored
  var mealList = JSON.parse(localStorage.getItem('savedRecipes'));
  if(mealList == null) mealList = [];
  if (!mealList.includes(mealName)){
  localStorage.setItem('savedRecipes', JSON.stringify(mealName));
  // Save allEntries back to local storage
  mealList.push(mealName);
  localStorage.setItem("savedRecipes", JSON.stringify(mealList));
  alert(`The ${mealName} recipe was added to the saved recipes section.`);
  }else{alert('This recipe is already in the saved recipes section.');}
};
//Guide
/*https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage*/