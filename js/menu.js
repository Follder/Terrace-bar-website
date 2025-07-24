class MenuItem {
  constructor (nameUkr, nameEng, weightUkr, weightEng, price) {
    this.nameUkr = nameUkr;
    this.nameEng = nameEng;
    this.weightUkr = weightUkr;
    this.weightEng = weightEng;
    this.price = price;
  }
  engItem() {
    return `<div class="menu-item">
    ${this.nameEng}
    <span class="menu-item-mini">${this.weightEng}</span> - 
    <span class="menu-item-price">${this.price}</span>
    </div>`;
  }
  ukrItem() {
    return `<div class="menu-item">
    ${this.nameUkr}
    <span class="menu-item-mini">${this.weightUkr}</span> - 
    <span class="menu-item-price">${this.price}</span>
    </div>`;
  }
}

const mealsHotPancakesJam = new MenuItem('Панкейки з сметаною та джемом', 
'Pancakes with sour cream and jam', '250 / 50 / 50г.', '250 / 50 / 50g.', '165.00');
const mealsHotPancakesCheese = new MenuItem('Сирники зі сметаною', 
'Cheese pancakes with sour cream', '250г.', '250g.', '165.00');
const mealsHotSpaghettiCarbonara = new MenuItem('Спагетті Карбонара', 
'Spaghetti Carbonara', '300г.', '300g.', '255.00');
const mealsHotPenne = new MenuItem('Пенне з куркою та білими грибами', 
'Penne with chicken and mushrooms', '300г.', '300g.', '260.00');
const mealsHotChickenBroth = new MenuItem('Курячий бульйон з перепелиним яйцем', 
'Chicken broth with a quail egg', '300г.', '300g.', '145.00');
const mealsHotBurgerChicken = new MenuItem('Чікен бургер', 
'Chicken burger', '1шт.', '1p.', '205.00');
const mealsHotBurgerBeef = new MenuItem('Біф бургер', 
'Beef burger', '1шт.', '1p.', '215.00');
const mealsHotFrenchFries = new MenuItem('Картопля фрі', 
'French fries', '150г.', '150g.', '105.00');
const mealsHotBreadBasket = new MenuItem('Хлібна корзина', 
'Bread basket', '', '', '40.00');

const mealsColdZaher = new MenuItem('Торт «Захер»', 'Zaher dessert', '1шм.', '1p.', '165.00');
const mealsColdTiramisu = new MenuItem('Тірамісу', 'Tiramisu', '1шм.', '1p.', '175.00');
const mealsColdMakaron = new MenuItem('Макарун', 'Macaron', '1шм.', '1p.', '120.00');
const mealsColdNapoleon = new MenuItem('Наполеон', 'Napoleon', '1шм.', '1p.', '135.00');
const mealsColdLimo = new MenuItem('Морозиво Limo "Ice Cream"', 'Limo ice cream', '60г.', '60g.', '55.00');
const mealsColdKashtan = new MenuItem('Морозиво каштан', 'Kashtan ice cream', '70г.', '70g.', '65.00');
const mealsColdLvivIcecramChoco = new MenuItem('Морозиво Львівське в шоколадній глазурі', 'Lviv ice cream with chocolate', '70г.', '70g.', '65.00');
const mealsColdMultifruit = new MenuItem('Морозиво Льодик Мультифрукт', 'Multi fruits ice cream', '70г.', '70g.', '55.00');
const mealsColdIceCreamCones = new MenuItem('Морозиво Ріжок "Потрійний шоколад"', 'Ice cream cones "Triple chocolate"', '65г.', '65g.', '65.00');

const mealsColdSaltedNuts = new MenuItem('Асорті солених горіхів', 
'Assorted salted nuts', '90г.', '90g.', '110.00');

