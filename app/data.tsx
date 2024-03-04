// Copyright 2024 Core2002

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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








