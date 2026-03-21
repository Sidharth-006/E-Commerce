export const trendingProducts = [
  {
    id: 1,
    name: "Sneakers",
    price: 120,
    image: "https://redtape.com/cdn/shop/files/RSL0536A_1.jpg?v=1756978647",
  },
  {
    id: 2,
    name: "Watch",
    price: 250,
    image: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3b18bfe1/images/Sonata/Catalog/87067WM01_1.jpg?sw=600&sh=600",
  },
  {
    id: 3,
    name: "Jacket",
    price: 180,
    image: "https://teakwoodleathers.com/cdn/shop/files/T_JKT_5081_CBR_1080x.jpg?v=1708665796",
  },
  {
    id: 4,
    name: "Headphones",
    price: 90,
    image: "https://m.media-amazon.com/images/I/61Kcfl-4XYL.jpg",
  },
  {
    id: 5,
    name: "Cap",
    price: 100,
    image: "https://static.vecteezy.com/system/resources/thumbnails/063/232/344/small/stylish-maroon-baseball-cap-positioned-on-a-surface-with-soft-lighting-creating-a-modern-aesthetic-atmosphere-free-photo.jpeg"
  }
];

export const bestSellers = [
  {
    id: 6,
    name: "Laptop",
    price: 800,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
  },
  {
    id: 7,
    name: "Phone",
    price: 600,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 8,
    name: "Camera",
    price: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwonqDms3mxxW0Av6v93XGVUXbDAkVC1CEA&s",
  },
  {
    id: 9,
    name: "Tablet",
    price: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQedzT1gQj2FL7PFrYCMuiWlcYcrUTUOKNULw&s",
  },
  {
    id: 10,
    name: "Speaker",
    price: 150,
    image: "https://images.philips.com/is/image/philipsconsumer/df545073a8474e55bb16b0c40120ff1c?wid=700&hei=700&$pnglarge$",
  },
];

export const newArrivals = [
  {
    id: 11,
    name: "T-Shirt",
    price: 25,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
  },
  {
    id: 12,
    name: "Jeans",
    price: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9rdSgH3DpYo-sMJmDTMFeskiIfX05Z8RMQ&s",
  },
  {
    id: 13,
    name: "Shoes",
    price: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_zGAASJORZGOU-19KvRIcbNhjG5R8b8ycmQ&s",
  },
  {
    id: 14,
    name: "Bag",
    price: 70,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400",
  },
  {
    id: 15,
    name: "Sunglasses",
    price: 40,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400",
  },
];


// ✅ IMPORTANT FIX
export const products = [
  ...trendingProducts,
  ...bestSellers,
  ...newArrivals,
];


