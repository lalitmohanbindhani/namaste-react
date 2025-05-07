const resList = [
  {
    id: 1,
    name: "Spice Junction",
    rating: 4.2,
    cuisine: ["North Indian", "Biryani"],
    deliveryTime: "30 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EeELSjgasvpIeCYxcVZMNTHMr95qJrj9nQ&s",
    costForTwo: 40000,
    menu: [
      {
        id: "s1",
        name: "Chicken Biryani",
        price: 199,
        description: "Fragrant basmati rice cooked with chicken",
        image: "chicken-biryani.png",
      },
      {
        id: "s2",
        name: "Paneer Butter Masala",
        price: 159,
        description: "Creamy tomato gravy with paneer cubes",
        image: "paneer-butter-masala.png",
      },
    ],
  },
  {
    id: 2,
    name: "Tandoori Treat",
    rating: 4.0,
    cuisine: ["Tandoori", "Kebabs"],
    deliveryTime: "35 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/5/777f7f40-8deb-48b8-a1d4-4b5c168d8e9c_558773.jpg",
    costForTwo: 54000,
    menu: [
      {
        id: "t1",
        name: "Tandoori Chicken",
        price: 220,
        description: "Spiced and grilled chicken leg pieces",
        image: "tandoori-chicken.png",
      },
      {
        id: "t2",
        name: "Paneer Tikka",
        price: 180,
        description: "Grilled paneer with capsicum and onions",
        image: "paneer-tikka.png",
      },
    ],
  },
  {
    id: 3,
    name: "Urban Chinese",
    rating: 4.1,
    cuisine: ["Chinese", "Asian"],
    deliveryTime: "28 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/2089cc78-7c96-4e5c-a613-7dca206c90c8_93497.JPG",
    costForTwo: 32000,
    menu: [
      {
        id: "u1",
        name: "Veg Hakka Noodles",
        price: 120,
        description: "Stir-fried noodles with vegetables",
        image: "hakka-noodles.png",
      },
      {
        id: "u2",
        name: "Chicken Manchurian",
        price: 150,
        description: "Fried chicken balls in spicy sauce",
        image: "chicken-manchurian.png",
      },
    ],
  },
  {
    id: 4,
    name: "Burger Haven",
    rating: 4.5,
    cuisine: ["Fast Food", "Burgers"],
    deliveryTime: "25 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Ye-JmZntdssuFpSQVT-_CjLtiOLtxQ2xQ&s",
    costForTwo: 23000,
    menu: [
      {
        id: "b1",
        name: "Cheese Burger",
        price: 129,
        description: "Juicy beef patty with cheddar cheese",
        image: "cheese-burger.png",
      },
      {
        id: "b2",
        name: "Veg Burger",
        price: 99,
        description: "Crispy veggie patty with mayo",
        image: "veg-burger.png",
      },
    ],
  },
  {
    id: 5,
    name: "Pizza Galaxy",
    rating: 4.3,
    cuisine: ["Pizza", "Italian"],
    deliveryTime: "30 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_392828.JPG",
    costForTwo: 52000,
    menu: [
      {
        id: "p1",
        name: "Margherita",
        price: 149,
        description: "Classic cheese and tomato pizza",
        image: "margherita.png",
      },
      {
        id: "p2",
        name: "Farmhouse",
        price: 199,
        description: "Loaded with veggies and cheese",
        image: "farmhouse.png",
      },
    ],
  },
  {
    id: 6,
    name: "Roll Express",
    rating: 4.0,
    cuisine: ["Wraps", "Quick Bites"],
    deliveryTime: "20 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/20/fa0ef6c3-ddd4-4c9c-9d60-fd0386212669_457522.jpg",
    costForTwo: 33000,
    menu: [
      {
        id: "r1",
        name: "Egg Roll",
        price: 79,
        description: "Flatbread wrap with egg and onions",
        image: "egg-roll.png",
      },
      {
        id: "r2",
        name: "Chicken Kathi Roll",
        price: 129,
        description: "Spiced chicken wrap in paratha",
        image: "kathi-roll.png",
      },
    ],
  },
  {
    id: 7,
    name: "South Delight",
    rating: 4.2,
    cuisine: ["South Indian", "Vegetarian"],
    deliveryTime: "22 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/77baefd8a5e319c828b4d7dff7260644",
    costForTwo: 54000,
    menu: [
      {
        id: "sd1",
        name: "Masala Dosa",
        price: 90,
        description: "Crispy dosa stuffed with potato masala",
        image: "masala-dosa.png",
      },
      {
        id: "sd2",
        name: "Idli Sambar",
        price: 70,
        description: "Steamed idlis served with sambar",
        image: "idli-sambar.png",
      },
    ],
  },
  {
    id: 8,
    name: "The Pasta Bar",
    rating: 4.4,
    cuisine: ["Italian", "Pasta"],
    deliveryTime: "27 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/22a543e5-00c7-4697-a09d-31105c542191_819529.jpg",
    costForTwo: 87000,
    menu: [
      {
        id: "tp1",
        name: "White Sauce Pasta",
        price: 170,
        description: "Creamy pasta with cheese and herbs",
        image: "white-pasta.png",
      },
      {
        id: "tp2",
        name: "Red Sauce Pasta",
        price: 160,
        description: "Pasta with tangy tomato sauce",
        image: "red-pasta.png",
      },
    ],
  },
  {
    id: 9,
    name: "Punjabi Rasoi",
    rating: 4.3,
    cuisine: ["Punjabi", "Thali"],
    deliveryTime: "30 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomxFkH7dgsHAUXbwIvos8Abkguv7uf7EtWg&s",
    costForTwo: 90000,
    menu: [
      {
        id: "pr1",
        name: "Amritsari Kulcha",
        price: 110,
        description: "Stuffed kulcha with chole",
        image: "amritsari-kulcha.png",
      },
      {
        id: "pr2",
        name: "Dal Makhani",
        price: 140,
        description: "Creamy lentils cooked with spices",
        image: "dal-makhani.png",
      },
    ],
  },
  {
    id: 10,
    name: "Chatpat Street",
    rating: 4.1,
    cuisine: ["Chaat", "Snacks"],
    deliveryTime: "15 mins",
    image:
      "https://images.yourstory.com/cs/2/a09f22505c6411ea9c48a10bad99c62f/Imagem0id-1707394707782.jpg",
    costForTwo: 124000,
    menu: [
      {
        id: "cs1",
        name: "Pani Puri",
        price: 60,
        description: "Crispy puris with tangy water",
        image: "pani-puri.png",
      },
      {
        id: "cs2",
        name: "Aloo Tikki Chaat",
        price: 75,
        description: "Fried potato patties with chutneys",
        image: "aloo-tikki.png",
      },
    ],
  },
  {
    id: 11,
    name: "Healthy Bowl",
    rating: 4.6,
    cuisine: ["Healthy", "Salads"],
    deliveryTime: "25 mins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/e34f509e-077f-4aa3-a100-a9ed774f68a5_678599.jpg",
    costForTwo: 23100,
    menu: [
      {
        id: "hb1",
        name: "Quinoa Salad",
        price: 180,
        description: "High-protein salad with veggies",
        image: "quinoa-salad.png",
      },
      {
        id: "hb2",
        name: "Fruit Bowl",
        price: 150,
        description: "Assorted seasonal fruits",
        image: "fruit-bowl.png",
      },
    ],
  },
  {
    id: 12,
    name: "Momo Mania",
    rating: 4.0,
    cuisine: ["Tibetan", "Momos"],
    deliveryTime: "18 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7H8eJ2A997K3pr8djmi6vN6sNpmcd_gLQw&s",
    costForTwo: 64000,
    menu: [
      {
        id: "mm1",
        name: "Veg Momos",
        price: 90,
        description: "Steamed momos filled with veggies",
        image: "veg-momos.png",
      },
      {
        id: "mm2",
        name: "Chicken Momos",
        price: 110,
        description: "Juicy chicken-filled dumplings",
        image: "chicken-momos.png",
      },
    ],
  },
  {
    id: 13,
    name: "Sweet Corner",
    rating: 4.5,
    cuisine: ["Desserts", "Bakery"],
    deliveryTime: "20 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVHbID8pvMZaniRoCAKqCdUpOK4gtAolWTw&s",
    costForTwo: 84000,
    menu: [
      {
        id: "sc1",
        name: "Gulab Jamun",
        price: 60,
        description: "Milk-solid dumplings in sugar syrup",
        image: "gulab-jamun.png",
      },
      {
        id: "sc2",
        name: "Chocolate Cake",
        price: 130,
        description: "Rich moist chocolate sponge cake",
        image: "chocolate-cake.png",
      },
    ],
  },
  {
    id: 14,
    name: "Beverage Booth",
    rating: 4.2,
    cuisine: ["Beverages", "Juices"],
    deliveryTime: "15 mins",
    image:
      "https://content.jdmagicbox.com/v2/comp/bangalore/i1/080pxx80.xx80.141014041507.v4i1/catalogue/swiggy-com-head-office-koramangala-1st-block-bangalore-online-websites-for-food-delivery-3jz1ov7.jpg",
    costForTwo: 42000,
    menu: [
      {
        id: "bb1",
        name: "Mango Smoothie",
        price: 90,
        description: "Fresh mango blended with yogurt",
        image: "mango-smoothie.png",
      },
      {
        id: "bb2",
        name: "Cold Coffee",
        price: 100,
        description: "Chilled coffee with cream",
        image: "cold-coffee.png",
      },
    ],
  },
  {
    id: 15,
    name: "Eggstasy",
    rating: 4.3,
    cuisine: ["Eggs", "Breakfast"],
    deliveryTime: "18 mins",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpzBNNfs7KIHfmmLFnAqk8F2ZlzjICDmPVQ&s",
    costForTwo: 82000,
    menu: [
      {
        id: "eg1",
        name: "Boiled Eggs",
        price: 50,
        description: "2 perfectly boiled eggs",
        image: "boiled-eggs.png",
      },
      {
        id: "eg2",
        name: "Masala Omelette",
        price: 80,
        description: "Spiced omelette with onions and herbs",
        image: "masala-omelette.png",
      },
    ],
  },
];

export default resList;
