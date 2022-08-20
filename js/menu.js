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

const mealsColdSaltedNuts = new MenuItem('Асорті солених горіхів', 
'Assorted salted nuts', '90г.', '90g.', '110.00');
const mealsColdSaladGreek = new MenuItem('Традиційний грецький', 
'Classical Greek salad', '300г.', '300g.', '205.00');
const mealsColdSaladCaesar = new MenuItem('Цезар з куркою', 
'Caesar salad with chicken', '300г.', '300g.', '245.00');
const mealsColdZaher = new MenuItem('Торт «Захер»', 
'Zaher dessert', '1шм.', '1p.', '120.00');
const mealsColdTiramisu = new MenuItem('Тірамісу', 
'Tiramisu', '1шм.', '1p.', '165.00');
const mealsColdLimo = new MenuItem('Морозиво Limo "Ice Cream"', 
'Limo ice cream', '60г.', '60g.', '35.00');
const mealsColdKashtan = new MenuItem('Морозиво каштан', 
'Kashtan ice cream', '70г.', '70g.', '55.00');
const mealsColdLvivIcecramChoco = new MenuItem('Морозиво Львівське в шоколадній глазурі', 
'Lviv ice cream with chocolate', '70г.', '70g.', '55.00');
const mealsColdMultifruit = new MenuItem('Морозиво Льодик Мультифрукт', 
'Multi fruits ice cream', '70г.', '70g.', '45.00');
const mealsColdIceCreamCones = new MenuItem('Морозиво Ріжок "Icy Ice"', 
'Ice cream cones "Icy Ice"', '65г.', '65g.', '45.00');

const drinksSoftEspresso = new MenuItem('Еспресо', 'Espresso', '', '', '60.00');
const drinksSoftAmericano = new MenuItem('Американо', 'Americano', '', '', '60.00');
const drinksSoftAmericanoMilk = new MenuItem('Американо з молоком', 'Americano with milk', '', '', '65.00');
const drinksSoftLate = new MenuItem('Лате', 'Late', '', '', '75.00');
const drinksSoftCappuccino = new MenuItem('Капучіно', 'Cappuccino', '', '', '75.00');
const drinksSoftFlatWhite = new MenuItem('Кава флет-вайт', 'Flat white coffee', '', '', '95.00');
const drinksSoftBrewTea = new MenuItem('Чай заварний', 'Brew tea', '', '', '80.00');
const drinksSoftGingerTea = new MenuItem('Чай імбирний', 'Ginger tea', '', '', '85.00');
const drinksSoftClassicLemonade = new MenuItem('Лимонад класичний', 'Classic Lemonade', 'п.', '1p.', '90.00');
const drinksSoftLemonadeSyrup = new MenuItem('Лимонад з сиропом', 'Lemonade with syrup', 'п.', '1p.', '110.00');
const drinksSoftPepsiGlass = new MenuItem('Pepsi скло', 'Pepsi glass', '0.3л.', '0.3l.', '60.00');
const drinksSoftPepsi = new MenuItem('Pepsi', 'Pepsi', '0.5л.', '0.5l.', '60.00');
const drinksSoft7up = new MenuItem('7-up', '7-up', '0.5л.', '0.5l.', '60.00');
const drinksSoftMirinda = new MenuItem('Mirinda', 'Mirinda', '0.5л.', '0.5l.', '60.00');
const drinksSoftMorshinska = new MenuItem('Моршинська скло', 'Morshinska  Water', '0.33л.', '0.33l.', '60.00');
const drinksSoftBorjomi = new MenuItem('Borjomi', 'Borjomi', '0.5л.', '0.5l.', '90.00');
const drinksSoftNaturalSource = new MenuItem('Приподнє джерело', 
'Natural source mineral water', '0.5л.', '0.5l.', '55.00');
const drinksSoftJuice = new MenuItem('Сік розливний в асортименті', 'A variety of juices', '200мл.', '200ml.', '60.00');
const drinksSoftSandora = new MenuItem('Сік Sandora в асортименті', 'Sandora juice', '250мл.', '250ml.', '60.00');
const drinksSoftRedBull = new MenuItem('Red Bull', 'Red Bull', '0.25л.', '0.25l.', '100.00');
const drinksSoftLiptonTea = new MenuItem('Холодний чай Lipton', 'Lipton cold tea', '0.5л.', '0.5l.', '60.00');
const drinksSoftEverest = new MenuItem('Тонік Everest', 'Tonik Everest', '0.5л.', '0.5l.', '60.00');