const drinksSoftEspresso = new MenuItem('Еспресо', 'Espresso', '', '', '75.00');
const drinksSoftAmericano = new MenuItem('Американо', 'Americano', '', '', '75.00');
const drinksSoftAmericanoMilk = new MenuItem('Американо з молоком', 'Americano with milk', '', '', '85.00');
const drinksSoftLate = new MenuItem('Лате', 'Late', '', '', '95.00');
const drinksSoftCappuccino = new MenuItem('Капучіно', 'Cappuccino', '', '', '95.00');
const drinksSoftFlatWhite = new MenuItem('Кава флет-вайт', 'Flat white coffee', '', '', '140.00');
const drinksSoftHotChocolate = new MenuItem('Гарячий шоколад', 'Hot chocolate', '', '', '105.00');
const drinksSoftBrewTea = new MenuItem('Чай заварний', 'Brew tea', '', '', '65.00');
const drinksSoftCarpatianTea = new MenuItem('Чай карпатський', 'Carpatian tea', '', '', '75.00');
const drinksSoftGingerTea = new MenuItem('Чай імбирний з корицею', 'Ginger tea', '180мл', '180ml', '135.00');

const drinksSoftClassicLemonade = new MenuItem('Лимонад класичний', 'Classic Lemonade', 'п.', '1p.', '105.00');
const drinksSoftLemonadeSyrup = new MenuItem('Лимонад з сиропом', 'Lemonade with syrup', 'п.', '1p.', '110.00');
const drinksSoftJuice = new MenuItem('Сік розливний в асортименті', 'A variety of juices', '200мл.', '200ml.', '70.00');

const drinksSoftPepsi = new MenuItem('Pepsi', 'Pepsi', '0.5л.', '0.5l.', '70.00');
const drinksSoft7up = new MenuItem('7-up', '7-up', '0.5л.', '0.5l.', '70.00');
const drinksSoftMirinda = new MenuItem('Mirinda', 'Mirinda', '0.5л.', '0.5l.', '70.00');
const drinksSoftDevaitis = new MenuItem('Devaitis', 'Devaitis', '0.5л.', '0.5l.', '65.00');
const drinksSoftDevaitisGlass = new MenuItem('Devaitis (скло)', 'Devaitis (glass)', '0.5л.', '0.5l.', '70.00');
const drinksSoftPolianaKvasova = new MenuItem('Поляна Квасова (скло)', 'Poliana Kvasova (glass)', '0.5л.', '0.5l.', '120.00');
const drinksSoftLiptonTea = new MenuItem('Холодний чай Lipton', 'Lipton cold tea', '0.5л.', '0.5l.', '70.00');
const drinksSoftKvas = new MenuItem('Квас Тарас', 'Kvas Taras', '0.5л.', '0.5l.', '80.00');
const drinksSoftJaffa = new MenuItem('Сік Jaffa в асортименті', 'Jaffa juice', '200мл.', '200ml.', '70.00');
const drinksSoftJusik = new MenuItem('Сік Jusik в асортименті', 'Jusik juice', '200мл.', '200ml.', '70.00');
const drinksSoftSchweppes = new MenuItem('Тонік Schweppes', 'Tonic Schweppes', '0.5л.', '0.5l.', '70.00');
const drinksSoftRedBull = new MenuItem('Red Bull', 'Red Bull', '0.25л.', '0.25l.', '110.00');

const drinksCoctailsBlueLagoon = new MenuItem('Блакитна лагуна', 'Blue lagoon', '', '', '240.00');
const drinksCoctailsSexBeach = new MenuItem('Секс на пляжі', 'Sex on the beach', '', '', '240.00');
const drinksCoctailsMojitoNoalco = new MenuItem('Мохіто безалкогольний', 'Non-Alcoholic Mojito', '', '', '190.00');
const drinksCoctailsMojitoClassic = new MenuItem('Мохіто класичний', 'Classic Mojito', '', '', '230.00');
const drinksCoctailsCurrantMojito = new MenuItem('Мохіто смородиновий ', 'Currant Mojito', '', '', '240.00');
const drinksCoctailsGreekMojito = new MenuItem('Мохіто Грецький ', 'Greek Mojito', '', '', '240.00');
const drinksCoctailsAperosSpritz = new MenuItem('Апероль Спрітц', 'Aperol spritz', '', '', '240.00');
const drinksCoctailsMartiniFiero = new MenuItem('Martini Fiero & Tonic', 'Martini Fiero & Tonic', '', '', '240.00');
const drinksCoctailsBacardiCola = new MenuItem('Bacardi Spiced & Cola', 'Bacardi Spiced & Cola', '', '', '215.00');
const drinksCoctailsLongIsland = new MenuItem('Лонг-Айленд', 'Long Island iced tea', '', '', '275.00');
const drinksCoctailsGinTonic = new MenuItem('Джин-тонік', 'Gin Tonic', '', '', '225.00');

