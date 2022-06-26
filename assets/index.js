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

form.addEventListener('submit', (e) => {
e.preventDefault()
searchItem = e.target.querySelector('#search').value;
searchRecipe()
displayRecipe()

})

