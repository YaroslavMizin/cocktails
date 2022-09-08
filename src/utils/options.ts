export enum optionsAlcohol {
    ALL = 'All',
    ALCHOHOLIC = 'Alcoholic',
    NON_ALCOHOLIC = 'Non alcoholic',
    OPTIONAL_ALCOHOLIC = 'Optional alcohol'
}

export enum optionsGlasses {
    ALL = 'All',
    HIGHBALL = 'Highball glass',
    COCKTAIL = 'Cocktail glass',
    OLD_FASHIONED = 'Old-fashioned glass',
    WHISKEY = 'Whiskey Glass',
    COLLINS = 'Collins glass',
    POUSSE = 'Pousse cafe glass',
    CHAMPAGNE = 'Champagne flute',
    WHISKEY_SOUR = 'Whiskey sour glass',
    CORDIAL = 'Cordial glass',
    BRANDY = 'Brandy snifter',
    WHITE_WINE = 'White wine glass',
    NICK_AND_NORA = 'Nick and Nora Glass',
    HURRICANE = 'Hurricane glass',
    COFFEE_MUG = 'Coffee mug',
    SHOT = 'Shot glass',
    JAR = 'Jar',
    IRISH_COFFEE = 'Irish coffee cup',
    BOWL = 'Punch bowl',
    PITCHER = 'Pitcher',
    PINT = 'Pint glass',
    COPPER_MUG = 'Copper Mug',
    WHITE_GLASS = 'Wine Glass',
    BEER_MUG = 'Beer mug',
    MARGARITA_COUPETTE = 'Margarita/Coupette glass',
    PILSNER = 'Beer pilsner',
    BEER = 'Beer Glass',
    PARAFIT = 'Parfait glass',
    MASON = 'Mason jar',
    MARGARITA = 'Margarita glass',
    MARTINI = 'Martini Glass',
    BALLOON = 'Balloon Glass',
    COUPE = 'Coupe Glass'
}

export enum optionsCategories {
    ALL = 'All',
    ORDINARY = 'Ordinary Drink',
    COCKTAIL = 'Cocktail',
    SHAKE = 'Shake',
    OTHER = 'Other/Unknown',
    COCOA = 'Cocoa',
    SHOT = 'Shot',
    COFFEE = 'Coffee / Tea',
    HOMEMADE_LIQUEUR = 'Homemade Liqueur',
    PUNCH = 'Punch / Party Drink',
    BEER = 'Beer',
    SOFT_DRINK = 'Soft Drink'
}

export const optionsAlco = Object.values(optionsAlcohol);
export const optionsGlass = Object.values(optionsGlasses);
export const optionsCat = Object.values(optionsCategories);

export const options = [
    {name: 'ALCOHOL', options: optionsAlco},
    {name: 'GLASS', options: optionsGlass},
    {name: 'CATEGORY', options: optionsCat}
];