const drinksBeerKronenburg = new MenuItem('Кроненбург 1664 Blanc', 'Kronenburg 1664 Blanc', '0.46л.', '0.46l.', '105.00');
const drinksBeerLvivLight = new MenuItem('Львівське світле', '«Lvivske» light', '0.5л.', '0.5l.', '85.00');
const drinksBeerNonalco = new MenuItem('Безалкогольне', 'Non-Alcoholic', '0.5л.', '0.5l.', '105.00');
const drinksBeerWhiteLion = new MenuItem('Білий Лев пшеничне', 'White Lion', '0.48л.', '0.48l.', '85.00');
const drinksBeerWhiteLionDark = new MenuItem('Білий Лев темне', 'White Lion Dark', '0.48л.', '0.48l.', '85.00');

const snackHotDog = new MenuItem('Хот-дог класичний', 'Hot Dot', '', '', '120.00');
const snackHotDogBavarian = new MenuItem('Хот-дог із баварською сосискою', 'Bavarian Hot Dog', '', '', '135.00');
const snackCorn = new MenuItem('Кукурудза варена', 'Boiled corn', '', '', '95.00');
const snackPeanut = new MenuItem('Арахіс солоний', 'Salted peanuts', '30г', '30g', '85.00');
const snackCroutons = new MenuItem('Сухарики в асортименті', 'Croutons', '70г', '70g', '65.00');
const snackCrisps = new MenuItem('Чіпси в асортименті', 'Crisps', '25г', '25g', '85.00');

const wineVermouthMartini = new MenuItem('Вермут Мартіні "Fiero/Bianco/Rosso"', 'Vermouth Martini "Fiero/Bianco/Rosso"', '50мл', '50ml', '115.00');
const wineVermouthFratelli = new MenuItem('Вермут Фрателлі "Bianco"', 'Vermouth Fratelli "Bianco"', '50мл', '50ml', '65.00');

const winePinot = new MenuItem('Pinot Grigio Veneto Canti (біле сухе)', 'Pinot Grigio Veneto Canti', '150мл', '150ml', '255.00');
const wineTarapacaRed = new MenuItem('Tarapaca Santa Cecilia Semi Sweet (н/с) червоне', 'Tarapaca Santa Cecilia Semi Sweet', '150мл', '150ml', '255.00');
const wineTarapacaWhite = new MenuItem('Tarapaca Santa Cecilia Semi Sweet (н/с) біле', 'Tarapaca Santa Cecilia Semi Sweet', '150мл', '150ml', '255.00');
const wineMS = new MenuItem('Riesling Marlborough Sun (сухе біле)', 'Riesling Marlborough Sun', '150мл', '150ml', '295.00');
const wineMSSB = new MenuItem('Marlborough Sun Sauvignon Blanc (сухе біле)', 'Marlborough Sun Sauvignon Blanc', '150мл', '150ml', '295.00');
const wineLatinium = new MenuItem('Latinium (н/с біле)', 'Latinium', '150мл', '150ml', '165.00');

const wineAsti = new MenuItem('Martini Asti', 'Martini Asti', '750мл', '750ml', '1250.00');
const wineProsecco = new MenuItem('Martini Prosecco', 'Martini Prosecco', '750мл', '750ml', '1250.00');
const wineCava = new MenuItem('Cava', 'Cava', '750мл', '750ml', '1250.00');
const wineFiorelli = new MenuItem('Fiorellii в асортименті', 'Fiorelli', '750мл', '750ml', '750.00');
const wineFratelli = new MenuItem('Фрателлі брют', 'Fratelli brut', '50мл', '50ml', '65.00');

