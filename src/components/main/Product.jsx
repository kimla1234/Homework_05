import React from "react";
import { Card } from "flowbite-react";

function ComponentProduct() {
  // Array of product data
  const products = [
    {
      id: 1,
      imgSrc: "src/assets/img_01.jpeg",
      productName: `Tomato, Peach, and Burrata Salad. Vegetarian, Gluten free · 6 servings`,
      productPrice: 20,
    },
    {
      id: 2,
      imgSrc: "src/assets/img_02.jpeg",
      productName: `Tuscan Steak and Rosemary Potatoes with Cherry Tomatoes, Green Beans `,
      productPrice: 15,
    },
    {
      id: 3,
      imgSrc: "src/assets/img_03.jpeg",
      productName: `Grilled Chicken Salad + Homemade Sweet Onion DressingGluten free ·`,
      productPrice: 18,
    },
    {
      id: 4,
      imgSrc: "src/assets/img_04.jpeg",
      productName: `19 Delicious and Fresh Summer Salad RecipesPerfect.for lunch`,
      productPrice: 22,
    },
    {
      id: 5,
      imgSrc: "src/assets/img_05.jpeg",
      productName: `19 Delicious and Fresh Summer Salad RecipesPerfect.for lunch`,
      productPrice: 19,
    },
    {
      id: 6,
      imgSrc: "src/assets/img_06.jpeg",
      productName: `19 Delicious and Fresh Summer Salad RecipesPerfect.for lunch`,
      productPrice: 17,
    },
    {
      id: 7,
      imgSrc: "src/assets/img_07.jpeg",
      productName: `19 Delicious and Fresh Summer Salad RecipesPerfect.for lunch`,
      productPrice: 21,
    },
    {
      id: 8,
      imgSrc: "src/assets/img_08.jpeg",
      productName: `19 Delicious and Fresh Summer Salad RecipesPerfect.for lunch`,
      productPrice: 22,
    },
  ];

  return (
    <div className=" w-full grid lg:grid-cols-4 gap-5 p-10  sm:grid-cols-2 sm:p-5  ">
      {products.map((product) => (
        
        <Card key={product.id} >
          <img
            className="w-full h-56 rounded object-cover "
            src={product.imgSrc}
          />
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.productName}
            </h5>
          </a>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${product.productPrice}
            </span>
            <a
              href="#"
              className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Add to cart
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ComponentProduct;
