
const mongoose = require("./connection");
const Drinks = require ('../models/drinks.js');
// //create
// app.get('/seed', async (req,res) => {
//   try {
//     const newData = Drinks.create(drinks);
//     console.log(newData)
//   } catch(err) {
//     console.log(err)
//   }
// })


const drinks = 
  [
    {
      Drink: "Afterglow",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
      Ingredients: ["Grenadine", "Orange juice", "Pineapple juice"],
      Instructions: "Mix. Serve over ice.",
    },
    {
      Drink: "Alice Cocktail",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
      Ingredients: ["Grenadine", "Orange juice", "Pineapple juice", "Cream"],
      Instructions: "Shake well, strain into a large cocktail glass.",
    },
    {
      Drink: "Aloha Fruit punch",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
      Ingredients: ["Water","Ginger","Guava juice","Lemon juice","Pineapple","Sugar","Pineapple juice"],
      Instructions:"Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
    },
    {
      Drink: "Apello",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
      Ingredients:["Orange juice","Grapefruit juice","Apple juice", "Maraschino cherry"],
      Instructions: "Stirr. Garnish with maraschino cherry.",
    },
    {
      Drink: "Apple Berry Smoothie",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
      Ingredients: ["Berries", "Apple"],
      Instructions: "Throw everything into a blender and liquify.",
    },
    {
      Drink: "Apple Karate",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
      Ingredients: ["Apple juice", "Carrot"],
      Instructions:"Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
    },
    {
      Drink: "Banana Cantaloupe Smoothie",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
      Ingredients: ["Cantaloupe", "Banana"],
      Instructions:"Juice cantaloupe, pour juice into blender, add banana, and liquify.",
    },
    {
      Drink: "Banana Milk Shake",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
      Ingredients: ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
      Instructions: "Blend all together in a blender until smooth.",
    },
    {
      Drink: "Banana Strawberry Shake",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
      Ingredients: ["Milk", "Orange juice", "Sugar syrup", "Banana"],
      Instructions:"Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
    },
    {
      Drink: "Banana Strawberry Shake Daiquiri",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
      Ingredients: ["Strawberries", "Banana", "Apple juice"],
      Instructions: "Blend all together in a blender until smooth.",
    },
    {
      Drink: "Bora Bora",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
      strIngredient: ["Pineapple juice","Passion fruit juice","Lemon juice","Grenadine"],
      Instructions:"Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
    },
    {
      Drink: "Castillian Hot Chocolate",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
      Ingredients: ["Cocoa powder", "Sugar", "Cornstarch", "Water", "Milk"],
      Instructions:"Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
    },
    {
      Drink: "Chocolate Beverage",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
      Ingredients: ["Milk", "Chocolate", "Cinnamon", "Egg"],
      Instructions:"Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
    },
    {
      Drink: "Chocolate Drink",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
      Ingredients: ["Chocolate", "Milk", "Water"],
      Instructions:"Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
    },
    {
      Drink: "Coke and Drops",
      DrinkThumb:"https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
      Ingredients: ["Coca-Cola", "Lemon juice"],
      Instructions:"Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
    }
  ]

  // Drinks.deleteMany({})
  //   .then(() => Drinks.insertMany(drinks))
  //   .then((Drinks) => {
  //     console.log("Drinks deleted");
  //     console.log("seed Drinks added to database: " + Drinks);
  //   })
  //   .catch(console.error)
  //   .finally(() => process.exit());



  // Drinks.insertMany(drinkData, (error, drink) => {
  //     if (error) {
  //         console.log(error);
  //     } else {
  //         console.log(drink);
  //         console.log(drinkData);
  //     }
  // });

  //create
// app.get('/seed', async (req,res) => {
//   try {
//     const newData = Drinks.create(drinks);
//     console.log(newData)
//   } catch(err) {
//     console.log(err)
//   }
// })

module.exports = drinks;