const drinksEliteAperol = new MenuItem('Апероль', 'Aperol', '50мл.', '50ml.', '125.00');
const drinksEliteCampari = new MenuItem('Аперитив Кампарі', 'Campari', '50мл.', '50ml.', '140.00');
const drinksEliteUnicum = new MenuItem('Бальзам "Unicum"', 'Unicum', '50мл.', '50ml.', '185.00');
const drinksEliteRiga = new MenuItem('Бальзам "Riga Black Currant"', 'Balsam Riga Black Currant', '50мл.', '50ml.', '140.00');
const drinksEliteBecherovka = new MenuItem('Настоянка "Becherovka"', 'Liqueur Becherovka', '50мл.', '50ml.', '120.00');
const drinksEliteJagermeister = new MenuItem('Настоянка "Jagermeister"', 'Liqueur Jagermeister', '50мл.', '50ml.', '120.00');
const drinksEliteBaileys = new MenuItem('Лікер "Baileys"', 'Liqueur Baileys', '50мл.', '50ml.', '145.00');
const drinksEliteAmaroAverna = new MenuItem('Лікер "Amaro Averna"', 'Liqueur "Amaro Averna"', '50мл.', '50ml.', '140.00');
const drinksEliteLimoncello = new MenuItem('Лікер Limoncello "Limo"', 'Liqueur Limoncello Limo', '50мл.', '50ml.', '140.00');
const drinksEliteMarieBrizard = new MenuItem('Лікер Marie Brizard "Amaretto"', 'Liqueur Marie Brizard "Amaretto"', '50мл.', '50ml.', '155.00');
const drinksEliteCointreau = new MenuItem('Лікер "Cointreau" 40%', 'Liqueur Cointreau 40%', '50мл.', '50ml.', '140.00');

const drinksAlcoholeFinland = new MenuItem('Горілка Фінляндія', 'Vodka Finland', '50мл.', '50ml.', '85.00');
const drinksAlcoholeAbsolute = new MenuItem('Горілка "Абсолютний стандарт"', 'Vodka Absolute Standard', '50мл.', '50ml.', '60.00');
const drinksAlcoholeGreyGoose = new MenuItem('Grey Goose', 'Grey Goose', '50мл.', '50ml.', '200.00');

const drinksEliteOldSmuggler = new MenuItem('Віскі "Old Smuggler"', 'Whiskey Old Smuggler Scotland', '50мл.', '50ml.', '125.00');
const drinksEliteDewarsWL = new MenuItem('Віскі "Dewar`s White Label"', 'Whiskey Dewar`s White Label', '50мл.', '50ml.', '135.00');
const drinksEliteDewarsJ = new MenuItem('Віскі "Dewar`s Japanese 8 YO"', 'Whiskey Dewar`s Japanese 8 YO', '50мл.', '50ml.', '165.00');
const drinksEliteJameson = new MenuItem('Віскі "Jameson"', 'Whiskey Jameson', '50мл.', '50ml.', '160.00');
const drinksEliteJack = new MenuItem('Віскі "Jack Daniels" в асорт.', 'Whiskey Jack Daniels', '50мл.', '50ml.', '160.00');
const drinksEliteWL = new MenuItem('Віскі "William Lawson`s"', 'Whiskey William Lawson`s', '50мл.', '50ml.', '130.00');
const drinksEliteWLSS = new MenuItem('Віскі "William Lawson`s Super Spiced" в асорт.', 'Whiskey William Lawson`s Super Spiced', '50мл.', '50ml.', '130.00');
const drinksEliteWildTurkey = new MenuItem('Віскі "Wild Turkey"', 'Whiskey Wild Turkey', '50мл.', '50ml.', '245.00');

const drinksAlcoholeMetaxa = new MenuItem('Коньяк "Metaxa" 5*', 'Cognac "Metaxa" 5*', '50мл.', '50ml.', '125.00');
const drinksAlcoholeRemiMartin = new MenuItem('Коньяк "Remi Martin"V.S.', 'Cognac "Remi Martin"V.S.', '50мл.', '50ml.', '395.00');
const drinksAlcoholeZakarpatskyi = new MenuItem('Коньяк "Закарпатський" 4*', 'Cognac «Zakarpatskyi» 4*', '50мл.', '50ml.', '95.00');

const drinksEliteOakheart = new MenuItem('Ром "Oakheart Original 35%"', 'Rum Oakheart Original 35%', '50мл.', '50ml.', '115.00');
const drinksEliteCapitan = new MenuItem('Ром "Captain Morgan"', 'Rum Captain Morgan', '50мл.', '50ml.', '115.00');
const drinksEliteCapitanDark = new MenuItem('Ром "Captain Morgan Dark"', 'Rum Captain Morgan Dark', '50мл.', '50ml.', '140.00');
const drinksEliteBarbados = new MenuItem('Ром "Barbadoza Blanco"', 'Rum Barbadoza Blanco', '50мл.', '50ml.', '105.00');

