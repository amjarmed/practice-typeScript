"use strict";
/*
In database models (such as in an ORM like Prisma or Sequelize), interfaces are often used to define the shape of the models.


*/
function saveProduct(product) {
    console.log(`Saving product: ${product.name}`);
}
const newProduct = {
    id: 1,
    name: "Laptop",
    price: 1500,
    description: "A powerful laptop",
    inStock: true,
};
saveProduct(newProduct);
