const resList = [
  {
    id: 1,
    name: "Burger Palace",
    cuisine: ["Fast Food", "American"],
    rating: 4.7,
    deliveryTime: "40 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG9BlJo478J0N9Y8lVCkSi97MyDwbG3WpAA&s",
    costForTwo: 40000,
    menu: [
      {
        itemId: 1,
        name: "Spicy Treat #1",
        price: 155,
        description: "A fiery experience for spice lovers",
      },
      {
        itemId: 2,
        name: "Sweet Ending #2",
        price: 141,
        description: "A dessert to end your meal",
      },
      {
        itemId: 3,
        name: "Veg Delight #3",
        price: 143,
        description: "Fresh and healthy vegetarian option",
      },
    ],
  },
  {
    id: 2,
    name: "Tandoori Treats",
    cuisine: ["Indian", "North Indian"],
    rating: 3.7,
    deliveryTime: "32 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG36X3uHGqCi7Q7a3N28mr_5uTsZbzWUUU3Q&s",
    costForTwo: 43000,
    menu: [
      {
        itemId: 101,
        name: "Special Dish #1",
        price: 121,
        description: "A delicious signature dish",
      },
      {
        itemId: 102,
        name: "Spicy Treat #2",
        price: 154,
        description: "A fiery experience for spice lovers",
      },
      {
        itemId: 103,
        name: "Sweet Ending #3",
        price: 241,
        description: "A dessert to end your meal",
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Samba",
    cuisine: ["Japanese", "Sushi"],
    rating: 3.7,
    deliveryTime: "47 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXZxM9oJMgCXnxPeMhjA_sSlUDyEF7IQw-Q&s",
    costForTwo: 20000,
    menu: [
      {
        itemId: 201,
        name: "Chicken Feast #1",
        price: 224,
        description: "Juicy chicken cooked to perfection",
      },
      {
        itemId: 202,
        name: "Special Dish #2",
        price: 288,
        description: "A delicious signature dish",
      },
      {
        itemId: 203,
        name: "Veg Delight #3",
        price: 246,
        description: "Fresh and healthy vegetarian option",
      },
    ],
  },
  {
    id: 4,
    name: "Pasta Fiesta",
    cuisine: ["Italian", "Pasta"],
    rating: 4.5,
    deliveryTime: "37 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGghgJ7esaJXoexEm6ZByIDnmz_K5Uz3bTgQ&s",
    costForTwo: 32000,
    menu: [
      {
        itemId: 301,
        name: "Special Dish #1",
        price: 274,
        description: "A delicious signature dish",
      },
      {
        itemId: 302,
        name: "Veg Delight #2",
        price: 149,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 303,
        name: "Special Dish #3",
        price: 225,
        description: "A delicious signature dish",
      },
    ],
  },
  {
    id: 5,
    name: "Curry Junction",
    cuisine: ["Indian", "South Indian"],
    rating: 4.2,
    deliveryTime: "28 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs93yGxdB9pS_lniOca2lN71kmb3ZsQTX4nQ&s",
    costForTwo: 98000,
    menu: [
      {
        itemId: 401,
        name: "Special Dish #1",
        price: 300,
        description: "A delicious signature dish",
      },
      {
        itemId: 402,
        name: "Chicken Feast #2",
        price: 298,
        description: "Juicy chicken cooked to perfection",
      },
      {
        itemId: 403,
        name: "Sweet Ending #3",
        price: 288,
        description: "A dessert to end your meal",
      },
    ],
  },
  {
    id: 6,
    name: "Pizza Paradise",
    cuisine: ["Italian", "Pizza"],
    rating: 4.2,
    deliveryTime: "31 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqF2LL1wkHCocaXZBs9pctz7flor0MMvRFng&s",
    costForTwo: 28000,
    menu: [
      {
        itemId: 501,
        name: "Spicy Treat #1",
        price: 190,
        description: "A fiery experience for spice lovers",
      },
      {
        itemId: 502,
        name: "Special Dish #2",
        price: 254,
        description: "A delicious signature dish",
      },
      {
        itemId: 503,
        name: "Sweet Ending #3",
        price: 135,
        description: "A dessert to end your meal",
      },
    ],
  },
  {
    id: 7,
    name: "The Salad Bowl",
    cuisine: ["Healthy", "Salads"],
    rating: 4.8,
    deliveryTime: "31 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThzid4_U1SecPhePXPAg9rYDnQB8z6iycUbQ&s",
    costForTwo: 54000,
    menu: [
      {
        itemId: 601,
        name: "Veg Delight #1",
        price: 117,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 602,
        name: "Chicken Feast #2",
        price: 300,
        description: "Juicy chicken cooked to perfection",
      },
      {
        itemId: 603,
        name: "Sweet Ending #3",
        price: 156,
        description: "A dessert to end your meal",
      },
    ],
  },
  {
    id: 8,
    name: "Kebab Kingdom",
    cuisine: ["Middle Eastern", "Grill"],
    rating: 4.3,
    deliveryTime: "43 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYA-JD8ZCIBXDKRGi4WWNQpnYPW8Hmv6gksQ&s",
    costForTwo: 46000,
    menu: [
      {
        itemId: 701,
        name: "Veg Delight #1",
        price: 163,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 702,
        name: "Special Dish #2",
        price: 212,
        description: "A delicious signature dish",
      },
      {
        itemId: 703,
        name: "Veg Delight #3",
        price: 216,
        description: "Fresh and healthy vegetarian option",
      },
    ],
  },
  {
    id: 9,
    name: "Biryani Bliss",
    cuisine: ["Indian", "Hyderabadi"],
    rating: 4.2,
    deliveryTime: "37 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GznyhguhDLrRzDTn3cBZnPi_NpbGttIpqg&s",
    costForTwo: 54000,
    menu: [
      {
        itemId: 801,
        name: "Chicken Feast #1",
        price: 185,
        description: "Juicy chicken cooked to perfection",
      },
      {
        itemId: 802,
        name: "Chicken Feast #2",
        price: 277,
        description: "Juicy chicken cooked to perfection",
      },
      {
        itemId: 803,
        name: "Chicken Feast #3",
        price: 102,
        description: "Juicy chicken cooked to perfection",
      },
    ],
  },
  {
    id: 10,
    name: "Wrap It Up",
    cuisine: ["Mexican", "Wraps"],
    rating: 3.8,
    deliveryTime: "46 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkp8oyTZhIG0Tyc--tbbsYpNLny6mByavV8A&s",
    costForTwo: 31000,
    menu: [
      {
        itemId: 901,
        name: "Veg Delight #1",
        price: 271,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 902,
        name: "Sweet Ending #2",
        price: 230,
        description: "A dessert to end your meal",
      },
      {
        itemId: 903,
        name: "Chicken Feast #3",
        price: 288,
        description: "Juicy chicken cooked to perfection",
      },
    ],
  },
  {
    id: 11,
    name: "Chow Mein House",
    cuisine: ["Chinese", "Asian"],
    rating: 3.6,
    deliveryTime: "27 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfKGhBpim8TeKZqTBZvDQpmkUXYYsrxIdMw&s",
    costForTwo: 65000,
    menu: [
      {
        itemId: 1001,
        name: "Veg Delight #1",
        price: 130,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1002,
        name: "Veg Delight #2",
        price: 288,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1003,
        name: "Special Dish #3",
        price: 258,
        description: "A delicious signature dish",
      },
    ],
  },
  {
    id: 12,
    name: "Taco Town",
    cuisine: ["Mexican", "Tacos"],
    rating: 5.0,
    deliveryTime: "26 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzABOkP9sW03OtlwGnaY08nM_Oll-l94uzA&s",
    costForTwo: 53000,
    menu: [
      {
        itemId: 1101,
        name: "Veg Delight #1",
        price: 208,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1102,
        name: "Spicy Treat #2",
        price: 154,
        description: "A fiery experience for spice lovers",
      },
      {
        itemId: 1103,
        name: "Special Dish #3",
        price: 245,
        description: "A delicious signature dish",
      },
    ],
  },
  {
    id: 13,
    name: "Waffle Wonders",
    cuisine: ["Desserts", "Waffles"],
    rating: 4.8,
    deliveryTime: "37 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnp6xxK7AKki-yURSPoxFWX5MORNlkmlsIJg&s",
    costForTwo: 24000,
    menu: [
      {
        itemId: 1201,
        name: "Veg Delight #1",
        price: 140,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1202,
        name: "Veg Delight #2",
        price: 288,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1203,
        name: "Sweet Ending #3",
        price: 300,
        description: "A dessert to end your meal",
      },
    ],
  },
  {
    id: 14,
    name: "Grill & Greens",
    cuisine: ["Continental", "Grill"],
    rating: 4.4,
    deliveryTime: "47 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVc4U1Wqc0UWf3Gi6mQwZd5KWwL0FbONg3yw&s",
    costForTwo: 21000,
    menu: [
      {
        itemId: 1301,
        name: "Veg Delight #1",
        price: 215,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1302,
        name: "Veg Delight #2",
        price: 105,
        description: "Fresh and healthy vegetarian option",
      },
      {
        itemId: 1303,
        name: "Special Dish #3",
        price: 214,
        description: "A delicious signature dish",
      },
    ],
  },
  {
    id: 15,
    name: "Donut Delight",
    cuisine: ["Desserts", "Bakery"],
    rating: 3.9,
    deliveryTime: "37 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxha4Q-uhN2oG5yWITw1GpEb92ZEjpuRFzQ&s",
    costForTwo: 54000,
    menu: [
      {
        itemId: 1401,
        name: "Special Dish #1",
        price: 120,
        description: "A delicious signature dish",
      },
      {
        itemId: 1402,
        name: "Spicy Treat #2",
        price: 173,
        description: "A fiery experience for spice lovers",
      },
      {
        itemId: 1403,
        name: "Special Dish #3",
        price: 216,
        description: "A delicious signature dish",
      },
    ],
  },
];

export default resList;