const drinksEliteOlmeco = new MenuItem('Текіла "Olmeco Blanco"', 'Tequila Olmeco Blanco', '50мл.', '50ml.', '165.00');
const drinksEliteELJimador = new MenuItem('Текіла "El Jimador Blanco"', 'Tequila El Jimador Blanco', '50мл.', '50ml.', '165.00');

const drinksEliteGordons = new MenuItem('Джин "Gordon`s"', 'Gin Gordon`s', '50мл.', '50ml.', '125.00');
const drinksEliteBombay = new MenuItem('Джин "Bombay Sapphire"', 'Gin Bombay Sapphire', '50мл.', '50ml.', '165.00');
const drinksEliteLondonDry = new MenuItem('Джин "London Dry Bankes"', 'Gin London Dry Bankes', '50мл.', '50ml.', '235.00');

const hookahClassic = new MenuItem('Кальян класичний', 'Hookah classic', '', '', '450.00');
const hookahPremium = new MenuItem('Кальян преміум', 'Hookah premium', '', '', '550.00');

document.querySelectorAll('.menu-meals-hot-en').forEach(item => {
  item.innerHTML = `
  <h5>Breakfast</h5>
  <span class="italic">Is served during the day</span>
  ${mealsHotPancakesJam.engItem()}
  ${mealsHotPancakesCheese.engItem()}
  <h5>Spaghetti</h5>
  ${mealsHotSpaghettiCarbonara.engItem()}
  ${mealsHotPenne.engItem()}
  <h5>Main meals</h5>
  ${mealsHotChickenBroth.engItem()}
  ${mealsHotBurgerChicken.engItem()}
  ${mealsHotBurgerBeef.engItem()}
  ${mealsHotFrenchFries.engItem()}
  ${mealsHotBreadBasket.engItem()}`;
});

document.querySelectorAll('.menu-meals-hot-ua').forEach(item => {
  item.innerHTML = `
  <h5>Сніданки</h5>
  <span class="italic">Подаються впродовж дня</span>
  ${mealsHotPancakesJam.ukrItem()}
  ${mealsHotPancakesCheese.ukrItem()}
  <h5>Паста</h5>
  ${mealsHotSpaghettiCarbonara.ukrItem()}
  ${mealsHotPenne.ukrItem()}
  <h5>Основні страви</h5>
  ${mealsHotChickenBroth.ukrItem()}
  ${mealsHotBurgerChicken.ukrItem()}
  ${mealsHotBurgerBeef.ukrItem()}
  ${mealsHotFrenchFries.ukrItem()}
  ${mealsHotBreadBasket.ukrItem()}`;
});

document.querySelectorAll('.menu-meals-cold-en').forEach(item => {
  item.innerHTML = `
  <h5>Desserts</h5>
  ${mealsColdZaher.engItem()}
  ${mealsColdTiramisu.engItem()}
  <h5>Ice cream</h5>
  ${mealsColdLimo.engItem()}
  ${mealsColdKashtan.engItem()}
  ${mealsColdLvivIcecramChoco.engItem()}
  ${mealsColdMultifruit.engItem()}
  ${mealsColdIceCreamCones.engItem()}`;
});

document.querySelectorAll('.menu-meals-cold-ua').forEach(item => {
  item.innerHTML = `
  <h5>Десерти</h5>
  ${mealsColdZaher.ukrItem()}
  ${mealsColdTiramisu.ukrItem()}
  <h5>Морозиво</h5>
  ${mealsColdLimo.ukrItem()}
  ${mealsColdKashtan.ukrItem()}
  ${mealsColdLvivIcecramChoco.ukrItem()}
  ${mealsColdMultifruit.ukrItem()}
  ${mealsColdIceCreamCones.ukrItem()}`;
});

