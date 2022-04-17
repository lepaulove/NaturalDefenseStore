const smoothies = {
    "Nutritional":{
        "Morning Defense Special":[
            "Oatmeal", "Banana", "Nonfat Yogurt", "Flex Seed", "Wheat Germ", "Soy Protein", "Wheat Protein"
        ],
        "Morning Sunshine":[
            "Strawberry", "Banana", "Soy Protein", "Whey Protein"
        ],
        "Stress Buster":[
            "Strawberry", "Banana", "Pineapple", "Coconut Cream", "Yogurt"
        ],
        "Immune Defense":[
            "Orange", "Strawberry", "Pomegranate"
        ],
        "Superfood Splash":[
            "Kale", "Apple", "Carrot", "Kivi", "Lemon", "Soy Protein", "Whey Protein"
        ],
        "Immunity Enhancement":[
            "Soursop", "Mango", "Pineapple", "Nonfat Yogurt", "Coconut Cream"
        ]
    },
    "Performance":{
        "Muscle Plus":[
            "Banana", "Blueberry", "Almond Extract", "Whey Protein", "Honey"
        ],
        "Slim Down DLite":[
            "Pineapple", "Banana", "Papya", "Vanilla Extract", "Grapefruit Juice", "Lime Juice"
        ],
        "Fat Burner Formula":[
            "Strawberry", "Pineapple", "Yogurt", "Whey Protein"
        ],
        "Peanut Paradise":[
            "Peanut Butter", "Banana", "Nonfat Yogurt", "Whey Protein", "Soy Protein"
        ],
        "Tropical Bliss":[
            "Pineapple", "Banana", "Coconut Cream", "Whey Protein"
        ]
    },
    "Tropical":{
        "Tropical":[
            "Mango", "Pineapple", "Banana", "Nonfat Yogurt", "Coconut Cream"
        ],
        "Papaya Drem":[
            "Papaya", "Orange Juice", "Vanilla Extract", "Vanilla Frozen Yogurt"
        ],
        "Coconut Paradise":[
            "Coconut", "Pineapple", "Lime"
        ],
        "Passionate Fruits":[
            "Passion fruit", "Mango", "Orange Juice"
        ],
        "Mango Mania":[
            "Mango", "Papaya", "Pineapple"
        ],
        "Banana Breeze":[
            "Banana", "Peanut Butter", "Honey", "Nonfat Yogurt", "Lowfat Milk"
        ]
    },
    "Ultimate Cleansing":{
        "Liver Detox":[
            "Apple", "Dandelion", "Celery", "Spinach", "Ginger", "Lemon"
        ],
        "Shred IT":[
            "Spinach", "Apple", "Moringa Powder", "Lime"
        ],
        "Berry Cleansing":[
            "Kale", "Blueberry", "Strawberry", "Flax Seed Oil", "Lemon"
        ]
    },
    "ND Special":{
        "The Classic":[
            "Strawberries", "Banana", "Nonfat Yogurt"
        ],
        "Signature Vegan":[
            "Mango", "Kale", "Papaya", "Coconut Cream"
        ],
        "Strawberry Delight":[
            "Strawberry", "Pineapple", "Coconut Cream", "Lime Juice"
        ],
        "Health Classic":[
            "Soursop", "Grapefruit Juice", "Yogurt", "Vanilla Extract"
        ]
    },
    "Build Your Own":{
        "Fresh Fruits":[
            "Mango", "Pineapple", "Banana", "Strawberry", "Coconut", "Papaya", "Blueberry", "Raspberry", "Cranberry", "Acai"
        ],
        "Fresh Vegetables":[
            "Kale", "Brocolli", "Carrot"
        ],
        "Extras":[
            "Ginger", "Nonfat Yogurt", "Whey Protein", "Soy Protein", "Honey", "Flax Seed", "Peanut Butter", "Wheat Germ"
        ]
    }   
}

const ingrediants = new Set()

// for(let key1 of Object.keys(smoothies)){
//     // console.log(key1 + ' -> ')
//     for(let key2 of Object.keys(smoothies[key1])){
//     //    console.log('\t' + key2 + " -> " + smoothies[key1][key2]) 
//        for(let item of smoothies[key1][key2]){
//         //    ingrediants.add(item)
//            console.log(item)
//        }
        
//     }
        
// }
const smooothies = {...smoothies, ...["Build Your Own"]["Fresh Fruits"]}

console.log({...smooothies})