const drinksCoctailsMojitoClassic = new MenuItem('Мохіто класичний', 'Classic Mojito', '', '', '180.00');
const drinksCoctailsCurrantMojito = new MenuItem('Мохіто смородиновий ', 'Currant Mojito', '', '', '190.00');
const drinksCoctailsMojitoNoalco = new MenuItem('Мохіто безалкогольний', 'Non-Alcoholic Mojito', '', '', '155.00');
const drinksCoctailsBlueLagoon = new MenuItem('Блакитна лагуна', 'Blue lagoon', '', '', '165.00');
const drinksCoctailsSexBeach = new MenuItem('Секс на пляжі', 'Sex on the beach', '', '', '165.00');
const drinksCoctailsAperosSpritz = new MenuItem('Апероль Спрітц', 'Aperol spritz', '', '', '205.00');
const drinksCoctailsLongIsland = new MenuItem('Лонг-Айленд', 'Long Island iced tea', '', '', '185.00');

const drinksBeerNonalco = new MenuItem('Безалкогольне', 'Non-Alcoholic', '0.5л.', '0.5l.', '110.00');
const drinksBeerLvivLight = new MenuItem('Львівське світле', '«Lvivske» light', '0.5л.', '0.5l.', '80.00');
const drinksBeerKronenburg = new MenuItem('Кроненбург', 'Kronenburg', '0.46л.', '0.46l.', '115.00');
const drinksBeerWhiteLion= new MenuItem('Білий Лев нефільтроване', 'White Lion', '0.5л.', '0.5l.', '80.00');

const drinksAlcoholeWineCristatus = new MenuItem('Вино Cristatus', 'Wine Cristatus', '50мл.', '50ml.', '55.00');
const drinksAlcoholeMartiniAsti = new MenuItem('Вино ігр. Martini Asti', 
'Sparkling wine. Martini Asti', 'пл.', '750ml.', '870.00');
const drinksAlcoholeMartiniProsecco = new MenuItem('Вино ігр. Martini Prosecco', 
'Sparkling wine. Martini Prosecco', 'пл.', '750ml.', '870.00');
const drinksAlcoholeFratelliMini = new MenuItem('Вино ігр. Фрателлі брют', 
'Wine Fratelli assorted', '50мл.', '50ml.', '55.00');
const drinksAlcoholeDelToro = new MenuItem('Вино Cuerno del Toro чер. н/с. Іспанія', 
'Wine Cuerno del Toro', 'пл.', '750ml.', '550.00');
const drinksAlcoholeFragolino = new MenuItem('Напій винний Fragolino Bianco Fiorelli', 
'Fiorelli Fragolino Bianco', 'пл.', '750ml.', '460.00');
const drinksAlcoholeFratelli = new MenuItem('Вино ігр. Фрателлі в асортименті', 
'Sparkling wine. Fratelli assoted', 'пл.', '750ml.', '455.00');
const drinksAlcoholeFiorelli = new MenuItem('Вино ігр. Fiorelli в асортименті', 
'Sparkling wine. Fiorelli assoted', 'пл.', '750ml.', '460.00');
const drinksAlcoholeMetaxa = new MenuItem('Коньяк "Metaxa" 5*', 'Cognac "Metaxa" 5*', '50мл.', '50ml.', '110.00');
const drinksAlcoholeRemiMartin = new MenuItem('Коньяк "Remi Martin"V.S.', 
'Cognac "Remi Martin"V.S.', '50мл.', '50ml.', '400.00');
const drinksAlcoholeZakarpatskyi = new MenuItem('Коньяк "Закарпатський" 4*', 
'Cognac «Zakarpatskyi» 4*', '50мл.', '50ml.', '85.00');
const drinksAlcoholeAbsolute = new MenuItem('Горілка "Абсолютний стандарт"', 
'Vodka Absolute Standard', '50мл.', '50ml.', '55.00');
const drinksAlcoholeFinland = new MenuItem('Горілка Фінляндія', 
'Vodka Finland', '50мл.', '50ml.', '105.00');
const drinksAlcoholeHlibnyDar = new MenuItem('Хлібний Дар', 
'Hlibny dar', '50мл.', '50ml.', '55.00');

