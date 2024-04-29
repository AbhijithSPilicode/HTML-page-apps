const mealsContainer = document.getElementById("mealsContainer");
const searchInput = document.getElementById("searchInput");
const mealDetailsModal = document.getElementById("mealDetailsModal");
const modalTitle = document.getElementById("modalTitle");
const mealImage = document.getElementById("mealImage");
const modalIngredients = document.getElementById("modalIngredients");

async function getMeals(searchTerm) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  const data = await response.json();
  return data.meals;
}   // Fetch meals from API


function displayMeals(meals) {
  mealsContainer.innerHTML = "";
  meals.forEach(meal => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("meal-card");
    mealCard.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
    `;
    mealCard.addEventListener("click", () => openMealDetails(meal.idMeal));
    mealsContainer.appendChild(mealCard);
  });
}   //display meal

// Open meal details modal
async function openMealDetails(mealId) {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
  const data = await response.json();
  const meal = data.meals[0];

  modalTitle.textContent = meal.strMeal;
  mealImage.src = meal.strMealThumb;
  modalIngredients.innerHTML = "";    // Open meal details modal

  // Display ingredients
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    if (ingredient) {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      modalIngredients.appendChild(listItem);
    } else {
      break;
    }
  }

  mealDetailsModal.style.display = "block";
}      // Display ingredients


document.querySelector(".close").addEventListener("click", () => {
  mealDetailsModal.style.display = "none";
});     // Close meal details modal


async function searchMeal() {
  const searchTerm = searchInput.value;
  if (searchTerm.trim()) {
    const meals = await getMeals(searchTerm);
    if (meals) {
      displayMeals(meals);
    } else {
      mealsContainer.innerHTML = "<p>No meals found. Please try another search term.</p>";
    }
  } else {
    mealsContainer.innerHTML = "<p>Please enter a search term.</p>";
  }
}   // Search for meals