document.querySelectorAll('.menu-drinks-soft-en').forEach(item => {
  item.innerHTML = `
  <h5>Hot drinks</h5>
  ${drinksSoftEspresso.engItem()}
  ${drinksSoftAmericano.engItem()}
  ${drinksSoftAmericanoMilk.engItem()}
  ${drinksSoftLate.engItem()}
  ${drinksSoftCappuccino.engItem()}
  ${drinksSoftFlatWhite.engItem()}
  ${drinksSoftHotChocolate.engItem()}
  ${drinksSoftBrewTea.engItem()}
  ${drinksSoftCarpatianTea.engItem()}
  ${drinksSoftGingerTea.engItem()}
  <h5>Cold drinks</h5>
  ${drinksSoftDevaitis.engItem()}
  ${drinksSoftDevaitisGlass.engItem()}
  ${drinksSoftPolianaKvasova.engItem()}
  ${drinksSoftLiptonTea.engItem()}
  ${drinksSoftKvas.engItem()}
  ${drinksSoftJaffa.engItem()}
  ${drinksSoftJusik.engItem()}
  ${drinksSoftSchweppes.engItem()}
  ${drinksSoftRedBull.engItem()}
  ${drinksSoftClassicLemonade.engItem()}
  ${drinksSoftLemonadeSyrup.engItem()}
  ${drinksSoftJuice.engItem()}
  `;
});

document.querySelectorAll('.menu-drinks-soft-ua').forEach(item => {
  item.innerHTML = `
  <h5>Гарячі напої</h5>
  ${drinksSoftEspresso.ukrItem()}
  ${drinksSoftAmericano.ukrItem()}
  ${drinksSoftAmericanoMilk.ukrItem()}
  ${drinksSoftLate.ukrItem()}
  ${drinksSoftCappuccino.ukrItem()}
  ${drinksSoftFlatWhite.ukrItem()}
  ${drinksSoftHotChocolate.ukrItem()}
  ${drinksSoftBrewTea.ukrItem()}
  ${drinksSoftCarpatianTea.ukrItem()}
  ${drinksSoftGingerTea.ukrItem()}
  <h5>Холодні напої</h5>
  ${drinksSoftDevaitis.ukrItem()}
  ${drinksSoftDevaitisGlass.ukrItem()}
  ${drinksSoftPolianaKvasova.ukrItem()}
  ${drinksSoftLiptonTea.ukrItem()}
  ${drinksSoftKvas.ukrItem()}
  ${drinksSoftJaffa.ukrItem()}
  ${drinksSoftJusik.ukrItem()}
  ${drinksSoftSchweppes.ukrItem()}
  ${drinksSoftRedBull.ukrItem()}
  <h5>На розлив</h5>
  ${drinksSoftClassicLemonade.ukrItem()}
  ${drinksSoftLemonadeSyrup.ukrItem()}
  ${drinksSoftJuice.ukrItem()}
  `;
});

document.querySelectorAll('.menu-drinks-coctail-en').forEach(item => {
  item.innerHTML = `
  <h5>Coctails</h5>
  ${drinksCoctailsBlueLagoon.engItem()}
  ${drinksCoctailsSexBeach.engItem()}
  ${drinksCoctailsMojitoNoalco.engItem()}
  ${drinksCoctailsMojitoClassic.engItem()}
  ${drinksCoctailsCurrantMojito.engItem()}
  ${drinksCoctailsGreekMojito.engItem()}
  ${drinksCoctailsAperosSpritz.engItem()}
  ${drinksCoctailsMartiniFiero.engItem()}
  ${drinksCoctailsBacardiCola.engItem()}
  ${drinksCoctailsGinTonic.engItem()}
  ${drinksCoctailsLongIsland.engItem()}
  `;
});

document.querySelectorAll('.menu-drinks-coctail-ua').forEach(item => {
  item.innerHTML = `
  <h5>Коктейлі</h5>
  ${drinksCoctailsBlueLagoon.ukrItem()}
  ${drinksCoctailsSexBeach.ukrItem()}
  ${drinksCoctailsMojitoNoalco.ukrItem()}
  ${drinksCoctailsMojitoClassic.ukrItem()}
  ${drinksCoctailsCurrantMojito.ukrItem()}
  ${drinksCoctailsGreekMojito.ukrItem()}
  ${drinksCoctailsAperosSpritz.ukrItem()}
  ${drinksCoctailsMartiniFiero.ukrItem()}
  ${drinksCoctailsBacardiCola.ukrItem()}
  ${drinksCoctailsGinTonic.ukrItem()}
  ${drinksCoctailsLongIsland.ukrItem()}
  `;
});

