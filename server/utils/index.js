const products = [
    {
      discount: 25,
      name: "Apple Macbook Aire 13",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/notebooks/note_1.jpg",
      images: [
        "https://picsum.photos/seed/macbook-air-1/560/400",
        "https://picsum.photos/seed/macbook-air-2/560/400",
        "https://picsum.photos/seed/macbook-air-3/560/400",
      ],
      price: 37.0,
      productId: 1,
      categoryId: 1, // Laptops
    },
    {
      discount: 25,
      name: "PlayStation 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/gaming/consoles.jpg",
      images: [
        "https://picsum.photos/seed/ps5-1/560/400",
        "https://picsum.photos/seed/ps5-2/560/400",
        "https://picsum.photos/seed/ps5-3/560/400",
      ],
      price: 37.0,
      productId: 2,
      categoryId: 2, // Gaming Consoles
    },
    {
      discount: 25,
      name: "Mousepad Hyperx Fury S Pro Speed",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/mousepad.jpg",
      images: [
        "https://picsum.photos/seed/hyperx-pad-1/560/400",
        "https://picsum.photos/seed/hyperx-pad-2/560/400",
        "https://picsum.photos/seed/hyperx-pad-3/560/400",
      ],
      price: 37.0,
      productId: 3,
      categoryId: 3, // Mousepads
    },
    {
      discount: 25,
      name: "Ryzen 5 3600x",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/pc_components/processors.jpg",
      images: [
        "https://picsum.photos/seed/ryzen-3600x-1/560/400",
        "https://picsum.photos/seed/ryzen-3600x-2/560/400",
        "https://picsum.photos/seed/ryzen-3600x-3/560/400",
      ],
      price: 37.0,
      productId: 4,
      categoryId: 4, // Processors
    },
    {
      discount: 25,
      name: "Mouse Logitech g403",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/categories/peripherals/mouse.jpg",
      images: [
        "https://picsum.photos/seed/logitech-g403-1/560/400",
        "https://picsum.photos/seed/logitech-g403-2/560/400",
        "https://picsum.photos/seed/logitech-g403-3/560/400",
      ],
      price: 37.0,
      productId: 5,
      categoryId: 5, // Mice
    },
    {
      discount: 25,
      name: "Moto e7i Power",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/phones/phone_1.jpg",
      images: [
        "https://picsum.photos/seed/moto-e7i-1/560/400",
        "https://picsum.photos/seed/moto-e7i-2/560/400",
        "https://picsum.photos/seed/moto-e7i-3/560/400",
      ],
      price: 37.0,
      productId: 6,
      categoryId: 6, // Smartphones
    },
    {
      discount: 25,
      name: "Dell Inspiron",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/notebooks/note_6.jpg",
      images: [
        "https://picsum.photos/seed/dell-inspiron-1/560/400",
        "https://picsum.photos/seed/dell-inspiron-2/560/400",
        "https://picsum.photos/seed/dell-inspiron-3/560/400",
      ],
      price: 37.0,
      productId: 7,
      categoryId: 1, // Laptops
    },
    {
      discount: 25,
      name: "Samsung Galaxy Z Fold4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa, odio, qui praesentium dignissimos eaque dolorum porro alias neque.",
      stock: "instock",
      imageUrl: "img/cards/phones/phone_5.jpg",
      images: [
        "https://picsum.photos/seed/zfold4-1/560/400",
        "https://picsum.photos/seed/zfold4-2/560/400",
        "https://picsum.photos/seed/zfold4-3/560/400",
      ],
      price: 37.0,
      productId: 8,
      categoryId: 6, // Smartphones
    },
  ];


  module.exports = {products};