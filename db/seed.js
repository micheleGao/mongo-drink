const mongoose = require("./connection");
const Drinks = require("../models/drinks.js");

const drinks = [
  {
    Drink: "Afterglow",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
    Ingredients: ["Grenadine", "Orange juice", "Pineapple juice"],
    Instructions: "Mix. Serve over ice.",
  },
  {
    Drink: "Alice Cocktail",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
    Ingredients: ["Grenadine", "Orange juice", "Pineapple juice", "Cream"],
    Instructions: "Shake well, strain into a large cocktail glass.",
  },
  {
    Drink: "Aloha Fruit punch",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
    Ingredients: ["Water", "Ginger", "Guava juice", "Lemon juice", "Pineapple", "Sugar", "Pineapple juice"],
    Instructions: "Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.",
  },
  {
    Drink: "Apello",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
    Ingredients: ["Orange juice", "Grapefruit juice", "Apple juice", "Maraschino cherry"],
    Instructions: "Stirr. Garnish with maraschino cherry.",
  },
  {
    Drink: "Apple Berry Smoothie",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
    Ingredients: ["Berries", "Apple"],
    Instructions: "Throw everything into a blender and liquify.",
  },
  {
    Drink: "Apple Karate",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
    Ingredients: ["Apple juice", "Carrot"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    Drink: "Banana Cantaloupe Smoothie",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uqxqsy1468876703.jpg",
    Ingredients: ["Cantaloupe", "Banana"],
    Instructions: "Juice cantaloupe, pour juice into blender, add banana, and liquify.",
  },
  {
    Drink: "Banana Milk Shake",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rtwwsx1472720307.jpg",
    Ingredients: ["Strawberries", "Banana", "Yoghurt", "Milk", "Honey"],
    Instructions: "Blend all together in a blender until smooth.",
  },
  {
    Drink: "Banana Strawberry Shake",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqquwx1472720634.jpg",
    Ingredients: ["Milk", "Orange juice", "Sugar syrup", "Banana"],
    Instructions: "Blend very well, preferably in a household mixer. Serve in a wine glass, garnish with whipped cream and a piece of banana.",
  },
  {
    Drink: "Banana Strawberry Shake Daiquiri",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/uvypss1472720581.jpg",
    Ingredients: ["Strawberries", "Banana", "Apple juice"],
    Instructions: "Blend all together in a blender until smooth.",
  },
  {
    Drink: "Bora Bora",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xwuqvw1473201811.jpg",
    strIngredient: ["Pineapple juice", "Passion fruit juice", "Lemon juice", "Grenadine"],
    Instructions: "Prepare in a blender or shaker, serve in a highball glass on the rocks. Garnish with 1 slice of pineapple and one cherry.",
  },
  {
    Drink: "Castillian Hot Chocolate",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg",
    Ingredients: ["Cocoa powder", "Sugar", "Cornstarch", "Water", "Milk"],
    Instructions: "Shift the cocoa and sugar together into a medium-sized saucepan. Dissolve the cornstarch in the water, and stir into the cocoa and sugar until it is a smooth paste. Begin heating the mixture, stirring it with a whisk, and gradually pour in the milk. Continue stirring with the whisk as you bring the liquid to a simmer. Allow the chocolate to simmer for about 10 minutes, stirring often, until it is thick, glossy and completely smooth. Serve steaming hot in coffee mug. Serves six.",
  },
  {
    Drink: "Chocolate Beverage",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/jbqrhv1487603186.jpg",
    Ingredients: ["Milk", "Chocolate", "Cinnamon", "Egg"],
    Instructions: "Boil milk in the top of a deep double boiler five minutes. Remove from fire and add chocolate, mixed with the cinnamon, a little at a time, beating with molinillo or egg beater after each addition. When the chocolate is thoroughly blended, heat to the boiling point. Place over bottom of double boiler and add eggs, whipping constantly, until they are thoroughly blended and the mixture is frothing. Serve in coffee mug. Serves eight.",
  },
  {
    Drink: "Chocolate Drink",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/q7w4xu1487603180.jpg",
    Ingredients: ["Chocolate", "Milk", "Water"],
    Instructions: "Melt the bar in a small amount of boiling water. Add milk. Cook over low heat, whipping gently (with a whisk, i would assume) until heated well. Don't let it boil! Serve in coffee mug.",
  },
  {
    Drink: "Coke and Drops",
    DrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yrtxxp1472719367.jpg",
    Ingredients: ["Coca-Cola", "Lemon juice"],
    Instructions: "Take a glass, pour the Coke in the glass, then you take 7 drops of lemon juice. Granish with a lemon slice on the rim of the glass.",
  },
  {
    Drink: 'Cranberry Punch',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mzgaqu1504389248.jpg',
    Ingredients: ["Cranberry Juice", "Sugar", "Pineapple Juice", "Almond Flavoring", "Ginger Ale"],
    Instructions: "Combine first four ingredients. Stir until sugar is dissolved, chill. Then add ginger ale just before serving. Add ice ring to keep punch cold."
  },
  {
    Drink: 'Drinking Chocolate',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/u6jrdf1487603173.jpg',
    Ingredients: ["Heavy Cream", "Cinnamon", "vanilla", "Chocolate", "Whipped Cream"],
    Instructions: "Heat the cream and milk with the cinnamon and vanilla bean very slowly for 15-20 minutes. (If you don't have any beans add 1-2 tsp of vanilla after heating). Remove the bean and cinnamon. Add the chocolate. Mix until fully melted. Serve topped with some very dense fresh whipped cream. Serves 1-2 depending upon how much of a glutton you are. For a richer chocolate, use 4 oz of milk, 4 oz of cream, 4 oz of chocolate. Serve in coffee mug."

  },
  {
    Drink: 'Egg Cream',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/mvis731484430445.jpg',
    Ingredients: ["Chocolate Syrup", "Milk", "Soda Water"],
    Instructions: "Mix syrup and milk in a fountain glass. Add soda water, serve with a straw."
  },
  {
    Drink: 'Frappé',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg',
    Ingredients: ["coffee", "milk", "Sugar"],
    Instructions: "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing."
  },
  {
    Drink: 'Fruit Cooler',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/i3tfn31484430499.jpg',
    Ingredients: ["Apple juice", "Strawberries", "Sugar", "Lemon", "Apple", "Soda water", "Ice"],
    Instructions: "Toss strawberries with sugar, and let sit overnight in refrigerator. Cut lemon, reserve two slices. Juice the rest. Mix together the lemon juice, strawberries, apple juice, and soda water. Add slices of lemon (decor, really). In glasses, put ice cubes, and a slice of apple. Pour drink in, and serve."
  },
  {
    Drink: 'Fruit Flip-Flop',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/nfdx6p1484430633.jpg',
    Ingredients: ["Yogurt", "Fruit juice"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
  },
  {
    Drink: 'Fruit Shake',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/q0fg2m1484430704.jpg',
    Ingredients: ["Yogurt", "Banana", "Orange Juice", "Fruit", "Ice"],
    Instructions: "Blend til smooth."
  },
  {
    Drink: 'Grape lemon pineapple Smoothie',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/54z5h71487603583.jpg',
    Ingredients: ["Grapes", "Lemon", "Pineapple"],
    Instructions: "Throw everything into a blender and liquify.",
  },
  {
    Drink: 'Holloween Punch',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/lfeoe41504888925.jpg',
    Ingredients: ["Grape Juice", "Carbonated soft drink", "Sherbet"],
    Instructions: "Take a bunch of grape juice and a bunch of fizzy stuff (club soda, ginger ale, lemonlime, whatever). Mix them in a punch bowl. Take orange sherbet and lime sherbet. Scoop out scoops and float them in the punch, let them melt a little so that a nasty film spreads all over the top of the punch but there are still \"bubbles\" in it in the form of sherbet scoops. Looks horrible, tastes just fine."
  },
  {
    Drink: 'Hot Chocolate to Die for',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/0lrmjp1487603166.jpg',
    Ingredients: ["Chocolate", "butter", "Vanilla extract", "Half & half", "Marshmellows"],
    Instructions: "Melt the chocolate, butter and vanilla in a double boiler. When just smooth stir in the cream.",
  },
  {
    Drink: 'Iced Coffee',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ytprxy1454513855.jpg',
    Ingredients: ["Instant coffee", "Sugar", "Water", "Milk"],
    Instructions: "Mix together until coffee and sugar is dissolved. Add milk. Shake well. Using a blender or milk shake maker produces a very foamy drink. Serve in coffee mug."
  },
  {
    Drink: 'Ipamena',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yswuwp1469090992.jpg',
    Ingredients: ["Lime", "Brown Sugar", "Passion Fruit juice", "Ginger ale", "Ice"],
    Instructions: "Cut half a lime into pieces, place in a shaker, add the sugar and crush. Measure the passion fruit juice, add it to the shaker and fill up with ice cubes. Close the shaker and shake vigorously. Pour the liquid into a glass, top up with ginger ale, stir with a teaspoon and then garnish the rim of the glass with a slice of lime",
  },
  {
    Drink: 'Just a Moonmint',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/znald61487604035.jpg',
    Ingredients: ["Mint", "Chocolate syrup", "Mint syrup"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
  },
  {
    Drink: 'Kill the cold Smoothie',
    DrinkThumb:'https://www.thecocktaildb.com/images/media/drink/7j1z2e1487603414.jpg',
    Ingredients: ["Ginger", "Lemon", "Water"],
    Instructions: "Juice ginger and lemon and add it to hot water. You may add cardomom.",
  },
  {
    Drink: 'Kiwi Papaya Smoothie',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/jogv4w1487603571.jpg',
    Ingredients: ["Kiwi", "Papaya"],
    Instructions: "Throw everything into a blender and liqidify."
  },
  {
    Drink: 'Lassi - A South Indian Drink',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/iq6scx1487603980.jpg',
    Ingredients: ["Yogurt", "Water", "Cumin seed", "Salt", "Mint"],
    Instructions: "Blend in a blender for 3 seconds. Lassi is one of the easiest things to make, and there are many ways of making it. Basically, it is buttermilk (yoghurt whisked with water), and you can choose almost any consistency that you like, from the thinnest to the thickest. Serve cold."
  },
  {
    Drink: 'Lassi - Mango',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/1bw6sd1487603816.jpg',
    Ingredients: ["Mango", "Yogurt", "Sugar", "Water"],
    Instructions: "Put it all in a blender and pour over crushed ice. You can also use other fruits like strawberries and bananas."
  },
  {
    Drink: 'Lassi - Sweet',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/9jeifz1487603885.jpg',
    Ingredients: ["Yogurt", "Water", "Sugar", "Salt", "Lemon Juice"],
    Instructions: "Put all ingredients into a blender and blend until nice and frothy. Serve chilled."
  },
  {
    Drink: 'Lassi Khara',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/m1suzm1487603970.jpg',
    Ingredients: ["Yogurt", "Water", "Salt", "Asafoetida"],
    Instructions: "Blend (frappe) in blender until frothy. Add torn curry leaves and serve cold.",
  },
  {
    Drink: 'Lassi Raita',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/s4x0qj1487603933.jpg',
    Ingredients: ["Yogurt", "Water", "Sugar", "Salt", "Lime", "Ice"],
    Instructions: "Blend the yoghurt and ice cubes together, until the yoghurt becomes more liquid. Add sugar to taste. The lemon/lime is optional but it gives it a slightly tart taste. Dash of salt. Raita is also good for the summer. Instead of having a traditional salad you can make raita instead."
  },
  {
    Drink: 'Lemouroudji',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/eirmo71487603745.jpg',
    Ingredients: ["Ginger", "Water", "Lemon", "Sugar", "Cayenne Pepper"],
    Instructions: "Juice the lemons. Peel and grate the ginger. Place the grated ginger and a liberal dash of the cayenne pepper into a piece of cheesecloth, and tie it into a knot. Let soak in the water. After 15 minutes or so, add the sugar, and the lemon juice. Chill, and serve."
  },
  {
    Drink: 'Limeade',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/5jdp5r1487603680.jpg',
    Ingredients: ["Lime", "Sugar", "Soda Water", "Lime peel"],
    Instructions: "In a large glass, put the lime juice and sugar, and stir well. Add cold seltzer water to fill. Put the lime peels in the glass. Drink. Repeat until limes or soda run out.",
  },
  {
    Drink: 'Mango Orange Smoothie',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/vdp2do1487603520.jpg',
    Ingredients: ["Mango", "Orange"],
    Instructions: "Throw everything into a blender and liquidify."
  },
  {
    Drink: 'Masala Chai',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/uyrpww1441246384.jpg',
    Ingredients: ["Water", "Tea", "Ginger", "Cardamom", "Cloves", "Cinnamon", "Sugar", "Black pepper", "Milk"],
    Instructions: "Bring 2 cups of water to boil. Add all the ingredients and boil again for about 15 seconds. Let stand for a minute. Warm milk in a pot. Filter tea into cups. Add milk and sugar. That's IT."
  },
  {
    Drink: 'Melya',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xwtptq1441247579.jpg',
    Ingredients: ["Espresso", "Honey", "Cocoa Powder"],
    Instructions: "Brew espresso. In a coffee mug, place 1 teaspoon of unsweetened powdered cocoa, then cover a teaspoon with honey and drizzle it into the cup. Stir while the coffee brews, this is the fun part. The cocoa seems to coat the honey without mixing, so you get a dusty, sticky mass that looks as though it will never mix. Then all at once, presto! It looks like dark chocolate sauce. Pour hot espresso over the honey, stirring to dissolve. Serve with cream."
  },
  {
    Drink: 'Microwave Hot Cocoa',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/8y4x5f1487603151.jpg',
    Ingredients: ["Sugar", "Cocoa Powder", "Salt", "Water", "Milk", "Vanilla Extract"],
    Instructions: "Combine sugar, cocoa, salt and hot water in 1-quart micro-proof measuring cup (or coffee mug). Microwave at HIGH (100%) for 1 to 1 1/2 minutes or until boiling. Add milk, sitr and microwave an additonal 1 1/2 to 2 minutes or until hot. Stir in vanilla, blend well."
  },
  {
    Drink: 'Nuked Hot Chocolate',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xcu6nb1487603142.jpg',
    Ingredients: ["Cocoa powder", "Suagr", "Vanilla Extract", "Milk"],
    Instructions: "Mix with a bit of milk (1 oz or so) in coffee mug. Nuke mug for about 30-50 seconds. Stir until the heated cocoa dissolves. Fill mug with milk. Nuke for 1-2 minutes, depending on wattage and preferences as to burnt mouth parts."
  },
  {
    Drink: 'Orange Scented Hot Chocolate',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/hdzwrh1487603131.jpg',
    Ingredients: ["Milk", "Orange peel", "Espresso", "Nutmeg", "Chocolate"],
    Instructions: "Combine all ingredients in heavy medium saucepan. Stir over low heat until chocolate melts. Increase heat and bring just to a boil, stirring often. Remove from heat and whisk untily frothy. Return to heat and bring to boil again. Remove from heat, whisk until frothy. Repeat heating and whisking once again. Discard orange peel. (Can be prepared 2 hours ahead. Let stand at room temperature. Before serving, bring just to boil, remove from heat and whisk until frothy.) Pour hot chocolate into coffee mugs. Makes 2 servings."
  },
  {
    Drink: 'Orangeade',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/ytsxxw1441167732.jpg',
    Ingredients: ["Lemon juice", "Orange juice", "Sugar syrup", "Soda water"],
    Instructions: "Place some ice cubes in a large tumbler or highball glass, add lemon juice, orange juice, sugar syrup, and stir well. Top up with cold soda water, serve with a drinking straw.",
  },
  {
    Drink: 'Pineapple Gingerale Smoothie',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/eg9i1d1487603469.jpg',
    Ingredients: ["Ginger", "Pineapple"],
    Instructions: "Throw everything into a blender and liquidify"
  },
  {
    Drink: 'Pysch Vitamin Light',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/xsqsxw1441553580.jpg',
    Ingredients: ["Orange juice", "Pineapple juice", "Apple juice", "Ice"],
    Instructions: "Shake with ice."
  },
  {
    Drink: 'Rail Splitter',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/stsuqq1441207660.jpg',
    Ingredients: ["Sugar syrup", "Lemon juice", "Ginger ale"],
    Instructions: "Mix sugar syrup with lemon juice in a tall glass. Fill up with ginger ale."
  },
  {
    Drink: 'Spanish chocolate',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/pra8vt1487603054.jpg',
    Ingredients: ["Milk", "Chocolate", "Cinnamon", "Egg Yolk"],
    Instructions: "Stir the milk with the chocolate and the cinnamon over low heat until the chocolate dissolves. Add the eggs and beat the mixture until it becomes thick, taking care not to boil. Serve in coffee mug."
  },
  {
    Drink: 'Spiced Peach Punch',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/qxvypq1468924331.jpg',
    Ingredients: ["Peach nectar", "Orange juice", "Brown sugar", "Cinnamon", "Cloves", "Lime juice"],
    Instructions: "Combine peach nectar, orange juice and brown sugar in a large saucepan. Tie cinnamon and cloves in a small cheesecloth bag. Drop into saucepan. Heat slowly, stirring constantly, until sugar dissolves. Simmer 10 minutes. Stir in lime juice. Serve in hot mugs."
  },
  {
    Drink: 'Spiking coffee',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/isql6y1487602375.jpg',
    Ingredients: ["Coffee", "Cinnamon"],
    Instructions: "Incidentally, a pinch of cinnamon is indeed a nice addition to coffee but true heaven is a cardamom seed. Of course, you serve it in a coffee mug."
  },
  {
    Drink: 'Strawberry Lemonade',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/spvvxp1468924425.jpg',
    Ingredients: ["Lemon", "Sugar", "Strawberries", "Water"],
    Instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice."
  },
  {
    Drink: 'Strawberry Shivers',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/9h1vvt1487603404.jpg',
    Ingredients: ["Starwberries", "Honey", "Water"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    Drink: 'Sweet Bananas',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/sxpcj71487603345.jpg',
    Ingredients: ["Milk", "Banana", "Honey"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
  },
  {
    Drink: 'Thai Coffee',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/wquwxs1441247025.jpg',
    Ingredients: ["Coffee", "Coriander", "Cardamom", "Sugar", "Whipping cream", "Ice"],
    Instructions: "Place the coffee and spices in the filter cone of your coffee maker. Brew coffee as usual, let it cool. In a tall glass, dissolve 1 or 2 teaspoons of sugar in an ounce of the coffee (it's easier to dissolve than if you put it right over ice). Add 5-6 ice cubes and pour coffee to within about 1 inch of the top of the glass. Rest a spoon on top of the coffee and slowly pour whipping cream into the spoon. This will make the cream float on top of the coffee rather than dispersing into it right away."
  },
  {
    Drink: 'Thai Iced Coffee',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg',
    Ingredients: ["Coffee", "Sugar", "Cream", "Cardamom"],
    Instructions: "Prepare a pot of coffee at a good European strength. In the ground coffee, add 2 or 3 freshly ground cardamom pods. Sweeten while hot, then cool quickly. Serve in highball glass over ice, with cream. To get the layered effect, place a spoon atop the coffee and pour the milk carefully into the spoon so that it floats on the top of the coffee.",
  },
  {
    Drink: 'Thai Iced Tea',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/trvwpu1441245568.jpg',
    Ingredients: ["Tea", "Water", "Condensed milk", "Ice", "Mint"],
    Instructions: "Combine Thai tea (i.e., the powder), boiling water, and sweetened condensed milk, stir until blended. Pour into 2 tall glasses filled with ice cubes. Garnish with mint leaves. Makes 2 servings."
  },
  {
    Drink: 'Tomato Tang',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg',
    Ingredients: ["Tomato Juice", "Lemon juice", "Celery salt"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up.",
  },
  {
    Drink: 'Yoghurt Cooler',
    DrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/trttrv1441254466.jpg',
    Ingredients: ["Yogurt", "Fruit", "Ice"],
    Instructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up. Note: Use lots of ice in this one - great on hot days! To add ice: Remove the center of the cover while the blender is on - drop 3 or 4 ice cubs and blend until they're completely crushed."
  },
];
//----deleting many and inserting without duplicates-----
// Drinks.deleteMany({})
//   .then(() => Drinks.insertMany(drinks))
//   .then((Drinks) => {
//     console.log("Drinks deleted");
//     console.log("seed Drinks added to database: " + Drinks);
//   })
//   .catch(console.error)
//   .finally(() => process.exit());

//----inserting many-------------------
// Drinks.insertMany(drinks, (error, drinks)=>{
//   if(error){
//     console.log(error);
//   }else{
//     console.log(drinks);
//   }
// })

module.exports = drinks;