const drinksEliteOldSmuggler = new MenuItem('Віскі "Old Smuggler"', 
'Whiskey Old Smuggler Scotland', '50мл.', '50ml.', '115.00');
const drinksEliteJameson = new MenuItem('Віскі "Jameson"', 
'Whiskey Jameson', '50мл.', '50ml.', '175.00');
const drinksEliteJohnieRed = new MenuItem('Віскі "Johnnie Walker Red Label"', 
'Whiskey Johnnie Walker Red Label', '50мл.', '50ml.', '125.00');
const drinksEliteJohnieBlack = new MenuItem('Віскі "Johnnie Walker Black Label" 12р', 
'Whiskey Johnnie Walker Black Label 12 years', '50мл.', '50ml.', '230.00');
const drinksEliteJack = new MenuItem('Віскі "Jack Daniels" в асорт.', 
'Whiskey Jack Daniels', '50мл.', '50ml.', '175.00');
const drinksEliteBarbados = new MenuItem('Ром "Barbados Blanco"', 
'Rum Barbados Blanco', '50мл.', '50ml.', '95.00');
const drinksEliteCapitan = new MenuItem('Ром Jamaiсa "Captain Morgan"', 
'Rum Jamaika Captain Morgan', '50мл.', '50ml.', '110.00');
const drinksEliteCapitanDark = new MenuItem('Ром Jamaiсa "Captain Morgan Dark"', 
'Rum Jamaika Captain Morgan Dark', '50мл.', '50ml.', '115.00');
const drinksEliteWhiteDiamonds = new MenuItem('Ром White Diamonds', 
'Rum White Diamonds', '50мл.', '50ml.', '95.00');
const drinksEliteBecherovka = new MenuItem('Настоянка "Becherovka"', 
'Liqueur Becherovka', '50мл.', '50ml.', '120.00');
const drinksEliteJagermeister = new MenuItem('Настоянка "Jagermeister"', 
'Liqueur Jagermeister', '50мл.', '50ml.', '135.00');
const drinksEliteOlmeco = new MenuItem('Текіла "Olmeco Blanco"', 
'Tequila Olmeco Blanco', '50мл.', '50ml.', '140.00');
const drinksEliteLondonDry = new MenuItem('Джин "London Dry Bankes"', 
'Gin London Dry Bankes', '50мл.', '50ml.', '135.00');
const drinksEliteRiga = new MenuItem('Бальзам "Riga Black Currant"', 
'Balsam Riga Black Currant', '50мл.', '50ml.', '90.00');
const drinksEliteCointreau = new MenuItem('Лікер "Cointreau" 40%', 
'Liqueur Cointreau 40%', '50мл.', '50ml.', '145.00');
const drinksEliteLimoncello = new MenuItem('Лікер Limoncello "Limo"', 
'Liqueur Limoncello Limo', '50мл.', '50ml.', '125.00');
const drinksEliteMarieBrizard = new MenuItem('Лікер Marie Brizard "Amaretto"', 
'Liqueur Marie Brizard "Amaretto"', '50мл.', '50ml.', '195.00');
const drinksEliteAmaroAverna = new MenuItem('Лікер "Amaro Averna"', 
'Liqueur "Amaro Averna"', '50мл.', '50ml.', '135.00');
const drinksEliteCampari = new MenuItem('Аперитив Кампарі', 
'Campari', '50мл.', '50ml.', '95.00');
const drinksEliteAperol = new MenuItem('Апероль', 
'Aperol', '50мл.', '50ml.', '95.00');

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
  <h5>Appetizers</h5>
  ${mealsColdSaltedNuts.engItem()}
  <h5>Salads</h5>
  ${mealsColdSaladGreek.engItem()}
  ${mealsColdSaladCaesar.engItem()}
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
  <h5>Закуски</h5>
  ${mealsColdSaltedNuts.ukrItem()}
  <h5>Салати</h5>
  ${mealsColdSaladGreek.ukrItem()}
  ${mealsColdSaladCaesar.ukrItem()}
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
  ${drinksSoftBrewTea.engItem()}
  ${drinksSoftGingerTea.engItem()}
  <h5>Cold drinks</h5>
  ${drinksSoftClassicLemonade.engItem()}
  ${drinksSoftLemonadeSyrup.engItem()}
  ${drinksSoftPepsiGlass.engItem()}
  ${drinksSoftPepsi.engItem()}
  ${drinksSoft7up.engItem()}
  ${drinksSoftMirinda.engItem()}
  ${drinksSoftMorshinska.engItem()}
  ${drinksSoftBorjomi.engItem()}
  ${drinksSoftNaturalSource.engItem()}
  ${drinksSoftJuice.engItem()}
  ${drinksSoftSandora.engItem()}
  ${drinksSoftRedBull.engItem()}
  ${drinksSoftLiptonTea.engItem()}
  ${drinksSoftEverest.engItem()}`;
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
  ${drinksSoftBrewTea.ukrItem()}
  ${drinksSoftGingerTea.ukrItem()}
  <h5>Холодні напої</h5>
  ${drinksSoftClassicLemonade.ukrItem()}
  ${drinksSoftLemonadeSyrup.ukrItem()}
  ${drinksSoftPepsiGlass.ukrItem()}
  ${drinksSoftPepsi.ukrItem()}
  ${drinksSoft7up.ukrItem()}
  ${drinksSoftMirinda.ukrItem()}
  ${drinksSoftMorshinska.ukrItem()}
  ${drinksSoftBorjomi.ukrItem()}
  ${drinksSoftNaturalSource.ukrItem()}
  ${drinksSoftJuice.ukrItem()}
  ${drinksSoftSandora.ukrItem()}
  ${drinksSoftRedBull.ukrItem()}
  ${drinksSoftLiptonTea.ukrItem()}
  ${drinksSoftEverest.ukrItem()}`;
});

