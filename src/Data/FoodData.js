export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Cheese Pizza",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Tomato Pizza",
    img: "/img/tomatoveggie.jpg ",
    section: "Pizza",
    price: 2
  },
  {
    name: "Veg Extravenza",
    img: "/img/vegextravenza.jpg",
    section: "Pizza",
    price: 2
  },
  {
    name: "Spiced Pepperoni Pizza",
    img: "/img/pepperonipizza.jpg",
    section: "Pizza",
    price: 2
  },
  {
    name: "Veg Pizza",
    img: "/img/veggie.jpg",
    section: "Pizza",
    price: 2
  },
  {
    name: "Chicken Pizza",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Burger",
    section: "Sandwich",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Gyro", section: "Sandwich", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Shrimp PoBoy",
    section: "Sandwich",
    price: 6
  },
  {
    img: "/img/fries.jpeg",
    name: "Fries",
    section: "Sides",
    price: 1
  },
  {
    img: "/img/soda.jpg",
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  console.log(res);
  
  return res;
}, {});

