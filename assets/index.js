import { myAPIkey } from "./environment.js";
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': myAPIkey,
		'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
	}
};
const myURL = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query='

	// selecting DOM elements

	const form = document.querySelector('#search-recipe')
	const submit = document.querySelector('#submit')
	const recipeTitle = document.querySelector('.recipeTitle')
	const image = document.querySelector('#image-holder')
	const ingredients = document.querySelector('#ingredients')
	const instructions = document.querySelector('#instructions')
	const servings = document.querySelector('#servings')
	const like = document.querySelector('#like')
	const dislike = document.querySelector('#dislike')
	const add = document.querySelector('#add')
	const ADD = document.querySelector('#ADD')
	const inputImage = document.querySelector('#inputImage')
	const toBeRemoved = document.querySelector('#toBeRemoved')
	const src = toBeRemoved.getAttribute('src')
	var uploadedImage = ""


	let searchItem = ''

//Recipe search function

form.addEventListener('submit', (event) => {
e.preventDefault()
searchItem = event.target.querySelector('#search').value;
searchRecipe()
displayRecipe()

})


function searchRecipe(){
	fetch(myURL+searchItem, options)
	.then(response => response.json())
	.then(data => {
		data.forEach(
			function(recipe){
				console.log(recipe)
				let recipeDetails = new selectItems(recipe.title, recipe.ingredients, recipe.instructions, recipe.servings)
				recipeTitle.innerText = recipe.title
				ingredients.innerText = recipe.ingredients
				instructions.innerText = recipe.instructions
				servings.innerText = `Servings:${recipe.servings}`
			}
		)
	})
	.catch(err => console.error(err))	
}


function selectItems (title, ingredients, instructions, servings){
	this.title = title;
	this.ingredients = ingredients;
	this.instructions = instructions;
	this.servings = servings;
}