document.querySelectorAll('.menu-drinks-beer-en').forEach(item => {
  item.innerHTML = `
  <h5>Beer</h5>
  ${drinksBeerKronenburg.engItem()}
  ${drinksBeerLvivLight.engItem()}
  ${drinksBeerNonalco.engItem()}
  ${drinksBeerWhiteLion.engItem()}
  ${drinksBeerWhiteLionDark.engItem()}
  <h5>Snack</h5>
  ${snackHotDog.engItem()}
  ${snackHotDogBavarian.engItem()}
  ${snackCorn.engItem()}
  ${snackPeanut.engItem()}
  ${snackCroutons.engItem()}
  ${snackCrisps.engItem()}
  `;
});

document.querySelectorAll('.menu-drinks-beer-ua').forEach(item => {
  item.innerHTML = `
  <h5>Пиво</h5>
  ${drinksBeerKronenburg.ukrItem()}
  ${drinksBeerLvivLight.ukrItem()}
  ${drinksBeerNonalco.ukrItem()}
  ${drinksBeerWhiteLion.ukrItem()}
  ${drinksBeerWhiteLionDark.ukrItem()}
  <h5>Закуски</h5>
  ${snackHotDog.ukrItem()}
  ${snackHotDogBavarian.ukrItem()}
  ${snackCorn.ukrItem()}
  ${snackPeanut.ukrItem()}
  ${snackCroutons.ukrItem()}
  ${snackCrisps.ukrItem()}
  `;
});

document.querySelectorAll('.menu-drinks-wine-en').forEach(item => {
  item.innerHTML = `
  <h5>Vermouth</h5>
  ${wineVermouthMartini.engItem()}
  ${wineVermouthFratelli.engItem()}
  <h5>Wine</h5>
  ${winePinot.engItem()}
  ${wineTarapacaRed.engItem()}
  ${wineTarapacaWhite.engItem()}
  ${wineMS.engItem()}
  ${wineMSSB.engItem()}
  ${wineLatinium.engItem()}
  <h5>Sparkling wine</h5>
  ${wineAsti.engItem()}
  ${wineProsecco.engItem()}
  ${wineCava.engItem()}
  ${wineFiorelli.engItem()}
  ${wineFratelli.engItem()}
`;
});

document.querySelectorAll('.menu-drinks-wine-ua').forEach(item => {
  item.innerHTML = `
  <h5>Вермути</h5>
  ${wineVermouthMartini.ukrItem()}
  ${wineVermouthFratelli.ukrItem()}
  <h5>Вина</h5>
  ${winePinot.ukrItem()}
  ${wineTarapacaRed.ukrItem()}
  ${wineTarapacaWhite.ukrItem()}
  ${wineMS.ukrItem()}
  ${wineMSSB.ukrItem()}
  ${wineLatinium.ukrItem()}
  <h5>Ігристі вина</h5>
  ${wineAsti.ukrItem()}
  ${wineProsecco.ukrItem()}
  ${wineCava.ukrItem()}
  ${wineFiorelli.ukrItem()}
  ${wineFratelli.ukrItem()}
  `;
});

document.querySelectorAll('.menu-drinks-alcohole-en').forEach(item => {
  item.innerHTML = `
  <h5>Liqueurs & tinctures</h5>
  ${drinksEliteAperol.engItem()}
  ${drinksEliteCampari.engItem()}
  ${drinksEliteUnicum.engItem()}
  ${drinksEliteRiga.engItem()}
  ${drinksEliteBecherovka.engItem()}
  ${drinksEliteJagermeister.engItem()}
  ${drinksEliteBaileys.engItem()}
  ${drinksEliteAmaroAverna.engItem()}
  ${drinksEliteLimoncello.engItem()}
  ${drinksEliteMarieBrizard.engItem()}
  ${drinksEliteCointreau.engItem()}
  <h5>Vodka</h5>
  ${drinksAlcoholeFinland.engItem()}
  ${drinksAlcoholeAbsolute.engItem()}
  ${drinksAlcoholeGreyGoose.engItem()}
  <h5>Tequila</h5>
  ${drinksEliteOlmeco.engItem()}
  ${drinksEliteELJimador.engItem()}
  `;
});

