//dependencies
const mongoose = require("mongoose");
const Drinks = require("./drinks.js");
require("dotenv").config();

//seeding

const drinkData =[
    {
    strDrink: 'Afterglow',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg',
    strIngredient1: ["Grenadine","Orange juice", "Pineapple juice"],
    strInstructions: "Mix. Serve over ice.",
},
{
    strDrink: 'Alice Cocktail',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg',
    strIngredient1: ["Grenadine","Orange juice","Pineapple juice","Cream"],
    strInstructions: "Shake well, strain into a large cocktail glass.",
},
{
    strDrink: 'Aloha Fruit punch',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
    strIngredient1: ["Water","Ginger","Guava juice", "Lemon juice", "Pineapple","Sugar", "Pineapple juice"],
    strInstructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
},
{
    strDrink: 'Apello',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg',
    strIngredient1:["Orange juice","Grapefruit juice","Apple juice", "Maraschino cherry"],
    strInstructions: "Stirr. Garnish with maraschino cherry."
},
{
    strDrink: 'Apple Berry Smoothie',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg',
    strIngredient1:["Berries","Apple"],
    strInstructions: "Throw everything into a blender and liquify.",
},
{
    strDrink: 'Apple Karate',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg',
    strIngredient1: ["Apple juice","Carrot"],
    strInstructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
},
{
    strDrink: 'Banana Cantaloupe Smoothie',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg',
    strIngredient1:["Cantaloupe", "Banana"],
    strInstructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
},
{
    strDrink: 'Banana Milk Shake',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg',
    strIngredient1: ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
    strInstructions: "Blend all together in a blender until smooth.",
},
{
    strDrink: 'Banana Strawberry Shake',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg',
    strIngredient1: ["Milk","Orange juice","Sugar syrup","Banana"],
    strInstructions:"Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
},
{
    strDrink: 'Banana Strawberry Shake Daiquiri',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg',
    strIngredient1:["Strawberries","Banana","Apple juice"],
    strInstructions: "Blend all together in a blender until smooth."

},
{
    strDrink: 'Bora Bora',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg',
    strIngredient:["Pineapple juice", "Passion fruit juice","Lemon juice", "Grenadine"],
    strInstructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",

},
{
    strDrink: 'Castillian Hot Chocolate',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg',
    strIngredient1: ["Cocoa powder", "Sugar", "Cornstarch","Water","Milk"],
    strInstructions:"Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
},
{
    strDrink: 'Chocolate Beverage',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg',
    strIngredient1: ["Milk", "Chocolate", "Cinnamon", "Egg"],
    strInstructions: "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
},
{
    strDrink: 'Chocolate Drink',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg',
    strIngredient1: ["Chocolate", "Milk", "Water"],
    strInstructions: "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
},
{
    strDrink: 'Coke and Drops',
    strDrinkThumb:
        'https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg',
    strIngredient1: ["Coca-Cola","Lemon juice"],
    strInstructions: "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
},
]
// Drinks.insertMany(drinkData (error, food) => {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		console.log(food);
// 	}
// 	db.close();
// });


//global configs
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  },
  () => {
    console.log("connection with Mongo is established!");
  }
);

//connect to Mongo
mongoose.connect(
  () => {
    console.log("connection with Mongo is established!");
  }
);

// Connection Error/Success
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is MongoDB not running?"));
db.on("connected", () => console.log("MongoDB connected on: ", mongoURI));
db.on("disconnected", () => console.log("MongoDB disconnected"));

// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
setTimeout(() => {
  db.close();
}, 5000);

module.exports= mongoose;