// Array of products, each product is an object with different fieldset
var products = [
	{
		name: "Apple",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: true,
		price: 1.15
	},
	{
		name: "Milk Chocolate",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 2.49
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 3.49
	},
	{
		name: "Almond Milk",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: false,
		organic: false,
		price: 3.79
	},
	{
		name: "Milk",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: true,
		price: 4.69
	},
	{
		name: "Ice Cream",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 4.99
	},
	{
		name: "Pistachio",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: false,
		organic: true,
		price: 5.99
	},
	{
		name: "Cashews",
		vegetarian: true,
		glutenFree: true,
		dairyFree: true,
		nutFree: false,
		organic: true,
		price: 6.99
	},
	{
		name: "Chedder",
		vegetarian: true,
		glutenFree: true,
		dairyFree: false,
		nutFree: true,
		organic: false,
		price: 6.99
	},
	{
		name: "Jamaican Patties",
		vegetarian: false,
		glutenFree: false,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 8.99
	},
	{
		name: "Chicken Nuggets",
		vegetarian: false,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: false,
		price: 11.49
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		dairyFree: true,
		nutFree: true,
		organic: true,
		price: 24.00
	}
];
	


// given restrictions provided, make a reduced list of products
// items already sorted by price, to implement this properly would have to create 2d array or array of objects

function restrictListProducts(prods, restriction, organicSelect) {
	let product_names = [];
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		
		// organic preference
		if(organicSelect == "organicYes"){
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].organic == true) ){
				//product_names.push(prods[i].name + " $" + prods[i].price);
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "LactoseIntolerant") && (prods[i].dairyFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "NutAllergy") && (prods[i].nutFree == true) && (prods[i].organic == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None") {
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
		} 
		// non organic preference
		else if (organicSelect == "organicNo") {
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "LactoseIntolerant") && (prods[i].dairyFree == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "NutAllergy") && (prods[i].nutFree == true) && (prods[i].organic == false)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
		} 
		// no organic preference
		else if (organicSelect == "organicNone") {
			if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "LactoseIntolerant") && (prods[i].dairyFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if ((restriction == "NutAllergy") && (prods[i].nutFree == true)){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
			else if (restriction == "None"){
				product_names.push(prods[i].name);
				product_prices.push(prods[i].price);
			}
		}
		
	}
	return [product_names, product_prices];
}


//function sortHightoLow(){} not implemented

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice.toFixed(2);
}