document.querySelectorAll('.menu-drinks-coctail-en').forEach(item => {
  item.innerHTML = `
  <h5>Coctails</h5>
  ${drinksCoctailsMojitoClassic.engItem()}
  ${drinksCoctailsCurrantMojito.engItem()}
  ${drinksCoctailsMojitoNoalco.engItem()}
  ${drinksCoctailsBlueLagoon.engItem()}
  ${drinksCoctailsSexBeach.engItem()}
  ${drinksCoctailsAperosSpritz.engItem()}
  ${drinksCoctailsLongIsland.engItem()}`;
});

document.querySelectorAll('.menu-drinks-coctail-ua').forEach(item => {
  item.innerHTML = `
  <h5>Коктейлі</h5>
  ${drinksCoctailsMojitoClassic.ukrItem()}
  ${drinksCoctailsCurrantMojito.ukrItem()}
  ${drinksCoctailsMojitoNoalco.ukrItem()}
  ${drinksCoctailsBlueLagoon.ukrItem()}
  ${drinksCoctailsSexBeach.ukrItem()}
  ${drinksCoctailsAperosSpritz.ukrItem()}
  ${drinksCoctailsLongIsland.ukrItem()}`;
});

document.querySelectorAll('.menu-drinks-beer-en').forEach(item => {
  item.innerHTML = `
  <h5>Beer</h5>
  ${drinksBeerNonalco.engItem()}
  ${drinksBeerLvivLight.engItem()}
  ${drinksBeerKronenburg.engItem()}
  ${drinksBeerWhiteLion.engItem()}`;
});

document.querySelectorAll('.menu-drinks-beer-ua').forEach(item => {
  item.innerHTML = `
  <h5>Пиво</h5>
  ${drinksBeerNonalco.ukrItem()}
  ${drinksBeerLvivLight.ukrItem()}
  ${drinksBeerKronenburg.ukrItem()}
  ${drinksBeerWhiteLion.ukrItem()}`;
});