document.querySelectorAll('.menu-drinks-alcohole-ua').forEach(item => {
  item.innerHTML = `
  <h5>Лікери та настоянки</h5>
  ${drinksEliteAperol.ukrItem()}
  ${drinksEliteCampari.ukrItem()}
  ${drinksEliteUnicum.ukrItem()}
  ${drinksEliteRiga.ukrItem()}
  ${drinksEliteBecherovka.ukrItem()}
  ${drinksEliteJagermeister.ukrItem()}
  ${drinksEliteBaileys.ukrItem()}
  ${drinksEliteAmaroAverna.ukrItem()}
  ${drinksEliteLimoncello.ukrItem()}
  ${drinksEliteMarieBrizard.ukrItem()}
  ${drinksEliteCointreau.ukrItem()}
  <h5>Горілка</h5>
  ${drinksAlcoholeFinland.ukrItem()}
  ${drinksAlcoholeAbsolute.ukrItem()}
  ${drinksAlcoholeGreyGoose.ukrItem()}
  <h5>Текіла</h5>
  ${drinksEliteOlmeco.ukrItem()}
  ${drinksEliteELJimador.ukrItem()}
  `;
});

document.querySelectorAll('.menu-drinks-elite-en').forEach(item => {
  item.innerHTML = `
  <h5>Whiskey</h5>
  ${drinksEliteOldSmuggler.engItem()}
  ${drinksEliteDewarsWL.engItem()}
  ${drinksEliteDewarsJ.engItem()}
  ${drinksEliteJameson.engItem()}
  ${drinksEliteJack.engItem()}
  ${drinksEliteWL.engItem()}
  ${drinksEliteWLSS.engItem()}
  ${drinksEliteWildTurkey.engItem()}
  <h5>Cognac</h5>
  ${drinksAlcoholeMetaxa.engItem()}
  ${drinksAlcoholeRemiMartin.engItem()}
  ${drinksAlcoholeZakarpatskyi.engItem()}
  <h5>Rum</h5>
  ${drinksEliteOakheart.engItem()}
  ${drinksEliteCapitan.engItem()}
  ${drinksEliteCapitanDark.engItem()}
  ${drinksEliteBarbados.engItem()}
  <h5>Gin</h5>
  ${drinksEliteGordons.engItem()}
  ${drinksEliteBombay.engItem()}
  ${drinksEliteLondonDry.engItem()}
`;
});

document.querySelectorAll('.menu-drinks-elite-ua').forEach(item => {
  item.innerHTML = `
  <h5>Віскі</h5>
  ${drinksEliteOldSmuggler.ukrItem()}
  ${drinksEliteDewarsWL.ukrItem()}
  ${drinksEliteDewarsJ.ukrItem()}
  ${drinksEliteJameson.ukrItem()}
  ${drinksEliteJack.ukrItem()}
  ${drinksEliteWL.ukrItem()}
  ${drinksEliteWLSS.ukrItem()}
  ${drinksEliteWildTurkey.ukrItem()}
  <h5>Коньяк</h5>
  ${drinksAlcoholeMetaxa.ukrItem()}
  ${drinksAlcoholeRemiMartin.ukrItem()}
  ${drinksAlcoholeZakarpatskyi.ukrItem()}
  <h5>Ром</h5>
  ${drinksEliteOakheart.ukrItem()}
  ${drinksEliteCapitan.ukrItem()}
  ${drinksEliteCapitanDark.ukrItem()}
  ${drinksEliteBarbados.ukrItem()}
  <h5>Джин</h5>
  ${drinksEliteGordons.ukrItem()}
  ${drinksEliteBombay.ukrItem()}
  ${drinksEliteLondonDry.ukrItem()}
  `;
});

document.querySelectorAll('.menu-hookah-en').forEach(item => {
  item.innerHTML = `
  <h5>Hookah</h5>
  ${hookahClassic.engItem()}
  ${hookahPremium.engItem()}`;
});

document.querySelectorAll('.menu-hookah-ua').forEach(item => {
  item.innerHTML = `
  <h5>Кальян</h5>
  ${hookahClassic.ukrItem()}
  ${hookahPremium.ukrItem()}`;
});