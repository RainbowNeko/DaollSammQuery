// **地名** - Place name
// **料理** - Dish
// **客人** - Guest
// **食材** - Ingredients
// **正特性** - Positive characteristics
// **反特性** - Negative characteristics

// 厨具、价格、食材、等级、时间、获取方式
// Kitchenware, Price, Ingredients, Grade, Time, AcquisitionMethod


interface PlaceData {
    PlaceName: string[];
    Dish: string[];
    Guest: string[];
}

var dic: PlaceData = {
    PlaceName: [],
    Dish: [],
    Guest: [],
};

var Ingredients = {
    "PositiveCharacteristics": [],
    "NegativeCharacteristics": []
}

var Dish = {
    "Kitchenware": "",
    "Ingredients": [],
    "Price": 1,
    "Grade": 1,
    "Time": 1,
    "AcquisitionMethod": ""
}








