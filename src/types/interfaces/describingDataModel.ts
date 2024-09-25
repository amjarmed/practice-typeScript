/* 
In database models (such as in an ORM like Prisma or Sequelize), interfaces are often used to define the shape of the models.


*/

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
}

function saveProduct(product: Product) {
  console.log(`Saving product: ${product.name}`);
}

const newProduct: Product = {
  id: 1,
  name: "Laptop",
  price: 1500,
  description: "A powerful laptop",
  inStock: true,
};

saveProduct(newProduct);
