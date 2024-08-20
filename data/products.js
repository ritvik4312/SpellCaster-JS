import { formatCurrency } from "../scripts/utils/money.js";

export function getProduct(productId) {
  let matchingProduct;

  products.forEach(product => {
    if(productId === product.id){
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

class Product{
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }
  
  getStarsUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }

  getPrice(){
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML(){
    return '';
  }
}
class Clothing extends Product{
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML(){
    return `
      <a href="${this.sizeChartLink}" target="_blank" class="size-chart-link">Size Chart</a>
    `;
  }
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/ob-85-bar-lrg.jpg.webp",
    name: "Olympic Bar - 45lb ",
    rating: {
      stars: 4.5,
      count: 87
    },
    priceCents: 10090
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/cik-20k-face_1.jpg.webp",
    name: "KettleBell Iron - 15lb",
    rating: {
      stars: 2,
      count: 11
    },
    priceCents: 2095
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/51GHSEv+gwS._AC_UY1000_.jpg",
    name: "Gym T-Shirt",
    rating: {
      stars: 4.5,
      count: 13
    },
    priceCents: 1899,
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/Dumbbell-25lb.png",
    name: "Hex Dumbbell - 25lb",
    rating: {
      stars: 3.5,
      count: 52
    },
    priceCents: 4499
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/35lb Dumbbell.png",
    name: "Hex Dumbbell - 35lb",
    rating: {
      stars: 4,
      count: 26
    },
    priceCents: 5499
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/45lb Dumbbell.png",
    name: "Hex Dumbbell - 45lb",
    rating: {
      stars: 4.5,
      count: 3
    },
    priceCents: 6499
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/IRONAX-10.jpg.webp",
    name: "10lb Weight Plate",
    rating: {
      stars: 4.5,
      count: 4
    },
    priceCents: 7055
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/crumb-25.jpg.webp",
    name: "25lb Weight Plate",
    rating: {
      stars: 4.5,
      count: 9
    },
    priceCents: 9055
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/crumb-45_b16ea2e9-bb9d-4b18-8fc5-add249ff4197.jpg.webp",
    name: "45lb Weight Plate",
    rating: {
      stars: 4.5,
      count: 10
    },
    priceCents: 11055
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/1324406403-1_fight-monkey-mexican-style-stretchy-hand-wraps.jpg.webp",
    name: "Hand Wraps",
    rating: {
      stars: 5,
      count: 12
    },
    priceCents: 999
  }
].map((productDetails)=>{
  if(productDetails.type === 'clothing'){
    return new Clothing(productDetails);
  }
  return new Product(productDetails);
});