document.querySelectorAll('.menu-drinks-alcohole-en').forEach(item => {
  item.innerHTML = `
  <h5>Wine</h5>
  ${drinksAlcoholeWineCristatus.engItem()}
  ${drinksAlcoholeMartiniAsti.engItem()}
  ${drinksAlcoholeMartiniProsecco.engItem()}
  ${drinksAlcoholeFratelliMini.engItem()}
  ${drinksAlcoholeDelToro.engItem()}
  ${drinksAlcoholeFragolino.engItem()}
  ${drinksAlcoholeFratelli.engItem()}
  ${drinksAlcoholeFiorelli.engItem()}
  <h5>Cognac</h5>
  ${drinksAlcoholeMetaxa.engItem()}
  ${drinksAlcoholeRemiMartin.engItem()}
  ${drinksAlcoholeZakarpatskyi.engItem()}
  <h5>Vodka</h5>
  ${drinksAlcoholeAbsolute.engItem()}
  ${drinksAlcoholeFinland.engItem()}
  ${drinksAlcoholeHlibnyDar.engItem()}`;
});

document.querySelectorAll('.menu-drinks-alcohole-ua').forEach(item => {
  item.innerHTML = `
  <h5>Вино</h5>
  ${drinksAlcoholeWineCristatus.ukrItem()}
  ${drinksAlcoholeMartiniAsti.ukrItem()}
  ${drinksAlcoholeMartiniProsecco.ukrItem()}
  ${drinksAlcoholeFratelliMini.ukrItem()}
  ${drinksAlcoholeDelToro.ukrItem()}
  ${drinksAlcoholeFragolino.ukrItem()}
  ${drinksAlcoholeFratelli.ukrItem()}
  ${drinksAlcoholeFiorelli.ukrItem()}
  <h5>Коньяк</h5>
  ${drinksAlcoholeMetaxa.ukrItem()}
  ${drinksAlcoholeRemiMartin.ukrItem()}
  ${drinksAlcoholeZakarpatskyi.ukrItem()}
  <h5>Горілка</h5>
  ${drinksAlcoholeAbsolute.ukrItem()}
  ${drinksAlcoholeFinland.ukrItem()}
  ${drinksAlcoholeHlibnyDar.ukrItem()}`;
});

document.querySelectorAll('.menu-drinks-elite-en').forEach(item => {
  item.innerHTML = `
  <h5>Elite drinks</h5>
  ${drinksEliteOldSmuggler.engItem()}
  ${drinksEliteJameson.engItem()}
  ${drinksEliteJohnieRed.engItem()}
  ${drinksEliteJohnieBlack.engItem()}
  ${drinksEliteJack.engItem()}
  ${drinksEliteBarbados.engItem()}
  ${drinksEliteCapitan.engItem()}
  ${drinksEliteCapitanDark.engItem()}
  ${drinksEliteWhiteDiamonds.engItem()}
  ${drinksEliteBecherovka.engItem()}
  ${drinksEliteJagermeister.engItem()}
  ${drinksEliteOlmeco.engItem()}
  ${drinksEliteLondonDry.engItem()}
  ${drinksEliteRiga.engItem()}
  ${drinksEliteCointreau.engItem()}
  ${drinksEliteLimoncello.engItem()}
  ${drinksEliteMarieBrizard.engItem()}
  ${drinksEliteAmaroAverna.engItem()}
  ${drinksEliteCampari.engItem()}
  ${drinksEliteAperol.engItem()}`;
});

document.querySelectorAll('.menu-drinks-elite-ua').forEach(item => {
  item.innerHTML = `
  <h5>Елітні напої</h5>
  ${drinksEliteOldSmuggler.ukrItem()}
  ${drinksEliteJameson.ukrItem()}
  ${drinksEliteJohnieRed.ukrItem()}
  ${drinksEliteJohnieBlack.ukrItem()}
  ${drinksEliteJack.ukrItem()}
  ${drinksEliteBarbados.ukrItem()}
  ${drinksEliteCapitan.ukrItem()}
  ${drinksEliteCapitanDark.ukrItem()}
  ${drinksEliteWhiteDiamonds.ukrItem()}
  ${drinksEliteBecherovka.ukrItem()}
  ${drinksEliteJagermeister.ukrItem()}
  ${drinksEliteOlmeco.ukrItem()}
  ${drinksEliteLondonDry.ukrItem()}
  ${drinksEliteRiga.ukrItem()}
  ${drinksEliteCointreau.ukrItem()}
  ${drinksEliteLimoncello.ukrItem()}
  ${drinksEliteMarieBrizard.ukrItem()}
  ${drinksEliteAmaroAverna.ukrItem()}
  ${drinksEliteCampari.ukrItem()}
  ${drinksEliteAperol.ukrItem()}`;
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